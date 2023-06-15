export const getMobileOS = (): string => {
    const ua = navigator.userAgent;
    if (ua.match(/iPhone/)) {
        return "iOS";
    } else if (ua.match(/Android/)) {
        return "Android";
    } else {
        return "Other";
    }
};
