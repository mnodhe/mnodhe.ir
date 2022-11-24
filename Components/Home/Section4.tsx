import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'
import PortfolioIndividual from './section4/PortfolioIndividual'
import cinematicket from '../../public/Assets/portfolio/cinematicket.jpg'
import ghasedak from '../../public/Assets/portfolio/ghasedak.jpg'
import gisheh7 from '../../public/Assets/portfolio/gisheh7.jpg'
import shahpar from '../../public/Assets/portfolio/shahpar.jpg'
import tabinu from '../../public/Assets/portfolio/tabinu.jpg'
import aviation from '../../public/Assets/portfolio/aviation.jpg'

export default function Section4(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section">
      <div className="row col-12 p-0 mt-5">
        <h1 className='font-mont fs-1 fw-bold text-center mt-5'>Portfolio</h1>
        <div className="row mx-0">
          <PortfolioIndividual
            image={aviation}
            imageAlt="Aviation Industry"
            summery='weight & Balance - ULD Tracking system are being used globally in national Airlines'
            Technology={["ReactJS", "React-Query", "Axios", "SCSS", "Ant-design"]}
          />
          <PortfolioIndividual
            image={cinematicket}
            imageAlt="cinematicket"
            summery='developing and maintaining the existed windows/web appication'
            Technology={[".Net Framework", "Html", "CSS", "bootstrap", "Responsive design", "SEO"]}
          />
          <PortfolioIndividual
            image={ghasedak}
            imageAlt="ghasedak"
            summery='An application to sell books online!by the way! Created in 4 Days :)'
            Technology={["React", "Axios", "SCSS", "stripe"]}
          />
          <PortfolioIndividual
            image={gisheh7}
            imageAlt="gisheh7"
            summery='Online cinema seat sale system.'
            Technology={["NextJS", "SCSS", "Material UI", "team building", ".Net Framework", "PostgreSQL", "SEO"]}
          />
          <PortfolioIndividual
            image={tabinu}
            imageAlt="tabinu.com"
            summery='influencer marketing automation system'
            Technology={["NextJS", "Redux", "WebSocket", "Axios", "SEO"]}
          />
          <PortfolioIndividual
            image={shahpar}
            imageAlt="Shahpar CRM"
            summery='Internal ERP , VOIP & organizational chart management system'
            Technology={["React", "Redux", "MUI", "Responsive"]}
          />
        </div>
      </div>

    </div>
  )
}
