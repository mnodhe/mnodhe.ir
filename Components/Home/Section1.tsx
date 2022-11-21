import { fullpageApi } from '@fullpage/react-fullpage'
import { Button, Divider, IconButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import MyPic from "../../public/Assets/mypic.png";
export default function Section1(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section">
      <div className="mymediaContainer">
        <a href="https://twitter.com/mnodhe1">
          <IconButton component="label">
            <AiFillTwitterCircle />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/mnodhe">
          <IconButton component="label">
            <AiFillLinkedin />
          </IconButton>
        </a>
        <a href="whatsapp://send?abid=+14242861655&text=Hello!">
          <IconButton component="label" >
            <RiWhatsappFill />
          </IconButton>
        </a>
        <a href="whatsapp://send?abid=+989120747823&text=Hello!">
          <IconButton component="label" >
            <RiWhatsappFill />
          </IconButton>
        </a>
      </div>

      <div className="row col-12 p-5">
        <div className="col-12 col-lg-7">
          <div className="col-12">
            <span className='font-merri fw-bold fs-7 fs-lg-1'>I’M </span>
            <h3 className='font-mont font-gold fs-2'>Mohammad Mohammadi Nodehi</h3>
          </div>
          <h2 className="col-12 font-mont font-gold fs-6">A.K.A mnodhe</h2>
          <h2 className="col-12 mt-2 font-merri fs-4">
            Dotnet core & javascript <br />
            Developer
          </h2>
          <div className="row col-12 mt-5">
            <div className="col-12 col-md-4 col-lg-4 col-xl-3">
              <a href="tel:+989120747823">
                <Button className='col-12' type='button' variant='outlined'>Contact Me</Button>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 ">
              <a href="mailto:mnodhe@gmail.com">
                <Button className='col-12' type='button' variant='outlined'>email Me</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 d-none d-lg-block mypictureContainer">
          <Image src={MyPic} alt="mohammad mohammadi nodehi's picture" className='mypicture' />
        </div>

      </div>
    </div>
  )
}
