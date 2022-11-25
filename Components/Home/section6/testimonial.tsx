import { Avatar } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';
export default function Testimonial(props: { image: any, name: string, link: string, whereweworked: string, jobposition: string, opinion: string }) {
    return (
        <div className="slide">

            <div className="col-7 m-auto">
                <h1 className='font-mont fs-1 fw-bold text-center mt-5'>Testimonial</h1>
                <div className="d-flex align-self-center mt-5">
                    <Avatar alt={props.name} src={props.image} sx={{ width: 56, height: 56 }} />
                    <Link href={props.link} target="_blank" className="col-6  align-self-center font-merri mx-2">
                        <span className='font-mont'>
                            {props.name}
                        </span>
                        <br />
                        <span className='fs-6'>{props.jobposition}</span>
                    </Link>
                </div>
                <div className="col-12 font-merri fs-6 opacity-50">
                    {props.whereweworked}
                </div>
                <div className="col-12 mt-3">
                    {props.opinion}
                </div>
            </div>

        </div>
    )
}
