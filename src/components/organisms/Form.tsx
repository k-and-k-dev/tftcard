import React, { useState } from "react";
// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
// error-message
import { ErrorMessage } from "@hookform/error-message";
// style
import styles from "./Form.module.scss";
// components
import { RhfRadioGroup } from "../molecules/RhfRadioGroup";
import { RhfCheckboxGroup } from "../molecules/RhfCheckboxGroup";
import { RhfSelectForm } from "../molecules/RhfSelectForm";
import { ImageWithText } from "./ImageWithText";
import { Modal } from "../atoms/Modal";

export type FormInputs = {
    template: string;
    name: string;
    sex: string;
    vc: string[];
    playTime: string[];
    gameMode: string[];
    rank: string;
    rank_double: string;
    rank_hyper: string;
    trait1: string;
    trait2: string;
    trait3: string;
    tactician1: string;
    tactician2: string;
    tactician3: string;
    free: string;
};

export const Form = () => {
    const [isCreate, setIsCreate] = useState(false);
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormInputs>({
        defaultValues: defaultValues,
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("onSubmit:", data);
        setIsCreate(true);
        formInputs = data;
    };
    return (
        <>
            {/* {isCreate ? <ImageWithText formInputs={formInputs} /> : <></>} */}
            <Modal show={isCreate} setShow={setIsCreate}>
                <ImageWithText formInputs={formInputs} />
            </Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_unit}>
                    {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
                    {/* register関数の第2引数には、HTML標準フォームデータ検証のルールが渡せる */}
                    <p className={styles.form_unit_title}>テンプレート</p>
                    <RhfRadioGroup name="template" control={control} radioPropsList={templateProps} />
                    <p className={styles.form_unit_title}>お名前</p>
                    <input
                        type="text"
                        className={styles.input_text}
                        placeholder=""
                        {...register("name", { required: "お名前は必須項目です。" })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) =>
                            message ? <p className={styles.form_validateMessage}>{message}</p> : null
                        }
                    />
                    <p className={styles.form_unit_title}>性別</p>
                    <RhfRadioGroup name="sex" control={control} radioPropsList={sexProps} />
                    <p className={styles.form_unit_title}>ボイスチャット</p>
                    <RhfCheckboxGroup name="vc" control={control} checkBoxPropsList={vcProps} />
                    <p className={styles.form_unit_title}>プレイ時間帯</p>
                    <RhfCheckboxGroup name="playTime" control={control} checkBoxPropsList={playTimeProps} />
                    <p className={styles.form_unit_title}>好きなゲームモード</p>
                    <RhfCheckboxGroup name="gameMode" control={control} checkBoxPropsList={gameModeProps} />
                    <p className={styles.form_unit_title}>ランク</p>
                    <p>ソロ</p>
                    <RhfSelectForm name="rank" control={control} selectPropsList={rankProps} />
                    <p>ダブル</p>
                    <RhfSelectForm name="rank_double" control={control} selectPropsList={rankProps} />
                    <p>ハイパーロール</p>
                    <RhfSelectForm name="rank_hyper" control={control} selectPropsList={rankHyperProps} />
                    <p className={styles.form_unit_title}>好きな特性</p>
                    <RhfSelectForm name="trait1" control={control} selectPropsList={traitProps} />
                    <RhfSelectForm name="trait2" control={control} selectPropsList={traitProps} />
                    <RhfSelectForm name="trait3" control={control} selectPropsList={traitProps} />
                    <p className={styles.form_unit_title}>好きなタクティシャン</p>
                    <p>1位</p>
                    <RhfSelectForm name="tactician1" control={control} selectPropsList={tacticianProps} />
                    <p>2位</p>
                    <RhfSelectForm name="tactician2" control={control} selectPropsList={tacticianWithNoneProps} />
                    <p>3位</p>
                    <RhfSelectForm name="tactician3" control={control} selectPropsList={tacticianWithNoneProps} />
                </div>
                <div className={styles.form_unit}>
                    <p className={styles.form_unit_title}>フリースペース ※8文字以上は自動で改行されます</p>
                    <textarea className={styles.input_textarea} placeholder="自己アピールなど" {...register("free")} />
                    <ErrorMessage
                        errors={errors}
                        name="free"
                        render={({ message }) =>
                            message ? <p className={styles.form_validateMessage}>{message}</p> : null
                        }
                    />
                </div>
                <div className={styles.form_actionArea}>
                    {!isValid && (
                        <>
                            <p className={styles.form_validateMessage}>名前を入力してください。</p>
                        </>
                    )}
                </div>
                <div className={styles.form_buttonWrapper}>
                    <button type="submit" className={styles.form_submitButton}>
                        作成
                    </button>
                </div>
            </form>
        </>
    );
};

