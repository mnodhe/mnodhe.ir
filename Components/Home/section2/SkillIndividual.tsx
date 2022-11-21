import { Card, Tooltip } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import { useTheme } from '@tanstack/react-query-devtools/build/lib/theme';

export default function SkillIndividual(props: { Image: any, Skill: string }) {
    return (
        <div className="col-12 col-md-6 col-lg-3 col-xl-2 text-center mt-3">
            {/* maybe i will use it some day : )
            <Tooltip title="Delete" placement='top'> */}
            <Tilt
                className="parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.5}
                scale={1.02}
                glarePosition="all"
            >

                <Card elevation={3} className="col-12 skillsContainer inner-element p-2">
                    <div className="col-12 imgcontainer m-auto">
                        <Image alt={props.Skill} src={props.Image} className="myskillIcon" />
                    </div>
                    <h2 className="skilltitle col-12 mt-4 font-merri fs-5 px-0 mx-0">
                        {props.Skill}
                    </h2>
                </Card>


            </Tilt>
            {/* </Tooltip> */}
        </div>
    )
}
