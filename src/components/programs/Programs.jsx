import React from 'react';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

import './Programs.css';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category" key={Math.random()}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span><Link className='b' to={'/form'}>Join Now</Link></span><img src={RightArrow} alt=""/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;