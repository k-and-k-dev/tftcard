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

export type FormInputs = {
    template: string;
    name: string;
    vc: string[];
    playTime: string[];
    tactician1: string;
    tactician2: string;
    tactician3: string;
    gameMode: string[];
    rank: string;
    rank_double: string;
    rank_hyper: string;
    free: string;
};

const defaultValues: FormInputs = {
    template: "Underground",
    name: "",
    vc: ["Discord"],
    playTime: ["Irregular"],
    tactician1: "Polo",
    tactician2: "Polo",
    tactician3: "Polo",
    gameMode: ["Normal"],
    rank: "Iron",
    rank_double: "Iron",
    rank_hyper: "Gray",
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
        label: "なし",
        value: "None",
    },
];

const playTimeProps = [
    {
        label: "0時～6時",
        value: "midnight",
    },
    {
        label: "6時～12時",
        value: "morning",
    },
    {
        label: "12時～18時",
        value: "afternoon",
    },
    {
        label: "18時～24時",
        value: "night",
    },
    {
        label: "不定期",
        value: "Irregular",
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
];

const tacticianWithNoneProps = [
    {
        label: "-",
        value: "None",
    },
    {
        label: "ポロ",
        value: "Polo",
    },
    {
        label: "ダンゴ",
        value: "Dango",
    },
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
        label: "ハイパーロール",
        value: "Hyper",
    },
    {
        label: "ダブル",
        value: "Double",
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

let formInputs = {
    template: "",
    name: "",
    vc: [""],
    playTime: [""],
    tactician1: "",
    tactician2: "",
    tactician3: "",
    gameMode: [""],
    rank: "",
    rank_double: "",
    rank_hyper: "",
    free: "",
};

export const Form = () => {
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
        formInputs = data;
    };
    return (
        /* handleSubmitはフォームの入力を確かめた上で、引数に渡した関数(onSubmit)を呼び出す */
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
                    placeholder="りこぴっぴ"
                    {...register("name", { required: "お名前は必須項目です。" })}
                />
                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) =>
                        message ? <p className={styles.form_validateMessage}>{message}</p> : null
                    }
                />
                <p className={styles.form_unit_title}>ボイスチャット</p>
                <RhfCheckboxGroup name="vc" control={control} checkBoxPropsList={vcProps} />
                <p className={styles.form_unit_title}>好きなタクティシャン</p>
                <p>1位</p>
                <RhfSelectForm name="tactician1" control={control} selectPropsList={tacticianProps} />
                <p>2位</p>
                <RhfSelectForm name="tactician2" control={control} selectPropsList={tacticianWithNoneProps} />
                <p>3位</p>
                <RhfSelectForm name="tactician3" control={control} selectPropsList={tacticianWithNoneProps} />
                <p className={styles.form_unit_title}>好きなゲームモード</p>
                <RhfCheckboxGroup name="gameMode" control={control} checkBoxPropsList={gameModeProps} />
                <p className={styles.form_unit_title}>ランク</p>
                <p>ソロ</p>
                <RhfSelectForm name="rank" control={control} selectPropsList={rankProps} />
                <p>ダブル</p>
                <RhfSelectForm name="rank_double" control={control} selectPropsList={rankProps} />
                <p>ハイパーロール</p>
                <RhfSelectForm name="rank_hyper" control={control} selectPropsList={rankHyperProps} />
                <p className={styles.form_unit_title}>プレイ時間帯</p>
                <RhfCheckboxGroup name="playTime" control={control} checkBoxPropsList={playTimeProps} />
            </div>
            <div className={styles.form_unit}>
                <p className={styles.form_unit_title}>フリースペース</p>
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
                        <p className={styles.form_validateMessage}>まだ全ての必須項目の入力が完了していません。</p>
                    </>
                )}
                <div className={styles.form_buttonWrapper}>
                    <button type="submit" className={styles.form_submitButton}>
                        作成
                    </button>
                </div>
            </div>
            <ImageWithText formInputs={formInputs} />
        </form>
    );
};