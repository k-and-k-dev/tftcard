import React from "react";
// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
// error-message
import { ErrorMessage } from "@hookform/error-message";
// style
import styles from "./ContactForm.module.scss";
// components
import { Paper } from "@mui/material";

export type FormInputs = {
    contact: string;
};

const defaultValues: FormInputs = {
    contact: "",
};

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        defaultValues: defaultValues,
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("onSubmit:", data);
    };

    const paperSx = {
        m: "20px",
        px: "20px",
        pt: "5px",
        color: "Sienna",
        bgcolor: "lightyellow",
        opacity: 0.9,
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_unit}>
                    <Paper elevation={3} sx={paperSx}>
                        <p className={styles.form_unit_title}>フィードバックフォーム</p>
                        <textarea
                            className={styles.input_textarea}
                            placeholder="当サイトに関するご意見やご要望、及びバグ報告等をお寄せください。　　　　　　　　　　
                            今後のサービス向上の参考とさせていただきます。"
                            {...register("contact", { required: "内容は必須項目です。" })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="contact"
                            render={({ message }) =>
                                message ? <p className={styles.form_validateMessage}>{message}</p> : null
                            }
                        />
                        <div className={styles.form_buttonWrapper}>
                            <button type="submit" className={styles.form_submitButton}>
                                送信
                            </button>
                        </div>
                    </Paper>
                </div>
            </form>
        </>
    );
};
