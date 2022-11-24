import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Typography } from '@mui/material';

export default function TimeLineIndividual(props:
    {
        direction: "right" | "left",
        jobStartDate: string,
        jobtitle: string,
        jobCompanyName: string,
        joblocation: string,
        jobSummery: string
    }
) {
    return (
        <TimelineItem position={props.direction}>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {props.jobStartDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography className='fs-4 font-mont'>{props.jobtitle}</Typography>
                <div className="mt-2 ">
                    {props.jobCompanyName + " - " + props.joblocation}
                </div>
                <div className="mt-2 opacity-50 text-align-justify">
                    {props.jobSummery}
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}
