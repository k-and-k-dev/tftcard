// react
import React, { useEffect, useRef, useState } from "react";
// next.js
import Image from "next/image";
// components
import { FormInputs } from "./Form";
import { Tweet } from "../atoms/Tweet";
// util
// style
import styles from "./ImageWithText.module.scss";
// resources
import templateImagePath from "../../images/Template.png";
import templateClearImagePath from "../../images/Template_clear.png";
import sexManImagePath from "../../images/Man.png";
import sexWomanImagePath from "../../images/Woman.png";
import poloImagePath from "../../images/Polo.png";
import dangoImagePath from "../../images/Dango.png";
import discordImagePath from "../../images/Discord.png";
import lineImagePath from "../../images/Line.png";
import KikisenImagePath from "../../images/Kikisen.png";
import NoneImagePath from "../../images/None.png";
import CompleteImagePath from "../../images/Complete.png";
import TweetImagePath from "../../images/Tweet.png";
import RankIronImagePath from "../../images/rank/Iron.png";
import RankBronzeImagePath from "../../images/rank/Bronze.png";
import RankSilverImagePath from "../../images/rank/Silver.png";
import RankGoldImagePath from "../../images/rank/Gold.png";
import RankPlatinumImagePath from "../../images/rank/Platinum.png";
import RankDiamondImagePath from "../../images/rank/Diamond.png";
import RankMasterImagePath from "../../images/rank/Master.png";
import RankGrandMasterImagePath from "../../images/rank/GrandMaster.png";
import RankChallengerImagePath from "../../images/rank/Challenger.png";
import RankGrayImagePath from "../../images/rank/Gray.png";
import RankGreenImagePath from "../../images/rank/Green.png";
import RankBlueImagePath from "../../images/rank/Blue.png";
import RankPurpleImagePath from "../../images/rank/Purple.png";
import RankHyperImagePath from "../../images/rank/Hyper.png";
import TraitDarkinImagePath from "../../images/trait/set9/origin/Darkin.png";
import TraitDemaciaImagePath from "../../images/trait/set9/origin/Demacia.png";
import TraitFreljoldImagePath from "../../images/trait/set9/origin/Freljold.png";
import TraitIoniaImagePath from "../../images/trait/set9/origin/Ionia.png";
import TraitImageNoxusPath from "../../images/trait/set9/origin/Noxus.png";
import TraitImagePiltoverPath from "../../images/trait/set9/origin/Piltover.png";
import TraitImageShadowIslesPath from "../../images/trait/set9/origin/ShadowIsles.png";
import TraitImageShurimaPath from "../../images/trait/set9/origin/Shurima.png";
import TraitImageTargonPath from "../../images/trait/set9/origin/Targon.png";
import TraitImageVoidPath from "../../images/trait/set9/origin/Void.png";
import TraitImageWandererPath from "../../images/trait/set9/origin/Wanderer.png";
import TraitImageYordlePath from "../../images/trait/set9/origin/Yordle.png";
import TraitImageZaunPath from "../../images/trait/set9/origin/Zaun.png";
import TraitImageBastionPath from "../../images/trait/set9/class/Bastion.png";
import TraitImageBruiserPath from "../../images/trait/set9/class/Bruiser.png";
import TraitImageChallengerPath from "../../images/trait/set9/class/Challenger.png";
import TraitImageDeadeyePath from "../../images/trait/set9/class/Deadeye.png";
import TraitImageEmpressPath from "../../images/trait/set9/class/Empress.png";
import TraitImageGunnerPath from "../../images/trait/set9/class/Gunner.png";
import TraitImageInvokerPath from "../../images/trait/set9/class/Invoker.png";
import TraitImageJuggernautPath from "../../images/trait/set9/class/Juggernaut.png";
import TraitImageMulticasterPath from "../../images/trait/set9/class/Multicaster.png";
import TraitImageRedeemerPath from "../../images/trait/set9/class/Redeemer.png";
import TraitImageRoguePath from "../../images/trait/set9/class/Rogue.png";
import TraitImageSlayerPath from "../../images/trait/set9/class/Slayer.png";
import TraitImageSorcererPath from "../../images/trait/set9/class/Sorcerer.png";
import TraitImageStrategistPath from "../../images/trait/set9/class/Strategist.png";
import TraitImageTechnogeniusPath from "../../images/trait/set9/class/Technogenius.png";

