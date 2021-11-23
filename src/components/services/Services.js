import React from 'react';
import ServicesDescription from "./ServicesDescription/ServicesDescription";
import ServicesInfo from "./ServicesInfo/ServicesInfo";
import {SectionWrapper} from "../../common/styles";

const Services = () => {
    return (
        <SectionWrapper mediaDirection={'column'}>
            <ServicesDescription/>
            <ServicesInfo/>
        </SectionWrapper>
    );
};

export default Services;