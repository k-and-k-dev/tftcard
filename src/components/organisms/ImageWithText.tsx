// react
import React, { useEffect, useRef, useState } from "react";
// next.js
import Image from "next/image";
// components
import { FormInputs } from "./Form";
import { Tweet } from "../atoms/Tweet";
import { uploadImage } from "@/providers/aws/s3";
// util
// style
import styles from "./ImageWithText.module.scss";
// resources
// template
import templatePinkImagePath from "../../images/template/Pink.png";
import templateBlueImagePath from "../../images/template/Blue.png";
import templateYellowImagePath from "../../images/template/Yellow.png";
import templateClearImagePath from "../../images/template/Clear.png";
import templateBandleCityImagePath from "../../images/template/BandleCity.png";
import templateFreljoldImagePath from "../../images/template/Freljold.png";
// sex
import sexManImagePath from "../../images/Man.png";
import sexWomanImagePath from "../../images/Woman.png";
// tactician
import PoloImagePath from "../../images/tactician/Polo.png";
import DangoImagePath from "../../images/tactician/Dango.png";
import SpriteImagePath from "../../images/tactician/Sprite.png";
import FeatherknightImagePath from "../../images/tactician/Featherknight.png";
import ChonccImagePath from "../../images/tactician/Choncc.png";
import ChibiAnnieImagePath from "../../images/tactician/Chibi_Annie.png";
import AoshinImagePath from "../../images/tactician/Aoshin.png";
import BanbanImagePath from "../../images/tactician/Banban.png";
import BellswayerImagePath from "../../images/tactician/Bellswayer.png";
import BurnoImagePath from "../../images/tactician/Burno.png";
import BungoImagePath from "../../images/tactician/Bungo.png";
import ChibiAhriImagePath from "../../images/tactician/Chibi_Ahri.png";
import ChibiEchoImagePath from "../../images/tactician/Chibi_Echo.png";
import ChibiGwenImagePath from "../../images/tactician/Chibi_Gwen.png";
import ChibiJinxImagePath from "../../images/tactician/Chibi_Jinx.png";
import ChibiLuxImagePath from "../../images/tactician/Chibi_Lux.png";
import ChibiTeemoImagePath from "../../images/tactician/Chibi_Teemo.png";
import DowsieImagePath from "../../images/tactician/Dowsie.png";
import DuckbillImagePath from "../../images/tactician/Duckbill.png";
import FuryhornImagePath from "../../images/tactician/Furyhorn.png";
import FuwaImagePath from "../../images/tactician/Fuwa.png";
import GloopImagePath from "../../images/tactician/Gloop.png";
import GrizzleImagePath from "../../images/tactician/Grizzle.png";
import HauntlingImagePath from "../../images/tactician/Hauntling.png";
import HushtailImagePath from "../../images/tactician/Hushtail.png";
import LightchargerImagePath from "../../images/tactician/Lightcharger.png";
import MelismaImagePath from "../../images/tactician/Melisma.png";
import MolediverImagePath from "../../images/tactician/Molediver.png";
import OssiaImagePath from "../../images/tactician/Ossia.png";
import PaddlemarImagePath from "../../images/tactician/Paddlemar.png";
import PogglesImagePath from "../../images/tactician/Poggles.png";
import ProtectorImagePath from "../../images/tactician/Protector.png";
import QiqiImagePath from "../../images/tactician/Qiqi.png";
import RunespiritImagePath from "../../images/tactician/Runespirit.png";
import ShisaImagePath from "../../images/tactician/Shisa.png";
import ShorkImagePath from "../../images/tactician/Shork.png";
import SquinkImagePath from "../../images/tactician/Squink.png";
import StarmawImagePath from "../../images/tactician/Starmaw.png";
import TockerImagePath from "../../images/tactician/Tocker.png";
import WhiskerImagePath from "../../images/tactician/Whisker.png";
import AbyssiaImagePath from "../../images/tactician/Abyssia.png";
import CraggleImagePath from "../../images/tactician/Craggle.png";
import Khat_SaiImagePath from "../../images/tactician/Khat_Sai.png";
import ScuttleImagePath from "../../images/tactician/Scuttle.png";
import SilverwingImagePath from "../../images/tactician/Silverwing.png";
import UmbraImagePath from "../../images/tactician/Umbra.png";
import PrancieImagePath from "../../images/tactician/Prancie.png";
import ChibiAsheImagePath from "../../images/tactician/Chibi_Ashe.png";
import NixieImagePath from "../../images/tactician/Nixie.png";
import FlutterbugImagePath from "../../images/tactician/Flutterbug.png";
import FenroarImagePath from "../../images/tactician/Fenroar.png";
import NimblefootImagePath from "../../images/tactician/Nimblefoot.png";
import KnifeHoundImagePath from "../../images/tactician/Knife Hound.png";
import KnifePupImagePath from "../../images/tactician/Knife Pup.png";
import ChibiIreliaImagePath from "../../images/tactician/Chibi_Irelia.png";
// vc
import discordImagePath from "../../images/Discord.png";
import lineImagePath from "../../images/Line.png";
import KikisenImagePath from "../../images/Kikisen.png";
import NoneImagePath from "../../images/None.png";
// complete
import CompleteImagePath from "../../images/Complete.png";
import TweetImagePath from "../../images/Tweet.png";
// rank
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
// trait
// origin
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
import TraitImageIxtalPath from "../../images/trait/set9.5/origin/Ixtal.png";
import TraitImageBilgewaterPath from "../../images/trait/set9.5/origin/Bilgewater.png";
// class
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
import TraitImageReaverKingPath from "../../images/trait/set9.5/class/Reaver King.png";
import TraitImageVanquisherPath from "../../images/trait/set9.5/class/Vanquisher.png";
// playtime
import PlayTimeWeekdayAfternoonPath from "../../images/playtime/WeekdayAfternoon3.png";
import PlayTimeWeekdayNightPath from "../../images/playtime/WeekdayNight3.png";
import PlayTimeHolidayAfternoonPath from "../../images/playtime/HolidayAfternoon3.png";
import PlayTimeHolidayNightPath from "../../images/playtime/HolidayNight3.png";
import PlayTimeIrregularPath from "../../images/playtime/Irregular3.png";
// gamemode
import GameModeMaruImagePath from "../../images/Maru.png";

