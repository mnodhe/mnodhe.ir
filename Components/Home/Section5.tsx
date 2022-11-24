import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimeLineIndividual from './section5/timeLineIndividual';


export default function Section5(props: { fullpageApi: fullpageApi }) {




  return (
    <div className="section">
      <div className="row col-12 p-0 mt-5">
        <h1 className='font-mont fs-1 fw-bold text-center mt-5'>Experience</h1>
        <div className="row mx-0">
          <Timeline position="alternate">
            <TimeLineIndividual direction='right'
              jobtitle='Full Stack Developer'
              jobCompanyName='hiba.mobi'
              joblocation='dubai'
              jobSummery='hiba is an super application start up located in dubai
              and is under development by our agile group including mohammad mohammadi nodhe
              ,mohammad moshtagh and sina sabetghadam with dotnet7 and nextjs .
              it has 12 phases that need to be developed and we are in phase 2.'
              jobStartDate='January 2021 to Present'
            />
            <TimeLineIndividual direction='left'
              jobtitle='Full Stack Developer'
              jobCompanyName='Airline industry'
              joblocation='Tehran'
              jobSummery='in this role i was given a task to rewrite the Airplane "Unit Load Device (ULD) tracking system" and
              "َWeight and balance" web Applications. ULD project : all passengers baggage must be placed in a tank
              called an ULD and then all uld s must load into Airplane. so I did software analysis and research and
              developed new Application using .net core 6 and reactjs. Weight and balance project : each airplane
              has a center point of Gravity and this point will change after the passengers and ULD and fuels gets
              loaded in an airplane. so for an airplane to be ready to take of and land successfully it will be important
              to accurately calculate the point of gravity base on statistic. I did software analysis and research and
              developed new Application using .net core 6 and reactjs to automatically generate and calculate these
              record and report the document for landing and takeoff to pilot'
              jobStartDate='January 2020 to November 2022'
            />
            <TimeLineIndividual direction='right'
              jobtitle='Fullstack Developer & DevOps'
              jobCompanyName='Qsolution(Cheepet project)'
              joblocation='Tehran'
              jobSummery='developing a Pet Shop (Cheepet.ir) React from UI/UX in zapplin application and backend with .net core 6
              and configuration and maintainance of Dedicated servers including: azure devops server - windows dns
              server - backend and frontend server using Docker - CDN server using MinIO- enginx reverse proxy'
              jobStartDate='February 2021 to January 2022'
            />
            <TimeLineIndividual direction='left'
              jobtitle='React Developer'
              jobCompanyName='GhasedakApp'
              joblocation='Tehran'
              jobSummery='As one of my Contract project , i have been developed an Frontend base on reactjs for a Book Store in
              4 day. https://web.ghasedakapp.ir'
              jobStartDate='October 2021 to October 2021'
            />
            <TimeLineIndividual direction='right'
              jobtitle='React & .Netcore Developer'
              jobCompanyName='gisheh7.ir'
              joblocation='Tehran'
              jobSummery='gisheh7.ir site Redesign (React and .NetCore and PostgreSQL). One of my achievement in this role was to
              developed an custom authorization so each user can access specified apis. so i developed an endpoint
              catcher to get all endpoint and their action and made a relation table with Site adminuser and created a
              custom authorize tag in top of my endpoint classes and because i used reactjs for my frontend, i used the
              id of related table to check or uncheck the individual site adminusers to have access to the specified API.'
              jobStartDate='July 2020 to September 2021'
            />
            <TimeLineIndividual direction='left'
              jobtitle='React Developer'
              jobCompanyName='Dornevis'
              joblocation='Tehran'
              jobSummery='I worked with dornevis holding on a front-end Internal CRM for Shahpar company. I must say, redux
              management system in this project was very huge. It had an organizational chart that like you have a
              holding so you can have some management and, in that management, we have some branches and in
              every branch we had department and position for all of them and in any position, we had another position
              and another position in that position. So, I created a factorial like component for position and created
              the redux state management base on their needs and for the sake of the User Experience, I developed
              an heretically like UI base on the response of the companys organizational chart so the user can easily
              add/update/delete the components'
              jobStartDate='January 2021 to April 2021'
            />
            <TimeLineIndividual direction='right'
              jobtitle='IT Support Specialist'
              jobCompanyName='CinemaTicket.org'
              joblocation='Tehran'
              jobSummery='One of my achievement in this role was that in the cashier app when the manager of cinema needed to
              create a new sans from a movie, for each sans in the cinemas local server their was a request call to
              push the sanss from the local server to site so that the customer can buy their tickets from our site. So, I
              developed a stored procedure that could accept Json and then got all sanss in an array of jsons and sent
              them to the site API with one request. There were so many challenges in that job but I think that was
              worth explaining because all cinemas local server was sql 2008 and some programing function to solve
              this solution does not work in this version and it required at least version 2016.'
              jobStartDate='January 2018 to July 2020'
            />
            <TimeLineIndividual direction='left'
              jobtitle='Help Desk Specialist'
              jobCompanyName='Tamas Gostar Kish'
              joblocation='Tehran'
              jobSummery='developing a program for Zero Energy buildings . (Building Management System)'
              jobStartDate='January 2021 to April 2021'
            />
          </Timeline>
        </div>
      </div>
    </div>
  )
}
