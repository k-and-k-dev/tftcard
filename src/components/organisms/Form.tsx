import React, { useState } from "react";
// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
// error-message
import { ErrorMessage } from "@hookform/error-message";
// mui
import { Paper } from "@mui/material";
// style
import styles from "./Form.module.scss";
// components
import { RhfRadioGroup } from "../molecules/RhfRadioGroup";
import { RhfCheckboxGroup } from "../molecules/RhfCheckboxGroup";
import { RhfSelectForm } from "../molecules/RhfSelectForm";
import { RhfSelectFormWithImage } from "../molecules/RhfSelectFormWithImage";
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

const defaultValues: FormInputs = {
    template: "Pink",
    name: "",
    sex: "Man",
    vc: ["Discord"],
    playTime: ["Irregular"],
    gameMode: ["Normal"],
    rank: "None",
    rank_double: "None",
    rank_hyper: "None",
    trait1: "None",
    trait2: "None",
    trait3: "None",
    tactician1: "Polo",
    tactician2: "Polo",
    tactician3: "Polo",
    free: "",
};

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
        // console.log("onSubmit:", data);
        setIsCreate(true);
        formInputs = data;
    };

    const paperSx = {
        mt: "30px",
        mr: "20px",
        ml: "20px",
        px: "20px",
        pt: "5px",
        pb: "20px",
        color: "black",
        bgcolor: "aliceblue",
        opacity: 0.9,
        border: 3,
        borderColor: "powderblue",
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
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>テンプレート</p>
                        <RhfRadioGroup name="template" control={control} radioPropsList={templateProps} />
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
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
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>性別</p>
                        <RhfRadioGroup name="sex" control={control} radioPropsList={sexProps} />
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>ボイスチャット</p>
                        <RhfCheckboxGroup name="vc" control={control} checkBoxPropsList={vcProps} />
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>プレイ時間帯</p>
                        <RhfCheckboxGroup name="playTime" control={control} checkBoxPropsList={playTimeProps} />
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>好きなゲームモード</p>
                        <RhfCheckboxGroup name="gameMode" control={control} checkBoxPropsList={gameModeProps} />
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>ランク</p>
                        <div className={styles.form_multicombobox_container}>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>ソロ</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm name="rank" control={control} selectPropsList={rankProps} />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>ダブル</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm name="rank_double" control={control} selectPropsList={rankProps} />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>ハイパーロール</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm
                                        name="rank_hyper"
                                        control={control}
                                        selectPropsList={rankHyperProps}
                                    />
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>好きな特性</p>
                        <div className={styles.form_multicombobox_container}>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm name="trait1" control={control} selectPropsList={traitProps} />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm name="trait2" control={control} selectPropsList={traitProps} />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectForm name="trait3" control={control} selectPropsList={traitProps} />
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>
                            好きなタクティシャン&emsp;<span className={styles.form_unit_title_note}>※随時追加</span>
                        </p>
                        <div className={styles.form_multicombobox_container}>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>1位</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectFormWithImage
                                        name="tactician1"
                                        control={control}
                                        selectPropsList={tacticianProps}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>2位</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectFormWithImage
                                        name="tactician2"
                                        control={control}
                                        selectPropsList={tacticianWithNoneProps}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_multicombobox_item}>
                                <div className={styles.form_multicombobox_title}>
                                    <p>3位</p>
                                </div>
                                <div className={styles.form_multicombobox_combobox}>
                                    <RhfSelectFormWithImage
                                        name="tactician3"
                                        control={control}
                                        selectPropsList={tacticianWithNoneProps}
                                    />
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>
                            フリースペース&emsp;
                            <br className={styles.br} />
                            <span className={styles.form_unit_title_note}>※9文字以上は自動で改行されます</span>
                        </p>
                        <textarea
                            className={styles.input_textarea}
                            placeholder="ご自由にどうぞ！"
                            {...register("free")}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="free"
                            render={({ message }) =>
                                message ? <p className={styles.form_validateMessage}>{message}</p> : null
                            }
                        />
                    </Paper>
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
                </div>
            </form>
        </>
    );
};

