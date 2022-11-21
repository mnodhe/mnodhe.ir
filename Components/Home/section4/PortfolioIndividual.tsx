import { Card } from '@mui/material';
import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'

export default function PortfolioIndividual(props: { image: any, imageAlt: string }) {
    return (
        <div className='col-12 col-lg-4 text-center mt-3'>
            <Tilt
                className="parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.5}
                scale={1.02}
                glarePosition="all"
            >
                <Card elevation={3} className="col-12 skillsContainer inner-element p-2">
                    <Image src={props.image} alt={props.imageAlt} className="col-12 portfolioimage" />
                </Card>
            </Tilt>
        </div>
    )
}
