import React from 'react';
import './Exp.scss';
import SectionFade from '../SectionFade';

export default () => {
  const info = [
    {
      tittle: 'Developer at Annata',
      date: '2018 - ',
      info: 'I work as a part of an innovation team. The solutions we work with are all created for the Microsoft Dynamics platform along with custom web solutions, including React.',
      link: 'https://annata.net/'
    },
    {
      tittle: 'Assistant teacher at University of Iceland',
      date: '2018',
      info: 'Assistant teacher in Mathematics and calculus for Steinn Guðmundsson',
      link: 'https://www.hi.is/staff/steinng'
    },
    { 
      tittle: 'University of Iceland',
      date: '2016 - 2018',
      info: 'Computer science',
      link: 'https://www.hi.is/'
    }
  ];
  return (
    <SectionFade>
      <h2 className='section_name'>
        Expirence
      </h2>
      <div className='Job_info'>
        {info.map(job => (
          <div className="Job" key={job.tittle}>
          <div className="Actnames">
            <div className="titleAndInf">
              <a href={job.link} tragt='_blank' className="title">{job.tittle}</a>
              <p>{job.date}</p>
              <p className="info">{job.info}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </SectionFade>
  );
};