// const fontFamilyName = "M PLUS Rounded 1c";
// const fontFamilyName = "Kiwi Maru";
const fontFamilyName = "Zen Maru Gothic";
// const fontFamilyName = "Dela Gothic One";

type Props = {
    formInputs: FormInputs;
};

export const ImageWithText = ({ formInputs }: Props) => {
    const [imageSrc, setImageSrc] = useState<string>(templateClearImagePath.src);
    const [loading, setLoading] = useState(true);
    const [myCanvas, setMyCanvas] = useState<HTMLCanvasElement>();
    const canvasImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const templateImage = document.createElement("img");
        templateImage.src = CreateTemplateImagePath(formInputs.template);
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
            // フォント読み込み
            await LoadFont();
            // 作成日
            DrawCreatedDate(context, formInputs.template);
            // 名前
            DrawName(context, formInputs.name);
            // 性別
            await DrawSexImageAsync(context, formInputs.sex);
            // VC
            await DrawVCImagesAsync(context, formInputs.vc);
            // プレイ時間帯
            await DrawPlayTimesAsync(context, formInputs.playTime);
            // 好きなゲームモード
            await DrawGameModeImageAsync(context, formInputs.gameMode);
            // ランク
            await DrawRankImageAsync(context, formInputs.rank, 0);
            await DrawRankImageAsync(context, formInputs.rank_double, 1);
            await DrawRankImageAsync(context, formInputs.rank_hyper, 2);
            // 好きな特性
            const traitNames: string[] = [formInputs.trait1, formInputs.trait2, formInputs.trait3];
            await DrawTraitImagesAsync(context, traitNames);
            // タクティシャン
            const tacticianNames: string[] = [formInputs.tactician3, formInputs.tactician2, formInputs.tactician1];
            await DrawTacticianImagesAsync(context, tacticianNames);
            // フリースペース
            DrawFreespace(context, formInputs.free);

            // キャンバスをセット（画像に変換して表示開始）
            setMyCanvas(canvas);

            // ローディング終了
            setLoading(false);
        };
    }, [formInputs]);

    useEffect(() => {
        if (myCanvas === undefined) return;
        // canvasを画像に変換して表示
        const canvasImage = canvasImageRef.current;
        if (canvasImage !== null) {
            setImageSrc(myCanvas.toDataURL());
        }
        // 画像をアップロード
        myCanvas.toBlob((blob) => {
            uploadImage(blob);
        });
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
                <div className={styles.complete}>
                    {loading ? (
                        <p className={styles.loading}>Loading...</p>
                    ) : (
                        <Image
                            className={styles.complete_image}
                            src={imageSrc}
                            width={1920}
                            height={1080}
                            ref={canvasImageRef}
                            alt="完成画像"
                        />
                    )}
                </div>
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

const DrawCreatedDate = (context: CanvasRenderingContext2D, templateName: string) => {
    const isMobile = window.innerWidth <= 767 ? true : false;
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dateString = year + "/" + ("00" + month).slice(-2) + "/" + ("00" + date).slice(-2);
    let fontSize = "";
    if (isMobile) {
        fontSize = "7vw Arial";
    } else {
        fontSize = "2vw Arial";
    }
    context.font = fontSize;
    context.textAlign = "center";
    switch (templateName) {
        case "Pink":
            context.fillStyle = "gray";
            break;
        case "Blue":
            context.fillStyle = "white";
            break;
        case "Yellow":
            context.fillStyle = "gray";
            break;
        default:
            context.fillStyle = "gray";
            break;
    }
    if (isMobile) {
        context.fillText(dateString, 1800, 160);
    } else {
        context.fillText(dateString, 1780, 160);
    }
};

const LoadFont = async () => {
    const urlFamilyName = fontFamilyName.replace(/ /g, "+");
    const googleApiUrl = `https://fonts.googleapis.com/css?family=${urlFamilyName}:400,900`;

    const response = await fetch(googleApiUrl);
    if (response.ok) {
        // URLだけ抽出
        const cssFontFace = await response.text();
        const matchUrls = cssFontFace.match(/url\(.+?\)/g);
        if (!matchUrls) throw new Error("フォントが見つかりませんでした");
        for (const url of matchUrls) {
            // FontFace追加
            // console.log(`font url = ${url}`);
            const font = new FontFace(fontFamilyName, url);
            await font.load();
            document.fonts.add(font);
        }
    }
};

const DrawName = async (context: CanvasRenderingContext2D, name: string) => {
    /*
    let fontSize = "";
    if (window.innerWidth <= 767) {
        fontSize = "13vw Arial";
    } else {
        fontSize = "4vw Arial";
    }
    */
    const fontSize = `bold 42px ${fontFamilyName}`;
    context.font = fontSize;
    context.textAlign = "center";
    context.fillStyle = "#666666";
    context.fillText(name, 300, 300);
};

const DrawSexImageAsync = (context: CanvasRenderingContext2D, name: string): Promise<void> => {
    return new Promise((resolve) => {
        if (name === "None") {
            resolve();
            return;
        }
        const sexImagePath = CreateSexImagePath(name);
        const image = document.createElement("img");
        image.onload = () => {
            context.drawImage(image, 440, 340, 100, 100);
            resolve();
        };
        image.src = sexImagePath;
    });
};

const DrawVCImagesAsync = async (context: CanvasRenderingContext2D, names: string[]): Promise<void> => {
    const vcImagePaths = CreateVCImagePaths(names);
    const vcPointPointX: number[] = [168, 288, 408];
    const vcPointPointY: number[] = [528, 528, 528];
    for (let i = 0; i < vcImagePaths.length; i++) {
        const image = await loadImageAsync(vcImagePaths[i]);
        context.drawImage(image, vcPointPointX[i], vcPointPointY[i], 120, 120);
    }
};

const DrawTacticianImagesAsync = async (context: CanvasRenderingContext2D, names: string[]): Promise<void> => {
    for (let i = 0; i < names.length; i++) {
        await DrawTacticianImageAsync(context, names[i], i);
    }
};

const DrawTacticianImageAsync = (context: CanvasRenderingContext2D, name: string, index: number): Promise<void> => {
    return new Promise((resolve) => {
        const imagePath = CreateTacticianImagePath(name);
        if (imagePath === "") {
            resolve();
            return;
        }
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
            resolve();
        };
        image.src = imagePath;
    });
};

const DrawGameModeImageAsync = (context: CanvasRenderingContext2D, gameModes: string[]): Promise<void> => {
    return new Promise((resolve) => {
        const maruImagePath = GameModeMaruImagePath.src;
        const image = document.createElement("img");
        image.onload = () => {
            const gameModePointX: number[] = [550, 700, 850, 1050];
            const gameModePointY: number[] = [230, 230, 230, 230];
            gameModes.map((gameMode) => {
                const gameModeIndex = GetGameModeIndex(gameMode);
                context.drawImage(image, gameModePointX[gameModeIndex], gameModePointY[gameModeIndex], 330, 110);
            });
            resolve();
        };
        image.src = maruImagePath;
    });
};

const DrawRankImageAsync = (context: CanvasRenderingContext2D, name: string, index: number): Promise<void> => {
    return new Promise((resolve) => {
        const imagePath = CreateRankImagePath(name);
        if (imagePath === "") {
            resolve();
            return;
        }
        const image = document.createElement("img");
        image.onload = () => {
            const rankPointX: number[] = [1470, 1470, 1470];
            const rankPointY: number[] = [220, 285, 360];
            const rankSize: number[] = [100, 100, 100];
            context.drawImage(image, rankPointX[index], rankPointY[index], rankSize[index], rankSize[index]);
            resolve();
        };
        image.src = imagePath;
    });
};

const DrawTraitImagesAsync = async (context: CanvasRenderingContext2D, names: string[]): Promise<void> => {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === "None" || names[i] === "Line") continue;
        await DrawTraitImageAsync(context, names[i], i);
    }
};

