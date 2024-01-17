

import styled from 'styled-components';
import variables from 'common/Variables';
import backgroundImg from '../../images/car.jpg';
import backgroundImg2x from '../../images/car2@2.jpg';
import { NavLink} from 'react-router-dom';

export const Section = styled.section`
background-color: ${variables.blackPrimary};
max-width: 428px;
height: 432px;
text-align: center;
padding-top: 120px;
padding-bottom: 120px;
margin-left: auto;
margin-right: auto;
background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
url(${backgroundImg});
background-repeat: no-repeat;
background-position: center;
 background-size: cover;

@media screen and (min-device-pixel-ratio: 2),
screen and (min-resolution: 192dpi),
screen and (min-resolution: 2dppx){
        background-image: url(${backgroundImg2x});
      }

`;

export const Title = styled.h1`
font-weight: 500;
font-size: 26px;
line-height: 1.11;
text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;            
color: ${variables.whitePrimary};
margin-bottom: 72px;
max-width: 320px;
height: 80px; 
margin-left: auto;
margin-right: auto;

`;

export const Wrapper = styled.div`
margin: 0 auto;
height:432px;
    width: 100%;
    max-width: 428px;
    padding-left: 16px;
    padding-right: 16px;

`;

export const StyledLink = styled(NavLink)`
color: ${variables.whitePrimary};
background-color: ${variables.bluePrimary};
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
background: ${variables.bluePrimary};
padding: 16px 32px;
border-color: transparent;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 4px;

&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

`;
