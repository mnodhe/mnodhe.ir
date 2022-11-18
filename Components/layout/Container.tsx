import Head from "next/head";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Script from "next/script";
import { useRouter } from "next/router";
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../../pages/_app";

import { Box, IconButton } from "@mui/material";
import * as gtag from "../../Helper/Seo/gtag";
import { UseAppSelector } from "../../Helper/Redux/hook/UseAppSelector";
import { SetLogin_Action } from "../../Helper/Redux/Actions/Auth/AuthAction";
import { RefreshToken_Res_Interface } from "../../Helper/Interfaces/API_Interface";
import { getToken_Localstorage } from "../../Helper/LocalStorageHandler/LocalStorageHelper";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Container({ children }: any) {
    const dispatch = useDispatch();
    const router = useRouter();
    const UIdirection = UseAppSelector((x) => x.UIData.direction);
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            if (typeof window.gtag !== 'undefined') {
                gtag.pageview(url);
            }
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [router.events]);


    useEffect(() => {
        const token = String(getToken_Localstorage());
        if (token !== "null") {
            // API_RefreshToken()
            //     .then((promise) => {
            //         let res: RefreshToken_Res_Interface = promise.data;
            //         if (res.success) {
            //             dispatch(
            //                 SetLogin_Action({
            //                     loginstate: true,
            //                     Token: res.result.token,
            //                     ExpireDate: res.result.expireDate,
            //                     UserProfile: res.result.userProfile,
            //                 })
            //             );
            //         } else {
            //             toast.warning(res.message);
            //             localStorage.clear();
            //         }
            //     })
            //     .catch((error) => {
            //         localStorage.clear();
            //         toast.error("لطفا ابتدا لاگین کنید.");
            //     });
        } else {
            localStorage.clear();
        }
    }, []);


    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                direction:UIdirection
            }}
        >
            <Head>
                <meta charSet="utf-8" />
                <link rel="alternate" href="https://mnodhe.ir/fa" hrefLang="fa" />
                <link rel="alternate" href="https://mnodhe.ir/en" hrefLang="en" />
                <link rel="alternate" href="https://mnodhe.ir/ae" hrefLang="ae" />
                {/* <meta
          name="google-site-verification"
          content="H_V0pruUVy-Ze5N_BXzVbSr3iFYXxZ1z8vxXSGJOgGI"
        /> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"></link>
                <meta name="author" content="mohammad mohammadi nodhe (mnodhe)" />
                <meta name="robots" content="index" />
                <meta name="copyright" content="2020-2030" />
                <meta name="language" content="fa-ir,en-us" />
                <meta name="document-type" content="Public" />
                <meta name="document-rating" content="General" />
                <meta name="resource-type" content="document" />
                <meta httpEquiv="content-language" content="fa-ir,en-us" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1,user-scalable=no,width=device-width"
                />
                <meta property="place:location:latitude" content="35.7172637" />
                <meta property="place:location:longitude" content="51.4790095" />
                <meta
                    property="business:contact_data:street_address"
                    content="Iran - Tehran - Narmak"
                />
                <meta property="business:contact_data:locality" content="Tehran" />
                <meta property="business:contact_data:country_name" content="Iran" />
                <meta
                    property="business:contact_data:phone_number"
                    content="+98 912 0747823"
                />
                <meta
                    property="business:contact_data:website"
                    content="https://mnodhe.ir"
                />
                <meta
                    property="business:contact_data:email"
                    content="mnodhe@gmail.com"
                />
                <meta name="og:url" content="https://mnodhe.ir" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta name="theme-color" content="#EE330A" />
                <meta name="msapplication-navbutton-color" content="#33385D" />
                {/* <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/Assets/Favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/Assets/Favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/Assets/Favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="mask-icon"
                    href="/Assets/Favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                /> 
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <link
                    rel="sitemap"
                    type="application/xml"
                    title="Sitemap"
                    href="./sitemap.xml"
                />
                <meta property="og:type" content="website" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="translucent"
                />
                */}

            </Head>

            {/* <!-- Hotjar Tracking Code for https://tabinu.com --> */}
            {/* <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function (h, o, t, j, a, r) {h.hj =h.hj ||function () {(h.hj.q = h.hj.q || []).push(arguments);};h._hjSettings = { hjid: 2774003, hjsv: 6 };a = o.getElementsByTagName("head")[0];r = o.createElement("script");r.async = 1;r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;a.appendChild(r);})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");`,
                }}
            ></Script> */}



            <Header />
            <div>{children}</div>
            <Footer />

        </Box>
    );
}
