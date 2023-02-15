// ==============================|| THEME CONFIG  ||============================== //

import {getRouterUrl} from "./routes/router-url";

const config = {
    // basename: 'front-page',
    // defaultPath: getRouterUrl("dashboard"),
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'dark',
    presetColor: 'default',
    themeDirection: 'ltr'
};

export default config;
export const drawerWidth = 260;

import imageLogo from 'assets/images/logo/waviv-light.png'
export const webLogo = imageLogo
export const webVersion = "v1.1.0"
export const showDebug = true;
export const API_URL_RELEASE = ""
export const API_URL_DEVEL = "https://dummyjson.com"
