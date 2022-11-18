import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'

export default function Section7(props:{fullpageApi:fullpageApi}) {
  return (
    <div className="section" >
    <p>Contact Me</p>
    <button onClick={() => props.fullpageApi.moveSectionUp()}>
      Click me to move up
    </button>
  </div>
  )
}
