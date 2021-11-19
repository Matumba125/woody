import React from 'react';
import style from "./TeamMembers.module.css";
import Member from "./Member/Member";
import first from '../../../common/img/1.png'
import second from '../../../common/img/2.png'
import third from '../../../common/img/3.png'
import fourth from '../../../common/img/4.png'


const TeamMembers = () => {
    return (
        <div className={style.contentWrapper}>
            <div className={style.row}>
                <Member key={5} photo={first} memberName={'PAUL TORRES'} memberPosition={'CEO'}/>
                <Member key={6} photo={second} memberName={'JOSEPH ANDERSON'} memberPosition={'Web-Designer'}/>
            </div>
            <div className={style.separator}/>
            <div className={style.row}>
                <Member key={7} photo={third} memberName={'SCOLARA VISARI'} memberPosition={'Web-Developer'}/>
                <Member key={8} photo={fourth} memberName={'JOHN MOUNTY'} memberPosition={'Web-Developer'}/>
            </div>
        </div>
    );
};

export default TeamMembers;