"use client";
// react
import React from "react";
// style
// import "../styles/globals.scss";
import styles from "./page.module.scss";
import { Spacer } from "@/components/atoms/Spacer";
import { Form } from "@/components/organisms/Form";
// components

export default function Home() {
    return (
        <>
            <Spacer size="10px" />
            <div className={styles.main}>
                <h1 className={styles.title}>【TFT(チームファイト タクティクス)】かわいい自己紹介カード作成ツール</h1>
                <p className={styles.description}>
                    TFT(チームファイト タクティクス)のかわいい自己紹介カードが簡単に作成・編集できるツールです！🥳🎉
                    <br />
                    プレビューを見ながら文字入れをしてあなただけの自己紹介カードをつくろう！
                </p>
                <Form />
            </div>
        </>
    );
}
