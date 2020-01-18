import React from 'react';
import './FeeturedProjects.scss';
import SectionFade from '../SectionFade';

export default () => {
  const info = [
    {
      tittle: 'Dealer portal',
      info: 'The Annata Dealer Portal provides a web interface that seamlessly integrates with Microsoft Dynamics 365 Finance & Operations platform to facilitate better communication between the manufacturer, dealer and importer.',
      link: 'https://annata.net/',
      image: './DealerPortal.png',
      technology: ['ReactJs', 'TypeScript', 'Mobx state tree', '.Net Core', 'Azure', 'Dev Ops', 'git', 'Dynamics 365']
    },
    {
      tittle: 'Laxness',
      info: 'Worked on this project in collaboration with Gljúfrastein good experience to learn how to work with a customer. The project was originally made in android native but we later decided to port it over to react native.',
      git: [{ link: 'https://github.com/mimiqkz/Laxness', name: 'Android'}, { link: 'https://github.com/mimiqkz/laxness-react', name: 'React Native'}],
      image: './laxness.png',
      technology: ['Android Native', 'React Native', 'Express', 'Node', 'PostgreSQL', 'Java', 'JavaScript', 'git', 'gitHub']
    },
    {
      tittle: 'Cv version 1',
      info: 'React site I made when applying for jobs after school',
      git: 'https://github.com/zurgur/CV',
      link: 'https://zurgur.github.io/CV/',
      image: './Cv_version1.png',
      technology: ['ReactJs', 'JavaSqript', 'node', 'git', 'GitHub']
    },
    { 
      tittle: 'Kassistant',
      info: 'A project made in software engineering class 1 made with Spring boot and with a Postgres database. my main job was to make the back end, make the database with AWS and connect it to the front end.',
      link: 'https://kassistant.herokuapp.com/',
      git: 'https://github.com/mimiqkz/kassistant',
      image: './kassistant2.png',
      technology: ['PostgreSQL', 'Java', 'HTML', 'git', 'gitHub']
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
                  <a className='cusrom_src' key={linkInfo.link} href={linkInfo.link}>{linkInfo.name}<b> source code</b></a>
                  ))
                )}
              </div>
              <div className='tec_container'>
                {project.technology?.map(tec => (
                  <div className='technology'key={tec}>
                    {tec}
                  </div>
                ))}
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
