import styled from 'styled-components';




export const Label = styled.label`
  

  margin-bottom: 16px;
    margin:auto;
  font-size: 20px;
  border-radius: 0px 14px 14px 0px;
`;


export const Title= styled.h2`
color: #8A8A89;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.28571; /* 128.571% */
margin-bottom:8px;
`;
export const Wrapper= styled.div`
display:flex;
align-items: flex-end;
justify-content: center;
gap: 18px;
margin-bottom:50px;
margin-top:50px;
`;

export const Select= styled.select`
border-radius: 14px;
align-items: center;
padding: 14px 18px;
justify-content: center;
align-items: center;
background: #F7F7FB;
border:#F7F7FB;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.1111; /* 111.111% */
width:160px;
height:48px;
`;
export const SelectBrands = styled.select`
position:relative;
border-radius: 14px;
align-items: center;
padding: 14px ;
justify-content: center;
align-items: center;
background: #F7F7FB;
border:#F7F7FB;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.1111; /* 111.111% */
width:224px;
height:48px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const Svg = styled.svg`
  fill: black;
z-index: 1000;
`;


export const Option= styled.option`
color: #121417;
color: tomato;
font-size: 18px;
font-weight: 500;
line-height: 1.11111; /* 111.111% */
 
`;


export const SelectedOption= styled.option`
width:15px;
color: tomato;
font-size: 18px;
font-weight: 500;
line-height: 1.11111; /* 111.111% */
 
`;
export const InputLeft= styled.input`

align-items: center;

padding: 14px 89px 14px 18px;
justify-content: center;
align-items: center;
background: #F7F7FB;
border-radius: 14px 0px 0px 14px;
border-right: 1px solid rgba(138, 138, 137, 0.20);
border: #F7F7FB;
border-right: 1px solid rgba(138, 138, 137, 0.20);
background: #F7F7FB;

width:160px;
height:48px;
`;


export const InputRight= styled.input`

align-items: center;
padding: 14px 115px 14px 24px;
justify-content: center;
align-items: center;
background: #F7F7FB;
border-radius: 0px 14px 14px 0px;
border-left: 1px solid rgba(138, 138, 137, 0.20);
background: #F7F7FB;
border: #F7F7FB;
border-left: 1px solid rgba(138, 138, 137, 0.20);
width:160px;
height:48px;
`;


export const Button= styled.button`

width: 136px;
height: 48px;
padding: 14px 44px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 12px;
background: #3470FF;
width:136px;
height:48px;
color: white;
`;

