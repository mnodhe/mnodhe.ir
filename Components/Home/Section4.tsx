import { fullpageApi } from '@fullpage/react-fullpage';
import React from 'react';
import PortfolioIndividual from './section4/PortfolioIndividual';

export default function Section4(props: { fullpageApi: fullpageApi }) {
  return (
      <div className="section">
        <div className="row col-12 p-0 mt-5">
          <h1 className='font-mont fs-1 fw-bold text-center mt-5'>Portfolio</h1>
          <div className="row mx-0">
            {/* Aviation Industry Projects */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/aviation.jpg"}
                imageAlt="Aviation Industry"
                summery='Developed a "Weight and Balance" system and redesigned the "ULD Tracking System" for a national airline, reducing manual errors by 50% and improving cargo handling efficiency by 80%.'
                Technology={["ReactJS", "React-Query", "Axios", "SCSS", "Ant-design", "Java", "Next.js"]}
            />

            {/* Cinema Ticket Platform */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/cinematicket.jpg"}
                imageAlt="Cinema Ticket Platform"
                summery='Optimized ticket creation time by 70% and enhanced Web Core Vitals by 12%, improving user experience and site performance.'
                Technology={[".Net Framework", "HTML", "CSS", "Bootstrap", "Responsive Design", "SEO"]}
            />

            {/* Ghasedak Online Bookstore */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/ghasedak.jpg"}
                imageAlt="Ghasedak Online Bookstore"
                summery='Built an online bookstore with Stripe integration, enabling seamless transactions and delivering the project in just 4 days.'
                Technology={["React", "Axios", "SCSS", "Stripe"]}
            />

            {/* Gisheh7 Online Cinema System */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/gisheh7.jpg"}
                imageAlt="Gisheh7 Online Cinema System"
                summery='Led the migration from legacy PHP7 to .NET Core and Next.js, resulting in a 30% improvement in organic traffic and SEO ranking.'
                Technology={["NextJS", "SCSS", "Material UI", ".Net Core", "PostgreSQL", "SEO"]}
            />

            {/* Tabinu Influencer Marketing Platform */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/tabinu.jpg"}
                imageAlt="Tabinu Influencer Marketing Platform"
                summery='Developed an influencer marketing automation system with real-time WebSocket communication, improving user engagement and system efficiency.'
                Technology={["NextJS", "Redux", "WebSocket", "Axios", "SEO"]}
            />

            {/* Shahpar CRM System */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/shahpar.jpg"}
                imageAlt="Shahpar CRM System"
                summery='Designed and implemented an internal ERP system with VOIP integration and organizational chart management, improving productivity by 40%.'
                Technology={["React", "Redux", "Material UI", "Responsive Design"]}
            />

            {/* AI Bridge GMBH - AI-First Application */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/ai-bridge.jpg"} // Add an appropriate image
                imageAlt="AI Bridge GMBH"
                summery='Spearheaded the development of an AI-first application with over 50 AI features, enhancing user experience and optimizing real-time data processing.'
                Technology={["Python", "React.js", "Microservices", "GraphQL", "Docker"]}
            />

            {/* D3Studio Ltd - Real Estate Agent Application */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/real-estate.jpg"} // Add an appropriate image
                imageAlt="Real Estate Agent Application"
                summery='Developed a Real Estate agent application with Auto ID card validation, improving client onboarding efficiency by 40%.'
                Technology={["C#", "React.js", "RESTful APIs", "Third-party API Integration"]}
            />

            {/* Pasargad Bank - IoT Device Management Panel */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/iot.jpg"} // Add an appropriate image
                imageAlt="IoT Device Management Panel"
                summery='Designed and developed a centralized IoT device management panel, reducing system downtime by 20% and improving nationwide monitoring capabilities.'
                Technology={["C#", "React.js", "IoT", "Real-time Alerts", "Security Camera Integration"]}
            />

            {/* Hiba Ltd - Auto Services Website */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/hiba.jpg"} // Add an appropriate image
                imageAlt="Hiba Ltd Website"
                summery='Implemented Phase 1 of Hiba’s website for auto services, cleaning, and tourist tours, achieving a 10% performance improvement based on user feedback.'
                Technology={["C#", "Next.js", "Responsive Design", "User Feedback Optimization"]}
            />

            {/* Q Solution Ltd - Pet Shop Platform */}
            <PortfolioIndividual
                image={"https://cdn.tabinu.com/mnodheir/Assets/portfolio/pet-shop.jpg"} // Add an appropriate image
                imageAlt="Pet Shop Platform"
                summery='Engineered a pet shop platform with auction functionality, increasing user engagement by 30% and auction participation by 15%.'
                Technology={["Next.js", "PostgreSQL", "Dedicated Server Management", "Auction System"]}
            />
          </div>
        </div>
      </div>
  );
}
