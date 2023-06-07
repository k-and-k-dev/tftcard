// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
// error-message
import { ErrorMessage } from "@hookform/error-message";
// style
import styles from "./Form.module.scss";
// components
import { RhfRadioGroup } from "../molecules/RhfRadioGroup";
import { RhfCheckboxGroup } from "../molecules/RhfCheckboxGroup";

type Inputs = {
    template: string;
    name: string;
    vc: string;
    gameMode: string;
    playTime: string;
    free: string;
};

const defaultValues: Inputs = {
    template: "Underground",
    name: "",
    vc: "Discord",
    gameMode: "Normal",
    playTime: "Irregular",
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

export const Form = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        defaultValues: defaultValues,
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log("onSubmit:", data);
    return (
        /* handleSubmitはフォームの入力を確かめた上で、引数に渡した関数(onSubmit)を呼び出す */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_unit}>
                <p className={styles.form_unit_title}>テンプレート</p>
                <RhfRadioGroup name="template" control={control} radioPropsList={templateProps} />
                <p className={styles.form_unit_title}>お名前</p>
                {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
                {/* register関数の第2引数には、HTML標準フォームデータ検証のルールが渡せる */}
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
                <p className={styles.form_unit_title}>好きなゲームモード</p>
                <RhfCheckboxGroup name="gameMode" control={control} checkBoxPropsList={gameModeProps} />
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
        </form>
    );
};
