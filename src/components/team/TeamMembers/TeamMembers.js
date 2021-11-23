import React from 'react';
import Member from "./Member/Member";
import first from '../../../common/img/1.png'
import second from '../../../common/img/2.png'
import third from '../../../common/img/3.png'
import fourth from '../../../common/img/4.png'
import {Row, RowSeparator, Wrapper} from "../../../common/styles";


const TeamMembers = () => {
    return (
        <Wrapper justifyContent={'center'}>
            <Row>
                <Member key={5} photo={first} memberName={'PAUL TORRES'} memberPosition={'CEO'}/>
                <Member key={6} photo={second} memberName={'JOSEPH ANDERSON'} memberPosition={'Web-Designer'}/>
            </Row>
            <RowSeparator/>
            <Row>
                <Member key={7} photo={third} memberName={'SCOLARA VISARI'} memberPosition={'Web-Developer'}/>
                <Member key={8} photo={fourth} memberName={'JOHN MOUNTY'} memberPosition={'Web-Developer'}/>
            </Row>
        </Wrapper>
    );
};

export default TeamMembers;