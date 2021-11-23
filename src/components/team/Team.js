import React from 'react';
import TeamMembers from "./TeamMembers/TeamMembers";
import TeamDescription from "./TeamDescription/TeamDescription";
import {SectionWrapper} from "../../common/styles";

const Team = () => {
    return (
        <SectionWrapper mediaDirection={'column-reverse'}>
            <TeamMembers/>
            <TeamDescription/>
        </SectionWrapper>
    );
};

export default Team;