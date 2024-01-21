import styled from 'styled-components';
import variables from 'common/Variables';


export const ImgWrapper = styled.div`
position:relative;
`;


export const Img = styled.img`
object-fit: cover;
height:268px;
border-radius: 14px;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
`;


export const List = styled.ul`
display:flex;
flex-wrap: wrap;

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

export const TitlePrice = styled.p`
color: #121417;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
`;

export const BottomBox = styled.div`

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


export const Button = styled.button`
display: flex;
width: 274px;
height: 44px;
padding: 12px 99px;
justify-content: center;
align-items: center;
flex-shrink: 0;

border-radius: 12px;
background: #3470FF;

font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.42857; /* 142.857% */

color: ${variables.whitePrimary};
background-color: ${variables.bluePrimary};
`;



export const ButtonFav = styled.button`
 display: flex;
  position:absolute;
  top: 14px;
  right: 14px;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
background-color: transparent; 
border-radius:50%;
&:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;


export const SvgWrapper = styled.span`
  width: 18px;
  height: 18px;
  color: ${({ isfavorite }) => isfavorite ? 'red' : 'black'};
`;




