import styled from "styled-components";

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
export const Mainswiper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Mswiper = styled.div`
 padding: 160px 48px 84px 73px;
`;


export const Ptext02 = styled.p`
/* mainbannerText_en */
    font-family: Quicksand;
    line-height: 50px;
    color: #3D71FF;
    font-weight: bold;
    font-size: 3rem;
`;

export const Ptext03 = styled.p`
/* mainbannerText_kr */
    font-family: Noto+Sans+KR;
    line-height: 20px;
    color: #3D71FF;
    font-size: 20px;
`;




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