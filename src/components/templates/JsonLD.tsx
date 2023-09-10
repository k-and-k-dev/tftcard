import Script from "next/script";

interface Props {
    siteName: string;
    url: string;
}

export const JsonLD = ({ siteName, url }: Props) => {
    const jsonld = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: url,
        },
    ];

    return (
        <>
            <Script
                id="my-script"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
            />
        </>
    );
};
