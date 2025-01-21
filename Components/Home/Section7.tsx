import React from 'react';
import { fullpageApi } from '@fullpage/react-fullpage';
import { Button, Divider, Grow, Typography, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { motion } from 'framer-motion';

export default function Section7(props: { fullpageApi: fullpageApi }) {
  const theme = useTheme();

  const contactButtons = [
    {
      id: 1,
      icon: <PhoneIcon />,
      text: '+98 912 074 7823',
      href: 'tel:+989120747823',
    },
    {
      id: 2,
      icon: <PermPhoneMsgIcon />,
      text: '+374 5556 2600',
      href: 'tel:+14242861655',
    },
    {
      id: 3,
      icon: <EmailIcon />,
      text: 'mnodhe@gmail.com',
      href: 'mailto:mnodhe@gmail.com',
    },
    {
      id: 4,
      icon: <LocationOnIcon />,
      text: 'Iran, Tehran',
      href: '#',
    },
  ];

  return (
      <div className="section" style={{ backgroundColor: theme.palette.background.default }}>
        <Divider className='fs-1 font-gold font-mont' sx={{ my: 4 }}>
          Contact Me
        </Divider>

        <div className="row mx-0">
          <div className="col-12 col-lg-7 m-auto">
            <div className="row mx-0 text-center">
              {contactButtons.map((button, index) => (
                  <Grow in={true} timeout={(index + 1) * 500} key={button.id}>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4 mt-3'>
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                        <a href={button.href} style={{ textDecoration: 'none' }}>
                          <Button
                              variant="contained"
                              className='col-12'
                              startIcon={button.icon}
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                          >
                            {button.text}
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </Grow>
              ))}
            </div>

            <Grow in={true} timeout={2500}>
              <div className="col-12 mt-5 text-center fs-4 font-merri font-gold">
                {"<"} Open to Relocation via Visa Sponsorship {"/>"}
              </div>
            </Grow>
          </div>

          <hr className='mt-5' />

          <Grow in={true} timeout={3000}>
            <div className="col-12 mt-5 text-center fs-4 font-mont">
              Thanks For Scrolling :)
            </div>
          </Grow>
        </div>
      </div>
  );
}
