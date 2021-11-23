import React from 'react';
import styled from "styled-components";

const MemberWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1035px) {
    align-items: center;
  }
`

const MemberHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1035px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const MemberTitle = styled.div`
  text-align: right;

  h2 {
    font-size: 14px;
  }

  @media screen and (max-width: 1035px) {
    text-align: center;
  }
`

const Avatar = styled.img`
  width: 90px;
  border-radius: 50%;
  margin-left: 10px;
  @media screen and (max-width: 1035px) {
    margin-top: 20px;
    width: 50%;
  }
`

const About = styled.p`
  text-align: right;
  font-size: 13px;
  word-spacing: 1px;
  line-height: 25px;
  margin-top: 30px;
  width: 80%;
  @media screen and (max-width: 1035px) {
    text-align: center;
  }
`

const Member = (props) => {
    return (
        <MemberWrapper>
            <MemberHeader>
                <MemberTitle>
                    <h2>{props.memberName}</h2>
                    <span>{props.memberPosition}</span>
                </MemberTitle>
                <Avatar alt={'MemberPhoto'} src={props.photo}/>
            </MemberHeader>
            <About>
                We don't want to conquer the cosmos, we simply want to extend the boundaries of
                Earth to the frontiers of the cosmos.
            </About>
        </MemberWrapper>
    );
};

export default Member;