type Props = {
    formInputs: FormInputs;
};

export const ImageWithText = ({ formInputs }: Props) => {
    const [imageSrc, setImageSrc] = useState<string>(templateClearImagePath.src);
    const [myCanvas, setMyCanvas] = useState<HTMLCanvasElement>();
    const canvasImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const templateImage = document.createElement("img");
        templateImage.src = templateImagePath.src;
        templateImage.onload = async () => {
            // キャンバス取得
            const canvas = document.createElement("canvas");
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
            // 作成日
            DrawCreatedDate(context);
            // 名前
            DrawName(context, formInputs.name);
            // 性別
            DrawSexImage(context, formInputs.sex);
            // VC
            DrawVCImages(context, formInputs.vc);
            // プレイ時間帯
            // 好きなゲームモード
            DrawGameModeImage(context, formInputs.gameMode);
            // ランク
            DrawRankImage(context, formInputs.rank, 0);
            DrawRankImage(context, formInputs.rank_double, 1);
            DrawRankImage(context, formInputs.rank_hyper, 2);
            // 好きな特性
            const traitNames: string[] = [formInputs.trait1, formInputs.trait2, formInputs.trait3];
            DrawTraitImages(context, traitNames);
            // タクティシャン
            const tacticianNames: string[] = [formInputs.tactician3, formInputs.tactician2, formInputs.tactician1];
            DrawTacticianImages(context, tacticianNames);

            // 描画が終わるまで待つ
            await new Promise((s) => setTimeout(s, 500));
            setMyCanvas(canvas);
        };
    }, [formInputs]);

    useEffect(() => {
        if (myCanvas === undefined) return;
        // canvasを画像に変換して表示
        const canvasImage = canvasImageRef.current;
        if (canvasImage !== null) {
            setImageSrc(myCanvas.toDataURL());
        }
    }, [myCanvas]);

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
                <Image
                    className={styles.complete_image}
                    src={imageSrc}
                    width={1920}
                    height={1080}
                    ref={canvasImageRef}
                    alt="完成画像"
                />
                <p className={styles.complete_note}>※画像を右クリックor長押しして保存してね！</p>
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
                <p className={styles.tweet_note}>※先に画像を保存してツイートに添付してね！</p>
            </div>
        </>
    );
};

const DrawTemplateImage = (context: CanvasRenderingContext2D, image: HTMLImageElement) => {
    context.drawImage(image, 0, 0);
};

const DrawCreatedDate = (context: CanvasRenderingContext2D) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dateString = year + "/" + ("00" + month).slice(-2) + "/" + ("00" + date).slice(-2);
    let fontSize = "";
    if (window.innerWidth <= 767) {
        fontSize = "7vw Arial";
    } else {
        fontSize = "2vw Arial";
    }
    context.font = fontSize;
    context.textAlign = "center";
    context.fillStyle = "gray";
    context.fillText(dateString, 1800, 160);
};

const DrawName = (context: CanvasRenderingContext2D, name: string) => {
    let fontSize = "";
    if (window.innerWidth <= 767) {
        fontSize = "13vw Arial";
    } else {
        fontSize = "4vw Arial";
    }
    context.font = fontSize;
    context.textAlign = "center";
    context.fillStyle = "red";
    context.fillText(name, 300, 300);
};

const DrawSexImage = (context: CanvasRenderingContext2D, name: string) => {
    if (name === "None") return;
    const sexImagePath = CreateSexImagePath(name);
    const image = document.createElement("img");
    image.onload = () => {
        context.drawImage(image, 440, 340, 100, 100);
    };
    image.src = sexImagePath;
};

const DrawVCImages = async (context: CanvasRenderingContext2D, names: string[]) => {
    const vcImagePaths = CreateVCImagePaths(names);
    const vcPointPointX: number[] = [168, 288, 408];
    const vcPointPointY: number[] = [528, 528, 528];
    for (let i = 0; i < vcImagePaths.length; i++) {
        const image = await loadImageAsync(vcImagePaths[i]);
        context.drawImage(image, vcPointPointX[i], vcPointPointY[i], 120, 120);
    }
};

