import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'
import { Button, Divider } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
export default function Section7(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section" >
      <Divider className='fs-1 font-gold font-mont'>Contact Me</Divider>
      <div className="row mx-0">
        <div className="col-7 m-auto">
          <div className="row mx-0">
            <div className='col-12 col-lg-4 mt-3'>
              <a href="tel:+989120747823">
                <Button variant="contained" className='col-10' startIcon={<PhoneIcon />}>
                  +98 912 074 7823
                </Button>
              </a>
            </div>
            <div className='col-12 col-lg-4 mt-3'>
              <a href="tel:+14242861655">
                <Button variant="contained" className='col-10' startIcon={<PermPhoneMsgIcon />}>
                  +1 424 286 1655
                </Button>
              </a>
            </div>
            <div className='col-12 col-lg-4 mt-3'>
              <a href="mailto:mnodhe@gmail.com">
                <Button type='button' className='col-10' variant='contained' startIcon={<EmailIcon />}>mnodhe@gmail.com</Button>
              </a>
            </div>
            <div className='col-12 col-lg-4 mt-3'>
              <a href="mailto:mnodhe@gmail.com">
                <Button type='button' className='col-10' variant='contained' startIcon={<LocationOnIcon />}>Iran,Tehran</Button>
              </a>
            </div>
            <div className="col-12 mt-5 text-center fs-4 font-merri font-gold">
              {"<"} Open to Relocation via Visa SponsorShip {"/>"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
