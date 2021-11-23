import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1035px){
    flex-direction: ${props => props.mediaDirection};
  }
`

export const Wrapper = styled.div`
  width: 50%;
  background: url(${props => props.background}) center;
  background-size: cover;
  padding: 150px 80px !important;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  @media screen and (max-width: 1035px) {
    width: 100%;
    padding: 150px 20px !important;
    height: auto;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: ${props => props.alignItems};

  h2 {
    color: #FFFFFF;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 0;
    font-style: normal;
    font-size: 18px;
  }
;
`

export const Separator = styled.span`
  margin: 12px auto;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 18px;
`

export const Arrow = styled.span`
  font-size: 1.3em;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: ${props => props.direction};
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1035px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const RowSeparator = styled.div`
  margin: 25px 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #EEEEEF;
`