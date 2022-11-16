import { Box, CircularProgress } from '@mui/material'
import { useIsFetching } from '@tanstack/react-query';
import React from 'react'

export default function Loading() {
    const isFetching = useIsFetching();
    const display = isFetching ? 'row p-2 loadingalert rounded' : 'd-none'
    return (
        <div className={display} >
            <div className="col-3">
                <CircularProgress />
            </div>
            <div className="col-6 align-self-center ">
                Fetching Data ...
            </div>
        </div>

    )
}
