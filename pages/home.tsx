import Head from 'next/head';
import React from 'react';
import { useAuth } from '../Components/Auth/hooks/useAuth';
import { LangHelper } from '../Helper/MultiLangHelper/LangHelper';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from '../Components/Home/Section1';
import Section2 from '../Components/Home/Section2';
import Section3 from '../Components/Home/Section3';
import Section4 from '../Components/Home/Section4';
import Section5 from '../Components/Home/Section5';
import Section6 from '../Components/Home/Section6';
import Section7 from '../Components/Home/Section7';
import { MenuListanchors } from '../Helper/Menu/constant';
import { useTheme } from '@mui/material';
export default function Home() {
  // const { data } = useAuth()
  const theme = useTheme();

  return (
    <main>
      <Head>
        <title>{LangHelper("AppName")}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ReactFullpage
        //fullpage options
        anchors={MenuListanchors}
        navigation
        navigationTooltips={MenuListanchors}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={theme.palette.mode === "light" ?
          ["rgb(249 246 246)", "rgb(241 240 240)", "rgb(249 246 246)", "rgb(241 241 241)", "rgb(249 246 246)", "rgb(235 235 235)"]
          :
          ["#34353A", "#31333B", "#3D3E42", "#3D3E42", "#34353A", "#31333B"]}
        render={({ state, fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper
            >
              <Section1 fullpageApi={fullpageApi} />
              <Section2 fullpageApi={fullpageApi} />
              <Section3 fullpageApi={fullpageApi} />
              <Section4 fullpageApi={fullpageApi} />
              <Section5 fullpageApi={fullpageApi} />
              <Section6 fullpageApi={fullpageApi} />
              <Section7 fullpageApi={fullpageApi} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      {/* <div>
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
        Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />Home<br />
      </div> */}
    </main>
  )
}
