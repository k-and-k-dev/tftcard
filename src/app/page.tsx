"use client";
// react
import React from "react";
// style
// import "../styles/globals.scss";
import styles from "./page.module.scss";
import { Spacer } from "@/components/atoms/Spacer";
import { Form } from "@/components/organisms/Form";
import { ContactForm } from "@/components/organisms/ContactForm";
// components

export default function Home() {
    return (
        <>
            <Spacer size="10px" />
            <div className={styles.main}>
                <h1 className={styles.title}>
                    【TFT(チームファイト タクティクス)】
                    <br />
                    かわいい自己紹介カード作成ツール
                </h1>
                <p className={styles.description}>
                    TFT(チームファイト タクティクス)のかわいい自己紹介カードが
                    <br className={styles.br} />
                    簡単に作成・編集できるツールです！🥳🎉
                    <br />
                    プレビューを見ながら文字入れをして
                    <br className={styles.br} />
                    あなただけの自己紹介カードをつくろう！
                </p>
                <Form />
                <ContactForm />
            </div>
        </>
    );
}