const DrawTraitImageAsync = (context: CanvasRenderingContext2D, name: string, index: number): Promise<void> => {
    return new Promise((resolve) => {
        const imagePath = CreateTraitImagePath(name);
        const image = document.createElement("img");
        image.onload = () => {
            const traitPointX: number[] = [110, 245, 380];
            const traitPointY: number[] = [790, 790, 790];
            const traitSize: number[] = [140, 140, 140];
            context.drawImage(image, traitPointX[index], traitPointY[index], traitSize[index], traitSize[index]);
            resolve();
        };
        image.src = imagePath;
    });
};

const DrawPlayTimesAsync = async (context: CanvasRenderingContext2D, names: string[]): Promise<void> => {
    if (names.length === 0) return;
    SortPlayTimes(names);
    const playTimePointXTable = [
        [910],
        [810, 1010],
        [700, 910, 1120],
        [650, 830, 1000, 1170],
        [610, 755, 915, 1060, 1212],
    ];
    const playTimePointX = playTimePointXTable[names.length - 1];
    for (let i = 0; i < names.length; i++) {
        await DrawPlayTimeAsync(context, names[i], playTimePointX[i]);
    }
};

const DrawPlayTimeAsync = (context: CanvasRenderingContext2D, name: string, x: number): Promise<void> => {
    return new Promise((resolve) => {
        const imagePath = CreatePlayTimeImagePath(name);
        const image = document.createElement("img");
        image.onload = () => {
            context.drawImage(image, x, 460, 180, 80);
            resolve();
        };
        image.src = imagePath;
    });
};

