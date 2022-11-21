import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'
import SkillIndividual from './section2/SkillIndividual'
import netcore from '../../public/Assets/netcore.png'
import react from '../../public/Assets/react.png'
import ubuntu from '../../public/Assets/ubuntu.png'
import git from '../../public/Assets/git.png'
import js from '../../public/Assets/js.png'
import mongodb from '../../public/Assets/mongodb.png'
import csshtml from '../../public/Assets/csshtml.png'
import sqlserver from '../../public/Assets/sqlserver.png'
import docker from '../../public/Assets/docker.png'
import scss from '../../public/Assets/scss.png'
import ef from '../../public/Assets/ef.png'
import mysql from '../../public/Assets/mysql.png'
import postgresql from '../../public/Assets/postgresql.png'



export default function Section3(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section" >
      <div className="row col-12 p-5">
        <h1 className='font-mont fs-1 fw-bold text-center mt-5'>My Skills</h1>
        <div className="row mx-0">

          <SkillIndividual Image={netcore} Skill='.Net' />
          <SkillIndividual Image={react} Skill='Reactjs' />
          <SkillIndividual Image={ubuntu} Skill='Ubuntu' />
          <SkillIndividual Image={git} Skill='Git Source Control' />
          <SkillIndividual Image={sqlserver} Skill='SQL Server' />
          <SkillIndividual Image={mongodb} Skill='MongoDB' />
          <SkillIndividual Image={csshtml} Skill='HTML & CSS' />
          <SkillIndividual Image={js} Skill='Javascript' />
          <SkillIndividual Image={ef} Skill='Entity Framework' />
          <SkillIndividual Image={docker} Skill='Docker' />
          <SkillIndividual Image={scss} Skill='Sass Preprocessor' />
          <SkillIndividual Image={mysql} Skill='MySQL' />
          <SkillIndividual Image={postgresql} Skill='PostgreSQL' />
        </div>
      </div>
    </div>
  )
}
