import { fullpageApi } from '@fullpage/react-fullpage'
import React from 'react'
import PortfolioIndividual from './section4/PortfolioIndividual'
import cinematicket from '../../public/Assets/portfolio/cinematicket.JPG'
import ghasedak from '../../public/Assets/portfolio/ghasedak.JPG'
import gisheh7 from '../../public/Assets/portfolio/gisheh7.JPG'
import shahpar from '../../public/Assets/portfolio/shahpar.JPG'
import tabinu from '../../public/Assets/portfolio/tabinu.JPG'

export default function Section4(props: { fullpageApi: fullpageApi }) {
  return (
    <div className="section">
      <div className="row col-12 p-5">
        <h1 className='font-mont fs-1 fw-bold text-center mt-5'>Portfolio</h1>
        <div className="row mx-0">
          <PortfolioIndividual image={cinematicket} imageAlt="cinematicket" />
          <PortfolioIndividual image={ghasedak} imageAlt="ghasedak" />
          <PortfolioIndividual image={gisheh7} imageAlt="gisheh7" />
          <PortfolioIndividual image={shahpar} imageAlt="shahpar" />
          <PortfolioIndividual image={tabinu} imageAlt="tabinu" />
        </div>
      </div>

    </div>
  )
}
