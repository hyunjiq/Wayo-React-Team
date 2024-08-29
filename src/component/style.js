import styled from "styled-components";
import { Link } from 'react-router-dom';

//부트스트랩 아이콘
export const Styleicon = styled.i`
    display: inline-block;
    font-family: bootstrap-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -.125em;
    -webkit-font-smoothing: antialiased;
    &::before{
        content:  "${(props) => (props.content ? props.content : '')}";
       
    }
`

// 메인배너

export const Mswiper = styled.div`
 //padding: 160px 0px 84px 68px;
 @media (max-width: 768px) {
       padding: 0;
    }
`;

export const Ptext02 = styled.p`
/* mainbannerText_en */
    color: #3D71FF;
    font-weight: bold;
    font-size: 2.5vw;
    line-height: 1.2;

    @media (max-width: 1200px) {
        font-size: 2.2vw;
        line-height: 1.5;
    }
    @media (max-width: 992px) {
        font-size: 3.2vw;
        //line-height: 1.8rem;

    }
    @media (max-width: 768px) {
        font-size: 5vw
        //line-height: 1rem;
    }
    @media (max-width: 575x) {
        font-size: 5vw
        //line-height: 1rem;
    }
    @media (max-width: 375px) {
        font-size: 6vw
 
    }
`;

export const Ptext03 = styled.p`
/* mainbannerText_kr */

    line-height: 1.5;
    color: #3D71FF;
    font-size: 1.2vw;

    @media (max-width: 1200px) {
        font-size: 1.5vw;
    }
    @media (max-width: 992px) {
        font-size: 
        line-height: 
    }
`;

//사회공헌
export const Socialdiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 12px;
background-color: #b5c9ff;
padding: 0.5rem 1.5rem;
margin-bottom: 13px;
`;

export const Socialul = styled.ul`
list-style: none;
padding-right:0;
padding-left : 0;
`;

export const Sociala = styled.div`
    margin-bottom: 13px;
    background-color: #f7f8fa;
    border-radius: 12px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding-left: 1.5rem;
`;

export const Socialspan01 = styled.span`
font-size: 0.6rem;
`
export const Socialspan02 = styled(Link)`
margin-right:-1.25rem;
font-size: 1rem;
 &:hover{
    text-decoration: underline;
 }
 @media (max-width: 320px){
    font-size: 0.8rem;
 }
`
export const Socialspan03 = styled.span`
padding-right:1.5rem;
padding-bottom:1.5rem;
`


// 스와이퍼 //
export const Swieprdiv01 = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* 검정색에 투명도 조절 */
        z-index: 1;
`
export const Swieprdiv02 = styled.div`
    position: absolute;
        left: 20px;
        bottom: 10px;
        color: white;
        font-size: 1.45rem;   
        z-index: 1;
`


///////// 세현 스타일 컴포넌트 /////////////


export const StyleIcon =styled.i`
    display: inline-block;
    font-family: bootstrap-icons !important;
    font-style: normal;
    font-weight: 400 !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -.125em;
    -webkit-font-smoothing: antialiased;

    &:before{
        content: "${(props) => props.content || 'error'}"
    }
`
export const Msimg = styled.img`
    width:100%;
    border-radius: 12px 12px 0 0;
`

export const Msspan = styled.span`
        text-align: center;
        font-size: 1.45rem;
        color: white;
        background-color: #6a92fe;
        padding: 2.5rem;
        display: block;
        border-radius: 0 0 12px 12px;
`