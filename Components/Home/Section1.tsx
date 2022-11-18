import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'

export default function Section1(props:{fullpageApi:fullpageApi}) {
  return (
    <div className="section" >
    <p>i'm mohammad</p>
    <button onClick={() => props.fullpageApi.moveSectionDown()}>
      Click me to move down
    </button>
  </div>
  )
}
