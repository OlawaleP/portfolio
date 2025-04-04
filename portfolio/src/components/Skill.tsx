import React from 'react';
import './Skill.css';

interface SkillProps {
  name: string;
  icon: string;
  proficiency: number;
}

const Skill: React.FC<SkillProps> = ({ name, icon, proficiency }) => {
  return (
    <div className="skill">
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <div className="skill-info">
        <h4 className="skill-name">{name}</h4>
        <div className="skill-bar">
          <div
            className="skill-progress"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;