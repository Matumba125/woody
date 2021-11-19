import React from 'react';
import style from './Member.module.css'

const Member = (props) => {
    return (
        <div className={style.memberWrapper}>
            <div className={style.memberHeader}>
                <div className={style.memberTitle}>
                    <h2>{props.memberName}</h2>
                    <span>{props.memberPosition}</span>
                </div>
                <img alt={'MemberPhoto'} className={style.photo} src={props.photo}/>
            </div>
                <p className={style.about}>We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.</p>
            <div>

            </div>
        </div>
    );
};

export default Member;