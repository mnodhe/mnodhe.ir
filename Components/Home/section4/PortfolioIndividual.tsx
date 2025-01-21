import { Card, Chip, Grow, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function PortfolioIndividual(props: { image: any, imageAlt: string, summery: string, Technology: string[] }) {
  const [hover, setHover] = useState(false);

  return (
      <div className='col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center mt-3'>
        <Tilt
            tiltEnable={!hover} // Disable tilt on hover for better UX
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
        >
          <Card
              elevation={hover ? 6 : 2}
              className="col-12 skillsContainer inner-element p-0"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                height: "310px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease-in-out",
                border: hover ? "1px solid #ffd700" : "1px solid #e0e0e0",
              }}
          >
            {/* Hover Overlay */}
            <Grow in={hover} timeout={300}>
              <div
                  className="portfoliohovertitle font-merri"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    zIndex: 2,
                  }}
              >
                <div className="col-12 font-mont font-gold fs-5 mb-2">
                  {props.imageAlt}
                </div>
                <div className="col-12 fs-6 mb-3 text-center">
                  {props.summery}
                </div>
                <div className="col-12 d-flex flex-wrap justify-content-center gap-2">
                  {props.Technology.map((tech) => (
                      <Tooltip key={tech} title={tech} arrow>
                        <Chip
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: "#ffd700",
                              color: "#000",
                              fontWeight: "bold",
                              "&:hover": { backgroundColor: "#ffc107" },
                            }}
                        />
                      </Tooltip>
                  ))}
                </div>
              </div>
            </Grow>

            {/* Image */}
            <img
                src={props.image}
                alt={props.imageAlt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: hover ? "blur(4px)" : "none",
                  transition: "filter 0.3s ease-in-out",
                }}
            />
          </Card>
        </Tilt>
      </div>
  );
}
