import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'
import Testimonial from './section6/testimonial'

export default function Section6(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section">
      <Testimonial
        name='Arioo Barzan(Mohammad) Zare'
        link='https://www.linkedin.com/in/arioobarzan/'
        image="https://media-exp1.licdn.com/dms/image/D5603AQHMpiN6idGEcw/profile-displayphoto-shrink_100_100/0/1666884262431?e=1674691200&v=beta&t=gLLr29kxA2Zd4nX5RsYOj8-h_IR3Ov_--8LA5qlcEdE"
        whereweworked='October 9, 2021, Arioo Barzan(Mohammad) worked with mohammad but they were at different companies'
        jobposition='Project Manager at GhasedakApp'
        opinion='I had the pleasure of working with Mohammad Mohammadi Nodhe when entrusting him with a react project that had a very limited time frame, honestly he did an amazing job and delivered the product on time.'
      />
      <Testimonial
        name='Mohammad Moshtagh'
        link='https://www.linkedin.com/in/mohammad-moshtagh-739546204/'
        image="https://media-exp1.licdn.com/dms/image/D5603AQHLkObxovD3CA/profile-displayphoto-shrink_100_100/0/1646459881713?e=1674691200&v=beta&t=PggAJY3nRqvMQAhBqlFFebOtZ_blRiAe3sPityYmghQ"
        whereweworked='September 7, 2021, Mohammad reported directly to mohammad'
        jobposition='React Developer at Cube-10'
        opinion="I've been working with Mohammad for nearly a year now, he knows when top be a perfectionist and when to compromise.
          One thing that is truly praiseworthy about Mohammad is his willingness to share his knowledge,
          He has solved many challenging projects and is persistent in overcoming any challenge that he face"
      />
      <Testimonial
        name='Reza Shamlou'
        link='https://www.linkedin.com/in/reza-shamlou-203901177/'
        image="https://media-exp1.licdn.com/dms/image/C4D03AQG0xhLw-zPfjg/profile-displayphoto-shrink_100_100/0/1578220808326?e=1674691200&v=beta&t=g8lEnJvq0jjVcqTR3DXo9_GKFd9hLc49aiIifx7Ch3I"
        whereweworked='October 27, 2020, reza worked with mohammad on the same team'
        jobposition='Marketing Manager at Gisheh7.ir'
        opinion="I am both a friend and a colleague of Mr. Mohammadi for many years, and he did professional work and commitment in the technical fields of IT and programming, and even servers and configurations related to all types of servers and their monitoring.
        In terms of coding, they are highly proficient in .NET, .NET Core, and React, and they combine precision and speed."
      />

    </div>
  )
}
