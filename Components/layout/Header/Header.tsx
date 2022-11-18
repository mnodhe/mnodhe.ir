import { AppBar, Box, Button, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext, getDirection } from '../../../pages/_app';
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { useRouter } from 'next/router';
import { SetUIdirection_Action } from '../../../Helper/Redux/Actions/UI/UIAction';
import { useDispatch } from 'react-redux';
import { BsGlobe } from "react-icons/bs";

export default function Header() {
    const theme = useTheme();
    const dispatch=useDispatch();
    const router = useRouter();
    const [tabValue, setTabValue] = useState("About")
    const colorMode = useContext(ColorModeContext);
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
                    <Tabs value={tabValue} className="row col-5 m-auto text-center align-self-center"
                    onChange={(e,v)=>setTabValue(v)}
                    >
                        <Tab className="col-4" value="About" label="About" />
                        <Tab className="col-4" value="Porfolio" label="Porfolio" />
                        <Tab className="col-4" value="Contact" label="Contact" />
                    </Tabs>
                </div>
                <div className="col-2">
                    <Button
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        color="inherit"
                        size="small"
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