const DrawFreespace = (context: CanvasRenderingContext2D, text: string) => {
    const parseTexts = ParseFreespaceText(text);
    const fontSize = `bold 40px ${fontFamilyName}`;
    context.font = fontSize;
    context.fillStyle = "gray";
    context.textAlign = "left";
    for (let i = 0; i < parseTexts.length; i++) {
        const y = i * 60 + 620;
        context.fillText(parseTexts[i], 1460, y);
    }
};

const ParseFreespaceText = (text: string): string[] => {
    const ret: string[] = [];
    const splitTexts = text.split("\n");
    for (let i = 0; i < splitTexts.length; i++) {
        const lineText = splitTexts[i].match(/.{1,9}/g);
        if (lineText === null) continue;
        for (let j = 0; j < lineText.length; j++) {
            const matchString = lineText[j];
            ret.push(matchString);
        }
    }
    return ret;
};

const CreateTraitImagePath = (name: string): string => {
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
        case "Ixtal":
            imagePath = TraitImageIxtalPath.src;
            break;
        case "Bilgewater":
            imagePath = TraitImageBilgewaterPath.src;
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
        case "Vanquisher":
            imagePath = TraitImageVanquisherPath.src;
            break;
        case "Reaver King":
            imagePath = TraitImageReaverKingPath.src;
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

const CreatePlayTimeImagePath = (name: string): string => {
    let imagePath = "";
    switch (name) {
        case "WeekdayAfternoon":
            imagePath = PlayTimeWeekdayAfternoonPath.src;
            break;
        case "WeekdayNight":
            imagePath = PlayTimeWeekdayNightPath.src;
            break;
        case "HolidayAfternoon":
            imagePath = PlayTimeHolidayAfternoonPath.src;
            break;
        case "HolidayNight":
            imagePath = PlayTimeHolidayNightPath.src;
            break;
        case "Irregular":
            imagePath = PlayTimeIrregularPath.src;
            break;
    }
    return imagePath;
};

const GetVCPriority = (name: string): number => {
    let ret = 0;
    if (name === "Discord") ret = 0;
    else if (name === "Line") ret = 1;
    else if (name === "Kikisen") ret = 2;
    else if (name === "None") ret = 3;
    return ret;
};

const SortPlayTimes = (names: string[]): string[] => {
    names.sort(function (first, second): number {
        const priority1 = GetPlayTimePriority(first);
        const priority2 = GetPlayTimePriority(second);
        if (priority1 < priority2) {
            return -1;
        } else {
            return 1;
        }
    });
    return names;
};

const GetPlayTimePriority = (name: string): number => {
    let ret = 0;
    if (name === "WeekdayAfternoon") ret = 0;
    else if (name === "WeekdayNight") ret = 1;
    else if (name === "HolidayAfternoon") ret = 2;
    else if (name === "HolidayNight") ret = 3;
    else if (name === "Irregular") ret = 4;
    return ret;
};

const loadImageAsync = async (path: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
        const image = document.createElement("img");
        image.onload = () => {
            resolve(image);
        };
        image.src = path;
    });
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