const DrawTacticianImages = (context: CanvasRenderingContext2D, names: string[]) => {
    for (let i = 0; i < names.length; i++) {
        DrawTacticianImage(context, names[i], i);
    }
};

const DrawTacticianImage = (context: CanvasRenderingContext2D, name: string, index: number) => {
    const imagePath = CreateTacticianImagePath(name);
    const image = document.createElement("img");
    image.onload = () => {
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
    const gameModePointX: number[] = [708, 866.4, 1008, 1218];
    const gameModePointY: number[] = [285, 285, 285, 285];
    const gameModeRadiusX: number[] = [84, 81.6, 72, 144];
    const gameModeRadiusY: number[] = [48, 48, 48, 48];
    gameModes.map((gameMode) => {
        const gameModeIndex = GetGameModeIndex(gameMode);
        context.beginPath();
        context.strokeStyle = "rgb(239, 56, 85)";
        context.lineWidth = 2;
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

const DrawRankImage = (context: CanvasRenderingContext2D, name: string, index: number) => {
    const imagePath = CreateRankImagePath(name);
    const image = document.createElement("img");
    image.onload = () => {
        const rankPointX: number[] = [1470, 1470, 1470];
        const rankPointY: number[] = [220, 285, 360];
        const rankSize: number[] = [100, 100, 100];
        context.drawImage(image, rankPointX[index], rankPointY[index], rankSize[index], rankSize[index]);
    };
    image.src = imagePath;
};

const DrawTraitImages = (context: CanvasRenderingContext2D, names: string[]) => {
    let index = 0;
    names.map((name) => {
        if (name === "None") return;
        DrawTraitImage(context, name, index);
        index++;
    });
};

const DrawTraitImage = (context: CanvasRenderingContext2D, name: string, index: number) => {
    const imagePath = CreateTraitImagePath(name);
    const image = document.createElement("img");
    image.onload = () => {
        const traitPointX: number[] = [110, 245, 380];
        const traitPointY: number[] = [790, 790, 790];
        const traitSize: number[] = [140, 140, 140];
        context.drawImage(image, traitPointX[index], traitPointY[index], traitSize[index], traitSize[index]);
    };
    image.src = imagePath;
};

const CreateTraitImagePath = (name: string) => {
    let imagePath = "";
    switch (name) {
        // origin
        case "Darkin":
            imagePath = TraitDarkinImagePath.src;
            break;
        case "Demacia":
            imagePath = TraitDemaciaImagePath.src;
            break;
        case "Freljord":
            imagePath = TraitFreljoldImagePath.src;
            break;
        case "Ionia":
            imagePath = TraitIoniaImagePath.src;
            break;
        case "Noxus":
            imagePath = TraitImageNoxusPath.src;
            break;
        case "Piltover":
            imagePath = TraitImagePiltoverPath.src;
            break;
        case "ShadowIsles":
            imagePath = TraitImageShadowIslesPath.src;
            break;
        case "Shurima":
            imagePath = TraitImageShurimaPath.src;
            break;
        case "Targon":
            imagePath = TraitImageTargonPath.src;
            break;
        case "Void":
            imagePath = TraitImageVoidPath.src;
            break;
        case "Wanderer":
            imagePath = TraitImageWandererPath.src;
            break;
        case "Yordle":
            imagePath = TraitImageYordlePath.src;
            break;
        case "Zaun":
            imagePath = TraitImageZaunPath.src;
            break;
        // class
        case "Bastion":
            imagePath = TraitImageBastionPath.src;
            break;
        case "Bruiser":
            imagePath = TraitImageBruiserPath.src;
            break;
        case "Challenger":
            imagePath = TraitImageChallengerPath.src;
            break;
        case "Deadeye":
            imagePath = TraitImageDeadeyePath.src;
            break;
        case "Empress":
            imagePath = TraitImageEmpressPath.src;
            break;
        case "Gunner":
            imagePath = TraitImageGunnerPath.src;
            break;
        case "Invoker":
            imagePath = TraitImageInvokerPath.src;
            break;
        case "Juggernaut":
            imagePath = TraitImageJuggernautPath.src;
            break;
        case "Multicaster":
            imagePath = TraitImageMulticasterPath.src;
            break;
        case "Redeemer":
            imagePath = TraitImageRedeemerPath.src;
            break;
        case "Rogue":
            imagePath = TraitImageRoguePath.src;
            break;
        case "Slayer":
            imagePath = TraitImageSlayerPath.src;
            break;
        case "Sorcerer":
            imagePath = TraitImageSorcererPath.src;
            break;
        case "Strategist":
            imagePath = TraitImageStrategistPath.src;
            break;
        case "Technogenius":
            imagePath = TraitImageTechnogeniusPath.src;
            break;
    }
    return imagePath;
};

const CreateVCImagePaths = (names: string[]): string[] => {
    const vcImagePaths: string[] = [];
    const vcImageNames: string[] = names;
    SortVCNames(vcImageNames);
    for (let i = 0; i < vcImageNames.length; i++) {
        const imagePath = CreateVCImagePath(vcImageNames[i]);
        if (imagePath === NoneImagePath.src) {
            vcImagePaths.splice(0);
            vcImagePaths.push(imagePath);
            break;
        }
        vcImagePaths.push(imagePath);
    }
    return vcImagePaths;
};

const SortVCNames = (names: string[]): string[] => {
    names.sort(function (first, second): number {
        const priority1 = GetVCPriority(first);
        const priority2 = GetVCPriority(second);
        if (priority1 < priority2) {
            return -1;
        } else {
            return 1;
        }
    });
    return names;
};

const GetVCPriority = (name: string): number => {
    let ret = 0;
    if (name === "Discord") ret = 0;
    else if (name === "Line") ret = 1;
    else if (name === "Kikisen") ret = 2;
    else if (name === "None") ret = 3;
    return ret;
};

const GetPlayTimePriority = (name: string): number => {
    let ret = 0;
    if (name === "Midnight") ret = 0;
    else if (name === "Morning") ret = 1;
    else if (name === "Afternoon") ret = 2;
    else if (name === "Night") ret = 3;
    return ret;
};

const loadImageAsync = async (path: string): Promise<HTMLImageElement> => {
    const image = document.createElement("img");
    image.src = path;
    await image.decode();
    return image;
};

const CreateSexImagePath = (name: string): string => {
    let imagePath = "";
    if (name === "Man") {
        imagePath = sexManImagePath.src;
    } else if (name === "Woman") {
        imagePath = sexWomanImagePath.src;
    }
    return imagePath;
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
    } else if (name === "Kikisen") {
        imagePath = KikisenImagePath.src;
    } else if (name === "None") {
        imagePath = NoneImagePath.src;
    }
    return imagePath;
};

const CreateRankImagePath = (name: string): string => {
    let imagePath = "";
    if (name === "Iron") {
        imagePath = RankIronImagePath.src;
    } else if (name === "Bronze") {
        imagePath = RankBronzeImagePath.src;
    } else if (name === "Silver") {
        imagePath = RankSilverImagePath.src;
    } else if (name === "Gold") {
        imagePath = RankGoldImagePath.src;
    } else if (name === "Platinum") {
        imagePath = RankPlatinumImagePath.src;
    } else if (name === "Diamond") {
        imagePath = RankDiamondImagePath.src;
    } else if (name === "Master") {
        imagePath = RankMasterImagePath.src;
    } else if (name === "GrandMaster") {
        imagePath = RankGrandMasterImagePath.src;
    } else if (name === "Challenger") {
        imagePath = RankChallengerImagePath.src;
    } else if (name === "Gray") {
        imagePath = RankGrayImagePath.src;
    } else if (name === "Green") {
        imagePath = RankGreenImagePath.src;
    } else if (name === "Blue") {
        imagePath = RankBlueImagePath.src;
    } else if (name === "Purple") {
        imagePath = RankPurpleImagePath.src;
    } else if (name === "Hyper") {
        imagePath = RankHyperImagePath.src;
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