const defaultValues: FormInputs = {
    template: "Underground",
    name: "",
    sex: "Man",
    vc: ["Discord"],
    playTime: ["Irregular"],
    gameMode: ["Normal"],
    rank: "None",
    rank_double: "None",
    rank_hyper: "None",
    trait1: "Ionia",
    trait2: "Ionia",
    trait3: "Ionia",
    tactician1: "Polo",
    tactician2: "Polo",
    tactician3: "Polo",
    free: "",
};

const templateProps = [
    {
        label: "アンダーグラウンド",
        value: "Underground",
    },
    {
        label: "ガジェッティーン",
        value: "Gadgeteen",
    },
    {
        label: "スターガーディアン",
        value: "Star Guardian",
    },
];

const sexProps = [
    {
        label: "男性",
        value: "Man",
    },
    {
        label: "女性",
        value: "Woman",
    },
    {
        label: "表示しない",
        value: "None",
    },
];

const vcProps = [
    {
        label: "ディスコード",
        value: "Discord",
    },
    {
        label: "ライン",
        value: "Line",
    },
    {
        label: "聞き専",
        value: "Kikisen",
    },
    {
        label: "なし",
        value: "None",
    },
];

const playTimeProps = [
    {
        label: "平日昼",
        value: "WeekdayAfternoon",
    },
    {
        label: "平日夜",
        value: "WeekdayNight",
    },
    {
        label: "休日昼",
        value: "HolidayAfternoon",
    },
    {
        label: "休日夜",
        value: "HolidayNight",
    },
    {
        label: "不定期",
        value: "Irregular",
    },
];

const gameModeProps = [
    {
        label: "ノーマル",
        value: "Normal",
    },
    {
        label: "ランク",
        value: "Rank",
    },
    {
        label: "ダブル",
        value: "Double",
    },
    {
        label: "ハイパーロール",
        value: "Hyper",
    },
];

const rankProps = [
    {
        label: "-",
        value: "None",
    },
    {
        label: "アイアン",
        value: "Iron",
    },
    {
        label: "ブロンズ",
        value: "Bronze",
    },
    {
        label: "シルバー",
        value: "Silver",
    },
    {
        label: "ゴールド",
        value: "Gold",
    },
    {
        label: "プラチナ",
        value: "Platinum",
    },
    {
        label: "ダイヤモンド",
        value: "Diamond",
    },
    {
        label: "マスター",
        value: "Master",
    },
    {
        label: "グランドマスター",
        value: "GrandMaster",
    },
    {
        label: "チャレンジャー",
        value: "Challenger",
    },
];

const rankHyperProps = [
    {
        label: "-",
        value: "None",
    },
    {
        label: "グレー",
        value: "Gray",
    },
    {
        label: "グリーン",
        value: "Green",
    },
    {
        label: "ブルー",
        value: "Blue",
    },
    {
        label: "パープル",
        value: "Purple",
    },
    {
        label: "ハイパー",
        value: "Hyper",
    },
];

