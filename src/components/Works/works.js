import React from 'react';
import './works.css';
import Porto1 from '../../assets/Porto1.jpg';
import Porto2 from '../../assets/Porto2.jpg';
import Porto3 from '../../assets/Porto 3.jpg';
import progres from '../../assets/ProgresApps.jpg'

const Works = () => {
  return (
    <section id="works" className="works-section">
      <div className="works-header">
        <h2 className="works-title">Portfolio</h2>
        <span className="works-desc">
          Check out my Github repositories!
        </span>
      </div>

      <a className="link-github" href="https://github.com/JefflineKristianD">
          Visit my Github
        </a>

      <div className="works-gallery">
        <div className="work-item">
          <img src={Porto1} alt="Natia" className="work-img" />
          <a className="link-porto" href="https://github.com/JefflineKristianD/AshaApps">
            Notification Medical Project
          </a>
        </div>

        <div className="work-item">
          <img src={Porto2} alt="DatabaseCourse" className="work-img" />
          <a className="link-porto" href="https://github.com/JefflineKristianD/DatabaseCourse">
            Boat Service
          </a>
        </div>

        <div className="work-item">
          <img src={Porto3} alt="Trash'In" className="work-img" />
          <a className="link-porto" href="https://github.com/Mat554/SoftwareEngineerAOL">
            Trash'In
          </a>
        </div>
      </div>

        <h3 className='progressTitle'>On Progress Apps</h3>
      <div className='worksImgs'>
        <img src={progres} alt='Progress App 1' className='worksImg'/>
        <p className='ProgressPorto'>Mobile CV Prediction Using Machine Learning (On Progress)</p>
      </div>
    </section>
  );
};

export default Works;
