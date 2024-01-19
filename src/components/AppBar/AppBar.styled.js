
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


export const Wrapper = styled.div`


  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const Header = styled.header`
  
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