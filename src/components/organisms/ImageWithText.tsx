// react
import React, { useEffect, useRef } from "react";
// components
import { FormInputs } from "./Form";
// resources
import templateImagePath from "../../images/Template.png";
import poloImagePath from "../../images/Polo.png";
import dangoImagePath from "../../images/Dango.png";
import discordImagePath from "../../images/Discord.png";
import lineImagePath from "../../images/Line.png";

type Props = {
    formInputs: FormInputs;
};

const loadImage = async (path: string): Promise<HTMLImageElement> => {
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

export const ImageWithText = ({ formInputs }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // タクティシャン画像パス設定
        const tacticianImagePaths: string[] = [];
        const tacticianNames: string[] = [formInputs.tactician1, formInputs.tactician2, formInputs.tactician3];
        for (let i = 0; i < 3; i++) {
            const imagePath = CreateTacticianImagePath(tacticianNames[i]);
            if (imagePath === "") continue;
            tacticianImagePaths.push(imagePath);
        }

        // VC画像パス設定
        const vcImagePaths: string[] = [];
        const vcImageNames: string[] = formInputs.vc;
        for (let i = 0; i < vcImageNames.length; i++) {
            const imagePath = CreateVCImagePath(vcImageNames[i]);
            if (imagePath === "") continue;
            vcImagePaths.push(imagePath);
        }

        const templateImage = new Image();
        templateImage.src = templateImagePath.src;
        templateImage.onload = () => {
            // キャンバス取得
            const canvas = canvasRef.current;
            if (canvas === null) {
                console.error("canvas is null!");
                return;
            }
            const context = canvas.getContext("2d");
            if (context === null) {
                console.error("canvas 2d context is null!");
                return;
            }
            // テンプレート
            context.drawImage(templateImage, 0, 0, 800, 450);
            // 名前
            context.font = "12px Arial";
            context.fillStyle = "red";
            context.fillText(formInputs.name, 50, 100);
            // VC
            const vcPointPointX: number[] = [70, 120, 170];
            const vcPointPointY: number[] = [220, 220, 220];
            let index = 0;
            vcImagePaths.map(async (path) => {
                const image = await loadImage(path);
                context.drawImage(image, vcPointPointX[index], vcPointPointY[index], 50, 50);
                index++;
            });
            // タクティシャン
            const tacticianPointX: number[] = [460, 240, 330];
            const tacticianPointY: number[] = [320, 320, 260];
            const tacticianSize: number[] = [100, 100, 160];
            index = 0;
            tacticianImagePaths.reverse();
            tacticianImagePaths.map(async (path) => {
                const image = await loadImage(path);
                context.drawImage(
                    image,
                    tacticianPointX[index],
                    tacticianPointY[index],
                    tacticianSize[index],
                    tacticianSize[index]
                );
                index++;
            });
            // 好きなゲームモード
            const gameModePointX: number[] = [295, 361, 420, 508];
            const gameModePointY: number[] = [117, 117, 117, 118];
            const gameModeRadiusX: number[] = [35, 30, 30, 60];
            const gameModeRadiusY: number[] = [20, 20, 20, 20];
            formInputs.gameMode.map((gameMode) => {
                const gameModeIndex = GetGameModeIndex(gameMode);
                context.beginPath();
                context.strokeStyle = "rgb(239, 56, 85)";
                context.ellipse(
                    gameModePointX[gameModeIndex],
                    gameModePointY[gameModeIndex],
                    gameModeRadiusX[gameModeIndex],
                    gameModeRadiusY[gameModeIndex],
                    0,
                    0,
                    2 * Math.PI
                );
                context.stroke();
            });
        };
    }, [formInputs]);

    return <canvas ref={canvasRef} width={800} height={450} />;
};
