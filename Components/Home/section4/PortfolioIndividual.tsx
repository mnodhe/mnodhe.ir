import { Badge, Card, Chip } from '@mui/material';
import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'

export default function PortfolioIndividual(props: { image: any, imageAlt: string,summery:string,Technology:string[] }) {
    const [hover, setHover] = useState(false)
    return (
        <div className='col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-3 text-center mt-3'>
            <Card  
                elevation={1}
                className="col-12 skillsContainer inner-element p-0"
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                style={{height: "310px"}}
                >
                    <div className={hover?'portfoliohovertitle font-merri':'d-none'}>
                      <div className="col-12  font-mont font-gold">
                        {props.imageAlt}
                      </div>
                      <div className="col-12 fs-5">
                        {props.summery}
                      </div>
                      <div className="col-12">
                        {props.Technology.map((tech)=>{
                            return(
                                <Chip clickable label={tech} size="small"/>
                            )
                        })}
                      </div>
                      
                    </div>
                <Image 
                    src={props.image}
                    alt={props.imageAlt} 
                    className={hover?"col-12 portfolioimage blur":"col-12 portfolioimage"}
                />
            </Card>
        </div>
    )
}
