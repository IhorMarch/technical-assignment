import styled from 'styled-components';
import variables from 'common/Variables';


export const Overlay = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1000002;
  

background: rgba(18, 20, 23, 0.50);
`;


export const ModalWrapper = styled.div`
position:fixed;
width: 541px;
height: 752px;
border-radius: 24px;
background: #FFF;
padding:40px;
 z-index:1000001;
`;


export const ImgWrapper = styled.div`
width: 469px;
height: 248px;
border-radius: 24px;
background: #FFF;
margin-bottom:14px;
`;


export const Img = styled.img`
object-fit: cover;
width:100%;
height:248px;
border-radius: 14px;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
`;


export const List = styled.ul`
display:flex;
flex-wrap: wrap;
margin-bottom:4px;

`;
export const TitleBox = styled.div`
display:flex;
justify-content: space-between;
`;
export const Title = styled.li`
color: #121417;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5; 
margin-right:2px;
`;

export const TitleModel = styled.li`
color: #3470FF;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-right:2px;
`;

export const Description = styled.p`
color: #121417;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.42857; /* 150% */

margin-top:14px;

`;

export const TitleBlock = styled.h2`
color: #121417;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.42857; /* 142.857% */
margin-bottom:8px;
margin-top:24px;
`;

export const Item = styled.li`
color: rgba(18, 20, 23, 0.50);

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
max-width: 274px;
overflow: hidden;
text-overflow: ellipsis;

&::after {
content: '|';
margin: 0 6px;
color: rgba(18, 20, 23, 0.10);


}

 &:last-child::after {
    content: none;
     white-space: nowrap;
    }
`;


export const Button = styled.a`
display: flex;
width: 168px;
height: 44px;
padding: 12px 50px;
justify-content: center;
align-items: center;
flex-shrink: 0;
margin-top:24px;
border-radius: 12px;
background: #3470FF;

font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.42857; /* 142.857% */

color: ${variables.whitePrimary};
background-color: ${variables.bluePrimary};
`;


export const ItemConditions = styled.li`
color: #363535;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
letter-spacing: -0.24px;

padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
`;

export const ListConditions = styled.ul`
display:flex;
flex-wrap: wrap;
gap:8px;

  justify-content: flex-start;
  align-items: flex-start;

`;

export const Span = styled.span`
color: #3470FF;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: -0.24px;

`;


export const ButtonClose = styled.button`
 display: flex;
  position:absolute;
  top: 16px;
  right: 16px;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
background-color: #fff; 
border-radius:50%;
&:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
   
`;


