// react
import React, { useState } from "react";
// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
// error-message
import { ErrorMessage } from "@hookform/error-message";
// mui
import { Paper } from "@mui/material";
// emailjs
import emailjs from "@emailjs/browser";
// style
import styles from "./ContactForm.module.scss";
// components
import { CommonDialog } from "../atoms/CommonDialog";

export type ContactFormInputs = {
    contact: string;
};

const defaultValues: ContactFormInputs = {
    contact: "",
};

export const ContactForm = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        defaultValues: defaultValues,
    });

    const sendEmail = (contact: string) => {
        const param = {
            message: contact,
        };
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID !== undefined &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID !== undefined &&
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY !== undefined
        ) {
            emailjs
                .send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    param,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log("email send success: ", result);
                    },
                    (error) => {
                        console.error("email send failure: ", error);
                    }
                );
        } else {
            console.error("EMAILJS env value is undefined");
        }
    };

    const paperSx = {
        m: "20px",
        px: "20px",
        pt: "5px",
        color: "Sienna",
        bgcolor: "lightyellow",
        opacity: 0.9,
    };

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        console.log("onSubmit:", data);
        reset();
        setDialogOpen(true);
        sendEmail(data.contact);
    };

    return (
        <>
            <CommonDialog
                title="送信完了"
                message="フィードバックありがとうございました。"
                open={dialogOpen}
                onAccept={() => console.log("onAccept")}
                onClose={() => setDialogOpen(false)}
            />
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
