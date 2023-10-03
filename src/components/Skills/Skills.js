import React from 'react';
import './Skills.css';
import GTR from '../../assets/GT-R-logo-2560x1440.png';
import LBWK from '../../assets/LBWK.png';
import RB from '../../assets/rocket bunny.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skill-title">
                What I Do
            </span>
            <span className="skill-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde repellendus! Voluptas corrupti, incidunt voluptatum harum numquam repudiandae veniam impedit voluptatem ipsum id quia. Repellendus expedita neque cupiditate. Ab, nisi.</span>
            <div className="skillbars">
                <div className="skillbar">
                    <img src={LBWK} alt="" className="skillbar-img" />
                    <div className="skillbar-text">
                        <h2>LibertyWalk</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit fuga a mollitia nobis.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={RB} alt="" className="skillbar-img" />
                    <div className="skillbar-text">
                        <h2>RocketBunny</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit fuga a mollitia nobis.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={GTR} alt="" className="skillbar-img" />
                    <div className="skillbar-text">
                        <h2>Skyline</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit fuga a mollitia nobis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills