// styles
import "./layout.scss";
// components
import { Header } from "@/components/Header";

export const metadata = {
    title: "TFT Profile Card-自己紹介カード作成ツール-",
    description:
        "TFT（チームファイトタクティクス）のプロフィールカードが簡単に作成・編集出来るサイトです。かわいいタクティシャンを選んであなただけの自己紹介カードを作ってTwitter等で投稿してね。",
    themeColor: "#000000",
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/favicon.ico",
    },
    viewport: "width=device-width,initial-scale=1.0,maximum-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="ja">
                <body>
                    <Header />
                    {children}
                </body>
            </html>
        </>
    );
}
