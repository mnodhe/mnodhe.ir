import {
    AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useTheme
} from '@mui/material'
import React, { useContext, useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext, getDirection } from '../../../pages/_app';
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image'
import logo from '../../../public/logo.png'
import darklogo from '../../../public/logo-dark.png'
import { useRouter } from 'next/router';
import { SetUIdirection_Action } from '../../../Helper/Redux/Actions/UI/UIAction';
import { useDispatch } from 'react-redux';
import { BsGlobe } from "react-icons/bs";
import { MenuListanchors } from '../../../Helper/Menu/constant';
import { GiSkills } from 'react-icons/gi';
import { FcVoicePresentation, FcAbout } from 'react-icons/fc';
import { AiFillExperiment } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';
import { RiContactsBookFill } from 'react-icons/ri';

export default function Header() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const router = useRouter();
    const [tabValue, setTabValue] = useState("About")
    const colorMode = useContext(ColorModeContext);
    const [isDrawerOpen, setisDrawerOpen] = useState<boolean>(false)
    const languages = [
        { code: "fa", name: "فارسی", country_code: "ir" },
        { code: "en", name: "English", country_code: "us" },
        { code: "ae", name: "Arabic", country_code: "ae" },
    ];
    const currentlanguege = router.locale!;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const drawerlist = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setisDrawerOpen(false)}
            onKeyDown={() => setisDrawerOpen(false)}
        >
            <List>
            <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FcVoicePresentation />
                        </ListItemIcon>
                        <ListItemText primary="Presentation" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FcAbout />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            < GiSkills/>
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BsNewspaper />
                        </ListItemIcon>
                        <ListItemText primary="News" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            < AiFillExperiment/>
                        </ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BiChat />
                        </ListItemIcon>
                        <ListItemText primary="Testimonial" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            < RiContactsBookFill/>
                        </ListItemIcon>
                        <ListItemText primary="ContactMe" />
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider />

        </Box>
    );

    return (
        <Box
            sx={{
                position: "fixed",
                width: '100%',
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.primary',
                backgroundColor: theme.palette.mode === "light" ? "unset" : "#34353a",
                borderRadius: 1,
                p: 2,
            }}
        >
            <div className="row mx-0 col-12">
                <div className="col-3 col-lg-2">
                    <AppBar position="static"
                        sx={{
                            color: "primary.main",
                            bgcolor: "unset",
                            backgroundImage: "unset",
                            boxShadow: "unset"
                        }}>
                        <Toolbar variant="dense">
                            <IconButton
                                edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                                onClick={() => setisDrawerOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor={["ae", "fa"].includes(router.locale!.toString()) ? "right" : "left"}
                                open={isDrawerOpen}
                                onClose={() => setisDrawerOpen(false)}
                            >
                                {drawerlist()}
                            </Drawer>
                            <Typography variant="h6" color="inherit" component="div">
                                <Image className='col-12' width={90} height={55} src={theme.palette.mode === "light" ? darklogo : logo} alt="mnodhe Logo" />
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="col-8 d-none d-md-none d-lg-block d-xl-block align-self-center">
                    <Tabs
                        value={tabValue}
                        variant='scrollable'
                        onChange={(e, v) => setTabValue(v)}
                    >
                        {MenuListanchors.map((item) => {
                            return <Tab value={item} label={item} />
                        })}

                    </Tabs>
                </div>
                <div className="col-9 text-end col-lg-2 align-self-center">
                    <Button
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        color="inherit"
                        size="small"
                        variant='text'
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        startIcon={<BsGlobe />}
                    ></Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        {languages.map((language, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    style={{
                                        opacity:
                                            language.code === currentlanguege ? 0.5 : 1,
                                    }}
                                    onClick={() => {
                                        //TODO: Danger Maybe On Change language!!
                                        debugger
                                        dispatch(
                                            SetUIdirection_Action({
                                                direction: getDirection(language.code),
                                            })
                                        );
                                        router.push(
                                            { pathname: router.asPath },
                                            router.asPath,
                                            {
                                                locale: language.code,
                                            }
                                        );
                                        handleClose();
                                    }}
                                >
                                    <span
                                        className={`flag-icon flag-icon-${language.country_code} mx-2`}
                                    ></span>
                                    {language.name}
                                </MenuItem>
                            );
                        })}
                    </Menu>

                    {/* {theme.palette.mode} mode */}
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}
