
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #3470FF;;
  }
`;


export const List = styled.ul`
  display: flex;
  padding: 0 15px;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight:500;
  color: black;
  gap: 20px;
`;