const traitProps = [
    {
        label: "アイオニア",
        value: "Ionia",
    },
    {
        label: "ヴォイド",
        value: "Void",
    },
    {
        label: "シャドウアイル",
        value: "ShadowIsles",
    },
    {
        label: "シュリーマ",
        value: "Shurima",
    },
    {
        label: "ゾウン",
        value: "Zaun",
    },
    {
        label: "ダーキン",
        value: "Darkin",
    },
    {
        label: "ターゴン",
        value: "Targon",
    },
    {
        label: "デマーシア",
        value: "Demacia",
    },
    {
        label: "ノクサス",
        value: "Noxus",
    },
    {
        label: "ピルトーヴァー",
        value: "Piltover",
    },
    {
        label: "フレヨルド",
        value: "Freljord",
    },
    {
        label: "ヨードル",
        value: "Yordle",
    },
    {
        label: "探究者",
        value: "Wanderer",
    },
    {
        label: "インヴォーカー",
        value: "Invoker",
    },
    {
        label: "ガンナー",
        value: "Gunner",
    },
    {
        label: "ジャガーノート",
        value: "Juggernaut",
    },
    {
        label: "スレイヤー",
        value: "Slayer",
    },
    {
        label: "ソーサラー",
        value: "Sorcerer",
    },
    {
        label: "チャレンジャー",
        value: "Challenger",
    },
    {
        label: "デッドアイ",
        value: "Deadeye",
    },
    {
        label: "バスティオン",
        value: "Bastion",
    },
    {
        label: "ブルーザー",
        value: "Bruiser",
    },
    {
        label: "ローグ",
        value: "Rogue",
    },
    {
        label: "救済者",
        value: "Redeemer",
    },
    {
        label: "軍師",
        value: "Strategist",
    },
    {
        label: "女帝",
        value: "Empress",
    },
    {
        label: "発明王",
        value: "Technogenius",
    },
    {
        label: "複唱者",
        value: "Multicaster",
    },
    {
        label: "----------以下SET8.5----------",
        value: "None",
    },
    {
        label: "ADMIN",
        value: "ADMIN",
    },
    {
        label: "アニマ部隊",
        value: "Anima",
    },
    {
        label: "アンダーグラウンド",
        value: "Underground",
    },
    {
        label: "インフィニティーム",
        value: "InfiniTeam",
    },
    {
        label: "OXフォース",
        value: "OxForce",
    },
    {
        label: "ガジェッティーン",
        value: "Gadgeteen",
    },
    {
        label: "脅威",
        value: "Threat",
    },
    {
        label: "スーパー",
        value: "Supers",
    },
    {
        label: "スターガーディアン",
        value: "StarGuardian",
    },
    {
        label: "メカ: プライム",
        value: "MechaPrime",
    },
    {
        label: "リフトウォーカー",
        value: "Riftwalker",
    },
    {
        label: "レーザーコープ",
        value: "LazerCorps",
    },
    {
        label: "イージス",
        value: "Aegis",
    },
    {
        label: "エース",
        value: "Ace",
    },
    {
        label: "クイックドロー",
        value: "Quickdraw",
    },
    {
        label: "コラプテッド",
        value: "Corrupted",
    },
    {
        label: "ショアショット",
        value: "Sureshot",
    },
    {
        label: "スペルスリンガー",
        value: "Spellslinger",
    },
    {
        label: "ディフェンダー",
        value: "Defender",
    },
    {
        label: "デュエリスト",
        value: "Duelist",
    },
    {
        label: "ハート",
        value: "Heart",
    },
    {
        label: "ハッカー",
        value: "Hacker",
    },
    {
        label: "パラレル",
        value: "Parallel",
    },
    {
        label: "反逆者",
        value: "Renegade",
    },
    {
        label: "プランクスター",
        value: "Prankster",
    },
    {
        label: "ブローラー",
        value: "Brawler",
    },
    {
        label: "マスコット",
        value: "Mascot",
    },
    {
        label: "予報士",
        value: "Forecaster",
    },
];

const tacticianProps = [
    {
        label: "ポロ",
        value: "Polo",
    },
    {
        label: "ダンゴ",
        value: "Dango",
    },
    {
        label: "スプライト",
        value: "Sprite",
    },
    {
        label: "ペング",
        value: "Pengu",
    },
    {
        label: "チョンク",
        value: "Choncc",
    },
    {
        label: "ちびアニー",
        value: "Chibi_Annie",
    },
    /*
    {
        label: "ウィスカー",
        value: "Wisker",
    },
    {
        label: "スクインク",
        value: "Squink",
    },
    {
        label: "ハッシュテイル",
        value: "Hashtail",
    },
    {
        label: "バンバン",
        value: "Banban",
    },
    */
];

const tacticianWithNoneProps = [
    {
        label: "ポロ",
        value: "Polo",
    },
    {
        label: "ダンゴ",
        value: "Dango",
    },
    {
        label: "スプライト",
        value: "Sprite",
    },
    {
        label: "ペング",
        value: "Pengu",
    },
    {
        label: "チョンク",
        value: "Choncc",
    },
    {
        label: "ちびアニー",
        value: "Chibi_Annie",
    },
];

let formInputs = {
    template: "",
    name: "",
    sex: "",
    vc: [""],
    playTime: [""],
    gameMode: [""],
    rank: "",
    rank_double: "",
    rank_hyper: "",
    trait1: "",
    trait2: "",
    trait3: "",
    tactician1: "",
    tactician2: "",
    tactician3: "",
    free: "",
};
