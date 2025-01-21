import { fullpageApi } from '@fullpage/react-fullpage';
import React from 'react';
import Testimonial from './section6/testimonial';

export default function Section6(props: { fullpageApi: fullpageApi }) {
    return (
        <div className="section">
            {/* Arioo Barzan (Mohammad) Zare */}
            <Testimonial
                name='Arioo Barzan (Mohammad) Zare'
                link='https://www.linkedin.com/in/arioobarzan/'
                image="https://media-exp1.licdn.com/dms/image/D5603AQHMpiN6idGEcw/profile-displayphoto-shrink_100_100/0/1666884262431?e=1674691200&v=beta&t=gLLr29kxA2Zd4nX5RsYOj8-h_IR3Ov_--8LA5qlcEdE"
                whereweworked='October 9, 2021, Arioo Barzan (Mohammad) worked with Mohammad but they were at different companies'
                jobposition='PhD Candidate at Sutech, AI Expert, Chairman at Arioo Co.'
                opinion='I had the pleasure of working with Mohammad Mohammadi Nodhe when entrusting him with a React project that had a very limited time frame. Honestly, he did an amazing job and delivered the product on time.'
            />

            {/* Melika Goharian */}
            <Testimonial
                name='Melika Goharian'
                link='https://www.linkedin.com/in/melika-goharian/'
                image="https://media-exp1.licdn.com/dms/image/C5603AQF6f1s0p9t5Bw/profile-displayphoto-shrink_100_100/0/1517489448555?e=1674691200&v=beta&t=Z3hY5V6Y1z4y1Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4"
                whereweworked='November 9, 2020, Melika worked with Mohammad but on different teams'
                jobposition='Account Manager'
                opinion='He is clever, talented, accurate, has strong perseverance, curious, a research fellow, up-to-date, polite, and stays away from the margins.'
            />

            {/* Reza Shamlou */}
            <Testimonial
                name='Reza Shamlou'
                link='https://www.linkedin.com/in/reza-shamlou-203901177/'
                image="https://media-exp1.licdn.com/dms/image/C4D03AQG0xhLw-zPfjg/profile-displayphoto-shrink_100_100/0/1578220808326?e=1674691200&v=beta&t=g8lEnJvq0jjVcqTR3DXo9_GKFd9hLc49aiIifx7Ch3I"
                whereweworked='October 27, 2020, Reza worked with Mohammad on the same team'
                jobposition='Business Manager at Bahmanesabz Institution, Executive Manager at Gisheh7 Platform'
                opinion="I am both a friend and a colleague of Mr. Mohammadi for many years. He demonstrates professional work and commitment in the technical fields of IT and programming, as well as in server configurations and monitoring. In terms of coding, he is highly proficient in .NET, .NET Core, and React, combining precision and speed."
            />

            {/* Mohammad Moshtagh */}
            <Testimonial
                name='Mohammad Moshtagh'
                link='https://www.linkedin.com/in/mohammad-moshtagh-739546204/'
                image="https://media-exp1.licdn.com/dms/image/D5603AQHLkObxovD3CA/profile-displayphoto-shrink_100_100/0/1646459881713?e=1674691200&v=beta&t=PggAJY3nRqvMQAhBqlFFebOtZ_blRiAe3sPityYmghQ"
                whereweworked='September 7, 2021, Mohammad reported directly to Mohammad'
                jobposition='React Developer at Cube-10'
                opinion="I've been working with Mohammad for nearly a year now. He knows when to be a perfectionist and when to compromise. One thing that is truly praiseworthy about Mohammad is his willingness to share his knowledge. He has solved many challenging projects and is persistent in overcoming any challenge he faces."
            />
        </div>
    );
}