export const CreateTacticianImagePath = (name: string): string => {
    let imagePath = "";
    switch (name) {
        case "None":
            imagePath = "";
            break;
        case "Polo":
            imagePath = PoloImagePath.src;
            break;
        case "Dango":
            imagePath = DangoImagePath.src;
            break;
        case "Sprite":
            imagePath = SpriteImagePath.src;
            break;
        case "Featherknight":
            imagePath = FeatherknightImagePath.src;
            break;
        case "Choncc":
            imagePath = ChonccImagePath.src;
            break;
        case "Chibi_Annie":
            imagePath = ChibiAnnieImagePath.src;
            break;
        case "Aoshin":
            imagePath = AoshinImagePath.src;
            break;
        case "Banban":
            imagePath = BanbanImagePath.src;
            break;
        case "Bellswayer":
            imagePath = BellswayerImagePath.src;
            break;
        case "Burno":
            imagePath = BurnoImagePath.src;
            break;
        case "Bungo":
            imagePath = BungoImagePath.src;
            break;
        case "Chibi_Ahri":
            imagePath = ChibiAhriImagePath.src;
            break;
        case "Chibi_Echo":
            imagePath = ChibiEchoImagePath.src;
            break;
        case "Chibi_Gwen":
            imagePath = ChibiGwenImagePath.src;
            break;
        case "Chibi_Jinx":
            imagePath = ChibiJinxImagePath.src;
            break;
        case "Chibi_Lux":
            imagePath = ChibiLuxImagePath.src;
            break;
        case "Chibi_Teemo":
            imagePath = ChibiTeemoImagePath.src;
            break;
        case "Dowsie":
            imagePath = DowsieImagePath.src;
            break;
        case "Duckbill":
            imagePath = DuckbillImagePath.src;
            break;
        case "Furyhorn":
            imagePath = FuryhornImagePath.src;
            break;
        case "Fuwa":
            imagePath = FuwaImagePath.src;
            break;
        case "Gloop":
            imagePath = GloopImagePath.src;
            break;
        case "Grizzle":
            imagePath = GrizzleImagePath.src;
            break;
        case "Hauntling":
            imagePath = HauntlingImagePath.src;
            break;
        case "Hushtail":
            imagePath = HushtailImagePath.src;
            break;
        case "Lightcharger":
            imagePath = LightchargerImagePath.src;
            break;
        case "Melisma":
            imagePath = MelismaImagePath.src;
            break;
        case "Molediver":
            imagePath = MolediverImagePath.src;
            break;
        case "Ossia":
            imagePath = OssiaImagePath.src;
            break;
        case "Paddlemar":
            imagePath = PaddlemarImagePath.src;
            break;
        case "Poggles":
            imagePath = PogglesImagePath.src;
            break;
        case "Protector":
            imagePath = ProtectorImagePath.src;
            break;
        case "Qiqi":
            imagePath = QiqiImagePath.src;
            break;
        case "Runespirit":
            imagePath = RunespiritImagePath.src;
            break;
        case "Shisa":
            imagePath = ShisaImagePath.src;
            break;
        case "Shork":
            imagePath = ShorkImagePath.src;
            break;
        case "Squink":
            imagePath = SquinkImagePath.src;
            break;
        case "Starmaw":
            imagePath = StarmawImagePath.src;
            break;
        case "Tocker":
            imagePath = TockerImagePath.src;
            break;
        case "Whisker":
            imagePath = WhiskerImagePath.src;
            break;
        case "Abyssia":
            imagePath = AbyssiaImagePath.src;
            break;
        case "Craggle":
            imagePath = CraggleImagePath.src;
            break;
        case "Khat_Sai":
            imagePath = Khat_SaiImagePath.src;
            break;
        case "Scuttle":
            imagePath = ScuttleImagePath.src;
            break;
        case "Silverwing":
            imagePath = SilverwingImagePath.src;
            break;
        case "Umbra":
            imagePath = UmbraImagePath.src;
            break;
        case "Prancie":
            imagePath = PrancieImagePath.src;
            break;
        case "Chibi_Ashe":
            imagePath = ChibiAsheImagePath.src;
            break;
        case "Nixie":
            imagePath = NixieImagePath.src;
            break;
        case "Flutterbug":
            imagePath = FlutterbugImagePath.src;
            break;
        case "Fenroar":
            imagePath = FenroarImagePath.src;
            break;
        case "Nimblefoot":
            imagePath = NimblefootImagePath.src;
            break;
        case "Knife Hound":
            imagePath = KnifeHoundImagePath.src;
            break;
        case "Knife Pup":
            imagePath = KnifePupImagePath.src;
            break;
        case "Chibi_Irelia":
            imagePath = ChibiIreliaImagePath.src;
            break;
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
    switch (name) {
        case "None":
            return "";
        case "Iron":
            imagePath = RankIronImagePath.src;
            break;
        case "Bronze":
            imagePath = RankBronzeImagePath.src;
            break;
        case "Silver":
            imagePath = RankSilverImagePath.src;
            break;
        case "Gold":
            imagePath = RankGoldImagePath.src;
            break;
        case "Platinum":
            imagePath = RankPlatinumImagePath.src;
            break;
        case "Diamond":
            imagePath = RankDiamondImagePath.src;
            break;
        case "Master":
            imagePath = RankMasterImagePath.src;
            break;
        case "GrandMaster":
            imagePath = RankGrandMasterImagePath.src;
            break;
        case "Challenger":
            imagePath = RankChallengerImagePath.src;
            break;
        case "Gray":
            imagePath = RankGrayImagePath.src;
            break;
        case "Green":
            imagePath = RankGreenImagePath.src;
            break;
        case "Blue":
            imagePath = RankBlueImagePath.src;
            break;
        case "Purple":
            imagePath = RankPurpleImagePath.src;
            break;
        case "Hyper":
            imagePath = RankHyperImagePath.src;
            break;
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

const CreateTemplateImagePath = (name: string): string => {
    let imagePath = "";
    switch (name) {
        case "Pink":
            imagePath = templatePinkImagePath.src;
            break;
        case "Blue":
            imagePath = templateBlueImagePath.src;
            break;
        case "Yellow":
            imagePath = templateYellowImagePath.src;
            break;
        case "BandleCity":
            imagePath = templateBandleCityImagePath.src;
            break;
        case "Freljold":
            imagePath = templateFreljoldImagePath.src;
            break;
    }
    return imagePath;
};
