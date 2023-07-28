// styles
import "./layout.scss";
// components
import { Header } from "@/components/Header";

const siteName = "TFT Profile Card 自己紹介カード作成ツール";
const description =
    "TFT（チームファイトタクティクス）のプロフィールカードが簡単に作成・編集出来るサイトです。かわいいタクティシャンを選んであなただけの自己紹介カードを作ってTwitter等で投稿してね。";
const url = "https://tftcard.vercel.app";

export const metadata = {
    title: siteName,
    description: description,
    themeColor: "#000000",
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/favicon.ico",
    },
    viewport: "width=device-width,initial-scale=1.0,maximum-scale=1.0",
    openGraph: {
        title: siteName,
        description,
        url,
        siteName,
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description,
        site: "@tftprofilecard",
        creator: "@tftprofilecard",
    },
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
