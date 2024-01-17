
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


export const Wrapper = styled.div`


  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
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
  padding: 0 15px;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 800;
  color: black
`;

export const List = styled.ul`
  display: flex;

  gap: 20px;
`;