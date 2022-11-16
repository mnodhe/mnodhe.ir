export function setToken_Localstorage(params: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("Token", params);
    }
}
export function getToken_Localstorage() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("Token");
    } else {
        return null;
    }
}
