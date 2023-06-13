// react
import React, { useEffect, useRef } from "react";
// next.js
import Image from "next/image";
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
import CompleteImagePath from "../../images/Complete.png";
import SaveImagePath from "../../images/Save.png";
import TweetImagePath from "../../images/Tweet.png";
import { Tweet } from "../atoms/Tweet";

type Props = {
    formInputs: FormInputs;
};

export const ImageWithText = ({ formInputs }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const templateImage = document.createElement("img");
        templateImage.src = templateImagePath.src;
        templateImage.onload = async () => {
            // キャンバス取得
            const canvas = canvasRef.current;
            if (canvas === null) {
                console.error("canvas is null!");
                return;
            }
            canvas.width = templateImage.width;
            canvas.height = templateImage.height;
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
        <>
            <div className={styles.container}>
                <p className={styles.title}>
                    <Image
                        src={CompleteImagePath.src}
                        width={CompleteImagePath.width}
                        height={CompleteImagePath.height}
                        className={styles.title_img}
                        alt="完成"
                    />
                </p>
                <canvas className={styles.canvas} ref={canvasRef} />
                <p className={styles.save}>
                    <Image
                        src={SaveImagePath.src}
                        width={SaveImagePath.width}
                        height={SaveImagePath.height}
                        className={styles.save_img}
                        alt="保存"
                    />
                </p>
                <p className={styles.tweet}>
                    <Tweet
                        text=""
                        url="https://tftcard.vercel.app/"
                        hashtags={["TFT", "TFTフレンド募集", "TFTプロフィールカード"]}
                    >
                        <Image
                            src={TweetImagePath.src}
                            width={TweetImagePath.width}
                            height={TweetImagePath.height}
                            className={styles.tweet_img}
                            alt="ツイート"
                        />
                    </Tweet>
                </p>
                <p className={styles.note}>※先に画像をダウンロードしてツイートに添付してね！</p>
            </div>
        </>
    );
};

const DrawTemplateImage = (context: CanvasRenderingContext2D, image: HTMLImageElement) => {
    context.drawImage(image, 0, 0);
};

const DrawName = (context: CanvasRenderingContext2D, name: string) => {
    context.font = "12px Arial";
    context.fillStyle = "red";
    context.fillText(name, 120, 240);
};

const DrawVCImage = (context: CanvasRenderingContext2D, vcImagePaths: string[]) => {
    const vcPointPointX: number[] = [168, 288, 408];
    const vcPointPointY: number[] = [528, 528, 528];
    let index = 0;
    vcImagePaths.map(async (path) => {
        const image = await loadImageAsync(path);
        context.drawImage(image, vcPointPointX[index], vcPointPointY[index], 120, 120);
        index++;
    });
};

const loadImageAsync = async (path: string): Promise<HTMLImageElement> => {
    const image = document.createElement("img");
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

const DrawTacticianImages = (context: CanvasRenderingContext2D, names: string[]) => {
    for (let i = 0; i < names.length; i++) {
        DrawTacticianImage(context, names[i], i);
    }
};

const DrawTacticianImage = (context: CanvasRenderingContext2D, name: string, index: number) => {
    const imagePath = CreateTacticianImagePath(name);
    const image = document.createElement("img");
    image.onload = async () => {
        const tacticianPointX: number[] = [1160, 576, 795];
        const tacticianPointY: number[] = [768, 768, 624];
        const tacticianSize: number[] = [240, 240, 384];
        context.drawImage(
            image,
            tacticianPointX[index],
            tacticianPointY[index],
            tacticianSize[index],
            tacticianSize[index]
        );
    };
    image.src = imagePath;
};

const DrawGameModeImage = (context: CanvasRenderingContext2D, gameModes: string[]) => {
    const gameModePointX: number[] = [708, 866.4, 1008, 508];
    const gameModePointY: number[] = [280.8, 280.8, 280.8, 283.2];
    const gameModeRadiusX: number[] = [84, 81.6, 72, 144];
    const gameModeRadiusY: number[] = [48, 48, 48, 48];
    gameModes.map((gameMode) => {
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
