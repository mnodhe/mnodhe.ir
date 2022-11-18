import { fullpageApi } from '@fullpage/react-fullpage'
import { Button } from '@mui/material'
import React from 'react'

export default function Section1(props:{fullpageApi:fullpageApi}) {
  return (
  <div className="section">
    <div className="row col-12 p-5">
      <div className="col-7">
        <div className="col-12">
          <span className='font-merri fw-bold fs-2'>I’M </span>
          <span className='font-mont font-gold fs-2'>Mohammad Mohammadi Nodehi</span>
        </div>
        <div className="col-12 font-mont font-gold fs-6">A.K.A mnodhe</div>
        <div className="col-12 mt-2 font-merri fs-4">
          Dotnet core & javascript <br />
          Developer
        </div>
        <div className="row mx-0 col-12 mt-5">
          <div className="col-3">
            <a href="tel:+989120747823">
              <Button className='col-12'type='button' variant='outlined'>Contact Me</Button>
            </a>
          </div>
          <div className="col-3">
            <a href="email:mnodhe@gmail.com">
              <Button className='col-12' type='button' variant='outlined'>email Me</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-5">my image will be here :)</div>
    </div>
  </div>
  )
}
