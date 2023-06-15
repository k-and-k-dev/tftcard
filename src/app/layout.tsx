// styles
import "./layout.scss";
// components
import { Header } from "@/components/Header";

export const metadata = {
    title: "TFT Profile Card",
    description: "",
    themeColor: "#000000",
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/favicon.png",
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
