import { fullpageApi } from '@fullpage/react-fullpage';
import React from 'react';

export default function Section2(props: { fullpageApi: fullpageApi }) {
  return (
      <div className="section">
        <div className="row col-12 p-5">
          <h1 className='font-mont fs-2 fw-bold mt-5'>About Me</h1>

          <p className='font-merri myline fs-6 px-0 fs-lg-5'>
            I'm a <b>Senior Software Engineer</b> with over <b>7 years of experience</b> in full-stack development, specializing in <b>C#, JavaScript, Python, and React.js</b>. Based in Iran ☀️, I am passionate about building scalable, efficient, and user-friendly applications that solve real-world problems.
            <br /><br />
            I thrive in collaborative environments and enjoy leading cross-functional teams to deliver innovative solutions. My expertise includes designing and optimizing systems, integrating AI features, and developing intuitive user interfaces that enhance user engagement and satisfaction.
            <br /><br />
            Outside of work, I contribute to <b>open-source projects</b> and continuously explore new technologies to stay ahead in the ever-evolving tech landscape. I believe in the power of sharing knowledge and fostering a culture of learning and growth.
          </p>
        </div>
      </div>
  );
}
