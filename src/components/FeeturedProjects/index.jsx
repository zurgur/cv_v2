import React from 'react';
import './FeeturedProjects.scss';
import SectionFade from '../SectionFade';

export default () => {
  const info = [
    {
      tittle: 'Dealer portal',
      info: 'I work as a part of an innovation team. The solutions we work with are all created for the Microsoft Dynamics platform along with custom web solutions, including React.',
      link: 'https://annata.net/',
      image: './DealerPortal.png'
    },
    {
      tittle: 'Laxness',
      info: 'Worked on this project in collaboration with Gljúfrastein good experience to learn how to work with a customer. The project was originally made in android native but we later decided to port it over to react native.',
      link: 'https://www.hi.is/staff/steinng',
      git: [{ link: 'https://github.com/mimiqkz/Laxness', name: 'Android'}, { link: 'https://github.com/mimiqkz/laxness-react', name: 'React Native'}],
      image: './laxness.png'
    },
    {
      tittle: 'Version 1 of this site',
      info: 'React site I made when applying for jobs after school',
      git: 'https://github.com/zurgur/CV',
      image: './Cv_version1.png' 
    },
    { 
      tittle: 'Kassistant',
      info: 'A project made in software engineering class 1 made with Spring boot and with a Postgres database. my main job was to make the back end, make the database with AWS and connect it to the front end.',
      link: 'https://kassistant.herokuapp.com/',
      git: 'https://github.com/mimiqkz/kassistant',
      image: './kassistant2.png'
    }
  ];
  return (
    <SectionFade>
      <h2 className='section_name'>
        Featured projects
      </h2>
      <div className='Job_info'>
        {info.map(project => (
          <div className="pro" key={project.tittle}>
          <div className="pro_img_text">
            <div className="pro_text">
              <a href={project.link} tragt='_blank' className="title">{project.tittle}</a>
              <p className="info">{project.info}</p>
              <div className='src_container'>
                {typeof project?.git === 'string'? (
                  <a href={project.git}>source code</a>
                ) : (
                  project.git?.map(linkInfo => (
                  <a className='cusrom_src' href={linkInfo.link}>{linkInfo.name}<b> source code</b></a>
                  ))
                )}
              </div>
            </div>
              <div className='pro_figure'>
                <img src={project.image} alt={`progect ${project.tittle}`} className='pro_image' />
              </div>
          </div>
        </div>
        ))}
      </div>
    </SectionFade>
  );
};