const templateProps = [
    {
        label: "ピンク",
        value: "Pink",
    },
    {
        label: "ブルー",
        value: "Blue",
    },
    {
        label: "イエロー",
        value: "Yellow",
    },
    {
        label: "バンドルシティ",
        value: "BandleCity",
    },
    {
        label: "フレヨルド",
        value: "Freljold",
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
        label: "-",
        value: "None",
    },
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
        value: "Line",
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
        label: "アオシン",
        value: "Aoshin",
    },
    {
        label: "アビシア",
        value: "Abyssia",
    },
    {
        label: "アンブラ",
        value: "Umbra",
    },
    {
        label: "ウィスカー",
        value: "Whisker",
    },
    {
        label: "オシア",
        value: "Ossia",
    },
    {
        label: "カット＝サイ",
        value: "Khat_Sai",
    },
    {
        label: "キキ",
        value: "Qiqi",
    },
    {
        label: "クラグル",
        value: "Craggle",
    },
    {
        label: "グリズル",
        value: "Grizzle",
    },
    {
        label: "グルゥプ",
        value: "Gloop",
    },
    {
        label: "シーサ",
        value: "Shisa",
    },
    {
        label: "ショーク",
        value: "Shork",
    },
    {
        label: "シルバーウィング",
        value: "Silverwing",
    },
    {
        label: "スカトル",
        value: "Scuttle",
    },
    {
        label: "スクインク",
        value: "Squink",
    },
    {
        label: "スターマウ",
        value: "Starmaw",
    },
    {
        label: "ダウジー",
        value: "Dowsie",
    },
    {
        label: "ダックビル",
        value: "Duckbill",
    },
    {
        label: "ダンゴ",
        value: "Dango",
    },
    {
        label: "チョンク",
        value: "Choncc",
    },
    {
        label: "トッカー",
        value: "Tocker",
    },
    {
        label: "ニクシー",
        value: "Nixie",
    },
    {
        label: "バーノ",
        value: "Burno",
    },
    {
        label: "ハッシュテイル",
        value: "Hushtail",
    },
    {
        label: "パドルマー",
        value: "Paddlemar",
    },
    {
        label: "バンバン",
        value: "Banban",
    },
    {
        label: "フェザーナイト",
        value: "Featherknight",
    },
    {
        label: "フューリーホーン",
        value: "Furyhorn",
    },
    {
        label: "プランシー",
        value: "Prancie",
    },
    {
        label: "プロテクター",
        value: "Protector",
    },
    {
        label: "フワ",
        value: "Fuwa",
    },
    {
        label: "ブンゴ",
        value: "Bungo",
    },
    {
        label: "ベルスウェイヤー",
        value: "Bellswayer",
    },
    {
        label: "ホーントリング",
        value: "Hauntling",
    },
    {
        label: "ポグルス",
        value: "Poggles",
    },
    {
        label: "ポロ",
        value: "Polo",
    },
    {
        label: "メリスマ",
        value: "Melisma",
    },
    {
        label: "モールダイバー",
        value: "Molediver",
    },
    {
        label: "ライトチャージャー",
        value: "Lightcharger",
    },
    {
        label: "スプライト",
        value: "Sprite",
    },
    {
        label: "ルーンスプリット",
        value: "Runespirit",
    },
    {
        label: "ちびアーリ",
        value: "Chibi_Ahri",
    },
    {
        label: "ちびアッシュ",
        value: "Chibi_Ashe",
    },
    {
        label: "ちびアニー",
        value: "Chibi_Annie",
    },
    {
        label: "ちびエコー",
        value: "Chibi_Echo",
    },
    {
        label: "ちびグウェン",
        value: "Chibi_Gwen",
    },
    {
        label: "ちびジンクス",
        value: "Chibi_Jinx",
    },
    {
        label: "ちびティーモ",
        value: "Chibi_Teemo",
    },
    {
        label: "ちびラックス",
        value: "Chibi_Lux",
    },
];

