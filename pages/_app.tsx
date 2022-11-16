import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Workbox } from "workbox-window";
import { createContext, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { useRouter } from 'next/router';
import Container from '../Components/layout/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from "react-toastify"
import AllReducers from '../Helper/Redux/AllReducer';
import ae from "../lang/ae.json";
import en from "../lang/en.json";
import fa from "../lang/fa.json";
import { configureStore } from "@reduxjs/toolkit";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../Helper/react-query/queryClient';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import Loading from '../Components/layout/Loading';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const messages: any = {
  ae: ae,
  en: en,
  fa: fa,
};
export function getDirection(locale: string) {
  if (locale === "ae" || locale === "fa") {
    return "rtl";
  }

  return "ltr";
}
const store = configureStore({
  reducer: AllReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});


export async function getServerSideProps() {
  const router = useRouter();
  const locale: any = router.locale!;
  let isAuth = false;

  return {
    props: {
      dir: getDirection(locale),
      auth: isAuth,
    },
  };
}




export default function MyApp({ Component, pageProps, dir, auth }: any) {
  const router = useRouter();
  const locale: any = router.locale!;

  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Progressive Web App support is disabled");
      return;
    }
    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);



  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );



  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Loading/>
              <Container>
                <Component {...pageProps} dir={dir} auth={auth} />
              </Container>
              {/* The rest of your application */}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </IntlProvider>
      <ToastContainer
        position="top-left"
        className="Toaster"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>

  )
}



export const flattenMessages = (nestedMessages: any, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};


