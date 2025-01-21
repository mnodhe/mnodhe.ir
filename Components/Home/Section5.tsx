import { fullpageApi } from '@fullpage/react-fullpage';
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLineIndividual from './section5/timeLineIndividual';
import { Grow, Typography } from '@mui/material';

export default function Section5(props: { fullpageApi: fullpageApi }) {
  return (
      <div className="section">
        <div className="row col-12 p-0 mt-5">
          <Typography variant="h3" className='font-mont fw-bold text-center mt-5' sx={{ color: '#ffd700' }}>
            Experience
          </Typography>
          <div className="row mx-0">
            <Timeline position="alternate" sx={{ padding: '2rem 0' }}>
              {/* AI Bridge GMBH */}
              <Grow in={true} timeout={500}>
                <div>
                  <TimeLineIndividual
                      direction='right'
                      jobtitle='Senior Software Engineer (Remote)'
                      jobCompanyName='AI Bridge GMBH'
                      joblocation='Stuttgart, Germany'
                      jobSummery='Spearheaded the development of an AI-first application with over 50 AI features using Python and React.js. Improved application performance by optimizing the codebase and implementing modular, reusable components.'
                      jobStartDate='Present'
                  />
                </div>
              </Grow>

              {/* D3Studio Ltd */}
              <Grow in={true} timeout={700}>
                <div>
                  <TimeLineIndividual
                      direction='left'
                      jobtitle='Senior Software Engineer (Freelance)'
                      jobCompanyName='D3Studio Ltd'
                      joblocation='Amsterdam, Netherlands'
                      jobSummery='Developed a Real Estate agent application for client management and Auto ID card validation, improving client onboarding efficiency by 40%. Designed an intuitive UI, reducing time spent on property listings by 30%.'
                      jobStartDate='February 2024 - April 2024'
                  />
                </div>
              </Grow>

              {/* Iranian International Airline Ltd */}
              <Grow in={true} timeout={900}>
                <div>
                  <TimeLineIndividual
                      direction='right'
                      jobtitle='Senior Software Engineer'
                      jobCompanyName='Iranian International Airline Ltd'
                      joblocation='Tehran, Iran'
                      jobSummery='Redesigned the "Unit Load Device (ULD) Tracking System" with Java and React.js, reducing business logic errors by 80%. Developed a "Weight and Balance" system using Java and Next.js, cutting manual errors by 50% and saving 30 minutes per flight preparation.'
                      jobStartDate='July 2022 - February 2024'
                  />
                </div>
              </Grow>

              {/* Pasargad Bank */}
              <Grow in={true} timeout={1100}>
                <div>
                  <TimeLineIndividual
                      direction='left'
                      jobtitle='Senior Software Developer (Freelance)'
                      jobCompanyName='Pasargad Bank'
                      joblocation='Tehran, Iran'
                      jobSummery='Designed and developed a centralized IoT device management panel, enabling nationwide monitoring of security devices and reducing system downtime by 20%. Integrated a security camera network with real-time alerts.'
                      jobStartDate='March 2023 - January 2024'
                  />
                </div>
              </Grow>

              {/* Hiba Ltd */}
              <Grow in={true} timeout={1300}>
                <div>
                  <TimeLineIndividual
                      direction='right'
                      jobtitle='Senior Software Developer (Freelance)'
                      jobCompanyName='Hiba Ltd'
                      joblocation='Dubai, UAE'
                      jobSummery='Designed and implemented Phase 1 of Hiba’s website using C# and Next.js for auto services, cleaning, and tourist tours. Achieved a 10% performance improvement based on user feedback.'
                      jobStartDate='November 2022 - April 2023'
                  />
                </div>
              </Grow>

              {/* Gisheh7 Ltd */}
              <Grow in={true} timeout={1500}>
                <div>
                  <TimeLineIndividual
                      direction='left'
                      jobtitle='Senior Software Engineer'
                      jobCompanyName='Gisheh7 Ltd'
                      joblocation='Tehran, Iran'
                      jobSummery='Led the migration from legacy PHP7 to .NET Core, PostgreSQL, and Next.js, resulting in a 30% improvement in organic traffic and SEO ranking. Resolved 5 major technical SEO issues, boosting web visibility.'
                      jobStartDate='September 2021 - January 2022'
                  />
                </div>
              </Grow>

              {/* Q Solution Ltd */}
              <Grow in={true} timeout={1700}>
                <div>
                  <TimeLineIndividual
                      direction='right'
                      jobtitle='Senior Software Developer (Freelance)'
                      jobCompanyName='Q Solution Ltd'
                      joblocation='Dubai, UAE'
                      jobSummery='Engineered a pet shop platform using Next.js, increasing user engagement by 30% and boosting auction participation by 15%. Configured and maintained dedicated servers, ensuring 99.9% uptime.'
                      jobStartDate='April 2020 - August 2021'
                  />
                </div>
              </Grow>

              {/* Cinema Ticket Ltd */}
              <Grow in={true} timeout={1900}>
                <div>
                  <TimeLineIndividual
                      direction='left'
                      jobtitle='Junior Software Engineer'
                      jobCompanyName='Cinema Ticket Ltd'
                      joblocation='Tehran, Iran'
                      jobSummery='Optimized ticket creation time by 70% and enhanced Web Core Vitals by 12%. Migrated analytics to Google Analytics 4 (GA4), providing more accurate data tracking.'
                      jobStartDate='January 2018 - March 2020'
                  />
                </div>
              </Grow>

              {/* Dornevis Ltd */}
              <Grow in={true} timeout={2100}>
                <div>
                  <TimeLineIndividual
                      direction='right'
                      jobtitle='Junior React Developer (Freelance)'
                      jobCompanyName='Dornevis Ltd'
                      joblocation='Tehran, Iran'
                      jobSummery='Developed an internal CRM system, improving user productivity by 40% and reducing data retrieval time by 25%. Implemented a recursive organizational chart display component.'
                      jobStartDate='September 2021 - December 2021'
                  />
                </div>
              </Grow>
            </Timeline>
          </div>
        </div>
      </div>
  );
}
