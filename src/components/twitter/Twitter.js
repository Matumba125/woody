import React from 'react';
import TwitterDescription from "./TwitterDescription/TwitterDescription";
import TwitterLink from "./TwitterLink/TwitterLink";
import {SectionWrapper} from "../../common/styles";

const Twitter = () => {
    return (
        <SectionWrapper mediaDirection={'column-reverse'}>
            <TwitterDescription/>
            <TwitterLink/>
        </SectionWrapper>
    );
};

export default Twitter;