const tacticianWithNoneProps = [
    {
        label: "なし",
        value: "None",
    },
    {
        label: "アオシン",
        value: "Aoshin",
    },
    {
        label: "アビシア",
        value: "Abyssia",
    },
    {
        label: "アンブラ",
        value: "Umbra",
    },
    {
        label: "ウィスカー",
        value: "Whisker",
    },
    {
        label: "オシア",
        value: "Ossia",
    },
    {
        label: "カット＝サイ",
        value: "Khat_Sai",
    },
    {
        label: "キキ",
        value: "Qiqi",
    },
    {
        label: "クラグル",
        value: "Craggle",
    },
    {
        label: "グリズル",
        value: "Grizzle",
    },
    {
        label: "グルゥプ",
        value: "Gloop",
    },
    {
        label: "シーサ",
        value: "Shisa",
    },
    {
        label: "ショーク",
        value: "Shork",
    },
    {
        label: "シルバーウィング",
        value: "Silverwing",
    },
    {
        label: "スカトル",
        value: "Scuttle",
    },
    {
        label: "スクインク",
        value: "Squink",
    },
    {
        label: "スターマウ",
        value: "Starmaw",
    },
    {
        label: "ダウジー",
        value: "Dowsie",
    },
    {
        label: "ダックビル",
        value: "Duckbill",
    },
    {
        label: "ダンゴ",
        value: "Dango",
    },
    {
        label: "チョンク",
        value: "Choncc",
    },
    {
        label: "トッカー",
        value: "Tocker",
    },
    {
        label: "ニクシー",
        value: "Nixie",
    },
    {
        label: "バーノ",
        value: "Burno",
    },
    {
        label: "ハッシュテイル",
        value: "Hushtail",
    },
    {
        label: "パドルマー",
        value: "Paddlemar",
    },
    {
        label: "バンバン",
        value: "Banban",
    },
    {
        label: "フェザーナイト",
        value: "Featherknight",
    },
    {
        label: "フューリーホーン",
        value: "Furyhorn",
    },
    {
        label: "プランシー",
        value: "Prancie",
    },
    {
        label: "プロテクター",
        value: "Protector",
    },
    {
        label: "フワ",
        value: "Fuwa",
    },
    {
        label: "ブンゴ",
        value: "Bungo",
    },
    {
        label: "ベルスウェイヤー",
        value: "Bellswayer",
    },
    {
        label: "ホーントリング",
        value: "Hauntling",
    },
    {
        label: "ポグルス",
        value: "Poggles",
    },
    {
        label: "ポロ",
        value: "Polo",
    },
    {
        label: "メリスマ",
        value: "Melisma",
    },
    {
        label: "モールダイバー",
        value: "Molediver",
    },
    {
        label: "ライトチャージャー",
        value: "Lightcharger",
    },
    {
        label: "スプライト",
        value: "Sprite",
    },
    {
        label: "ルーンスプリット",
        value: "Runespirit",
    },
    {
        label: "ちびアーリ",
        value: "Chibi_Ahri",
    },
    {
        label: "ちびアッシュ",
        value: "Chibi_Ashe",
    },
    {
        label: "ちびアニー",
        value: "Chibi_Annie",
    },
    {
        label: "ちびエコー",
        value: "Chibi_Echo",
    },
    {
        label: "ちびグウェン",
        value: "Chibi_Gwen",
    },
    {
        label: "ちびジンクス",
        value: "Chibi_Jinx",
    },
    {
        label: "ちびティーモ",
        value: "Chibi_Teemo",
    },
    {
        label: "ちびラックス",
        value: "Chibi_Lux",
    },
];
