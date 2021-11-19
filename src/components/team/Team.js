import React from 'react';
import style from "./Team.module.css";
import TeamMembers from "./TeamMembers/TeamMembers";
import TeamDescription from "./TeamDescription/TeamDescription";

const Team = () => {
    return (
        <div className={style.contentWrapper}>
            <TeamMembers/>
            <TeamDescription/>
        </div>
    );
};

export default Team;