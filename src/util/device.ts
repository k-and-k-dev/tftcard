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

export const getNowDate = (separete: string): string => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = ("0" + (now.getMonth() + 1)).slice(-2);
    const nowDate = ("0" + now.getDate()).slice(-2);
    const nowHours = ("0" + now.getHours()).slice(-2);
    const nowMinutes = ("0" + now.getMinutes()).slice(-2);
    const nowSeconds = ("0" + now.getSeconds()).slice(-2);
    return `${nowYear}${separete}${nowMonth}${separete}${nowDate}${separete}${nowHours}${separete}${nowMinutes}${separete}${nowSeconds}`;
};
