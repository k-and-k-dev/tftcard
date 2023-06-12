// react
import React, { useEffect, useRef } from "react";
// components
import { FormInputs } from "./Form";
// style
import styles from "./ImageWithText.module.scss";
// resources
import templateImagePath from "../../images/Template.png";
import poloImagePath from "../../images/Polo.png";
import dangoImagePath from "../../images/Dango.png";
import discordImagePath from "../../images/Discord.png";
import lineImagePath from "../../images/Line.png";

type Props = {
    formInputs: FormInputs;
};

export const ImageWithText = ({ formInputs }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const templateImage = new Image();
        templateImage.src = templateImagePath.src;
        templateImage.onload = () => {
            // キャンバス取得
            const canvas = canvasRef.current;
            if (canvas === null) {
                console.error("canvas is null!");
                return;
            }
            // 2Dコンテキスト取得
            const context = canvas.getContext("2d");
            if (context === null) {
                console.error("canvas 2d context is null!");
                return;
            }
            // テンプレート
            DrawTemplateImage(context, templateImage);
            // 名前
            DrawName(context, formInputs.name);
            // VC
            // VC画像パス設定
            const vcImagePaths: string[] = [];
            const vcImageNames: string[] = formInputs.vc;
            for (let i = 0; i < vcImageNames.length; i++) {
                const imagePath = CreateVCImagePath(vcImageNames[i]);
                if (imagePath === "") continue;
                vcImagePaths.push(imagePath);
            }
            DrawVCImage(context, vcImagePaths);
            // タクティシャン
            const tacticianNames: string[] = [formInputs.tactician3, formInputs.tactician2, formInputs.tactician1];
            DrawTacticianImages(context, tacticianNames);
            // 好きなゲームモード
            DrawGameModeImage(context, formInputs.gameMode);
        };
    }, [formInputs]);

    return (
        <div className={styles.container}>
            <canvas className={styles.canvas} ref={canvasRef} width={1920} height={1080} />;
        </div>
    );
};

const ratio = 1920 / 800;

const DrawTemplateImage = (context: CanvasRenderingContext2D, image: HTMLImageElement) => {
    context.drawImage(image, 0, 0);
};

const DrawName = (context: CanvasRenderingContext2D, name: string) => {
    context.font = "12px Arial";
    context.fillStyle = "red";
    context.fillText(name, 50 * ratio, 100 * ratio);
};

const DrawVCImage = (context: CanvasRenderingContext2D, vcImagePaths: string[]) => {
    const vcPointPointX: number[] = [70, 120, 170];
    const vcPointPointY: number[] = [220, 220, 220];
    let index = 0;
    vcImagePaths.map(async (path) => {
        const image = await loadImageAsync(path);
        context.drawImage(image, vcPointPointX[index] * ratio, vcPointPointY[index] * ratio, 50 * ratio, 50 * ratio);
        index++;
    });
};

const loadImageAsync = async (path: string): Promise<HTMLImageElement> => {
    const image = new Image();
    image.src = path;
    await image.decode();
    return image;
};

const CreateTacticianImagePath = (name: string): string => {
    let imagePath = "";
    if (name === "Polo") {
        imagePath = poloImagePath.src;
    } else if (name === "Dango") {
        imagePath = dangoImagePath.src;
    }
    return imagePath;
};

const CreateVCImagePath = (name: string): string => {
    let imagePath = "";
    if (name === "Discord") {
        imagePath = discordImagePath.src;
    } else if (name === "Line") {
        imagePath = lineImagePath.src;
    }
    return imagePath;
};

const GetGameModeIndex = (gameMode: string): number => {
    let index = 0;
    if (gameMode === "Normal") index = 0;
    else if (gameMode === "Rank") index = 1;
    else if (gameMode === "Double") index = 2;
    else if (gameMode === "Hyper") index = 3;
    return index;
};

const DrawTacticianImage = (context: CanvasRenderingContext2D, name: string, index: number) => {
    const imagePath = CreateTacticianImagePath(name);
    const image = new Image();
    image.onload = () => {
        const tacticianPointX: number[] = [460, 240, 330];
        const tacticianPointY: number[] = [320, 320, 260];
        const tacticianSize: number[] = [100, 100, 160];
        context.drawImage(
            image,
            tacticianPointX[index] * ratio,
            tacticianPointY[index] * ratio,
            tacticianSize[index] * ratio,
            tacticianSize[index] * ratio
        );
    };
    image.src = imagePath;
};

const DrawTacticianImages = (context: CanvasRenderingContext2D, names: string[]) => {
    for (let i = 0; i < names.length; i++) {
        DrawTacticianImage(context, names[i], i);
    }
};

const DrawGameModeImage = (context: CanvasRenderingContext2D, gameModes: string[]) => {
    const gameModePointX: number[] = [295, 361, 420, 508];
    const gameModePointY: number[] = [117, 117, 117, 118];
    const gameModeRadiusX: number[] = [35, 30, 30, 60];
    const gameModeRadiusY: number[] = [20, 20, 20, 20];
    gameModes.map((gameMode) => {
        const gameModeIndex = GetGameModeIndex(gameMode);
        context.beginPath();
        context.strokeStyle = "rgb(239, 56, 85)";
        context.ellipse(
            gameModePointX[gameModeIndex] * ratio,
            gameModePointY[gameModeIndex] * ratio,
            gameModeRadiusX[gameModeIndex] * ratio,
            gameModeRadiusY[gameModeIndex] * ratio,
            0,
            0,
            2 * Math.PI
        );
        context.stroke();
    });
};
