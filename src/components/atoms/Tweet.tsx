import { ComponentProps, forwardRef } from "react";

type Props = {
    text?: string;
    url?: string;
    hashtags?: string[];
    via?: string;
    related?: string[];
    in_reply_to?: string;
} & Omit<ComponentProps<"a">, "href" | "target" | "rel">;

export const Tweet = forwardRef<HTMLAnchorElement, Props>(
    ({ text, url, hashtags, via, related, in_reply_to, ...intrinsicProps }, forwardedRef) => {
        /*
        const baseUrl = new URL("https://twitter.com/intent/tweet");

        if (text !== undefined) baseUrl.searchParams.set("text", text);
        if (url !== undefined) baseUrl.searchParams.set("url", url);
        if (hashtags !== undefined) baseUrl.searchParams.set("hashtags", hashtags.join(","));
        if (via !== undefined) baseUrl.searchParams.set("via", via);
        if (related !== undefined) baseUrl.searchParams.set("related", related.join(","));
        if (in_reply_to !== undefined) baseUrl.searchParams.set("in_reply_to", in_reply_to);
        */
        const baseUrl = "https://twitter.com/intent/tweet";
        const tweetUrl = baseUrl + "?text=" + text + "%0a" + "&url=" + url + "%0a" + "&hashtags=" + hashtags?.join(",");

        return (
            <a
                ref={forwardedRef}
                // href={baseUrl.toString()}
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...intrinsicProps}
            />
        );
    }
);

Tweet.displayName = "Tweet";
