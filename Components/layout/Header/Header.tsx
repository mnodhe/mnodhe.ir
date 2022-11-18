import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../../pages/_app';
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image'
import logo from '../../../public/logo.png'

export default function Header() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            sx={{
                position: "fixed",
                width: '100%',
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.primary',
                borderRadius: 1,
                p: 2,
            }}
        >
            <div className="row mx-0 col-12">
                <div className="col-2">
                    <AppBar position="static" sx={{ color: "primary.main", bgcolor: "background.default", backgroundImage: "unset", boxShadow: "unset" }}>
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                <Image className='col-12' width={90} height={55} src={logo} alt="mnodhe Logo" />
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="col-8">
                    <Tabs className="row col-5 m-auto text-center align-self-center">
                        <Tab className="col-4" label="About" />
                        <Tab className="col-4" label="Porfolio" />
                        <Tab className="col-4" label="Contact" />
                    </Tabs>
                </div>
                <div className="col-2">
                    {/* {theme.palette.mode} mode */}
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}
