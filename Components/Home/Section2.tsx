import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'

export default function Section2(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section" >
      <div className="row col-12 p-5">
        <h1 className='font-mont fs-2 fw-bold'>About</h1>

        {/* <p className='font-merri'>
          .Netcore & Front-End Developer with over 4 years of experience, 
          <span className='font-gold'> loves working in teams </span>
          and sharing his knowledge with others. Also, He is passionate about creating
          products that help people make their lives easier. Furthermore, trying new
          things in his job is his favorite.
        </p> */}
        <p className='font-merri myline fs-5'>
          I'm a .NetCore And Front-End Engineer based in Iran ☀️. I describe myself as a passionate developer who loves <b> coding, open source, and the web platform </b> ❤️.
          <br />
          Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer
          and support other open source projects.
          {/* Also I enjoy writing technical things ✍️ at my blog. */}
        </p>

      </div>
    </div>
  )
}
