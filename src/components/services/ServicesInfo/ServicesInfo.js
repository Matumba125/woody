import React from 'react'
import InfoItem from "./InfoItem/InfoItem";
import {faBullhorn, faCode, faLaptop} from "@fortawesome/free-solid-svg-icons";
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {Row, RowSeparator, Wrapper} from "../../../common/styles";


const ServicesInfo = () => {

    return (
        <Wrapper background={''} justifyContent={'center'}>
            <Row>
                <InfoItem key={1} icon={faLaptop} title={'INNOVATIVE IDEAS'}/>
                <InfoItem key={2} icon={faCode} title={'CLEAN CODE'}/>
            </Row>
            <RowSeparator/>
            <Row>
                <InfoItem key={3} icon={faBullhorn} title={'24/7 SUPPORT'}/>
                <InfoItem key={4} icon={faHtml5} title={'HTML5'}/>
            </Row>
        </Wrapper>
    );
};

export default ServicesInfo;