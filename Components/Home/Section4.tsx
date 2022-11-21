import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'

export default function Section4(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section">
      <div className="row col-12 p-5 ">
        <h1 className='font-mont fs-2 fw-bold mt-5'>Portfolio</h1>

      </div>
      <button onClick={() => props.fullpageApi.moveSectionDown()}>
        Click me to move down
      </button>
    </div>
  )
}
