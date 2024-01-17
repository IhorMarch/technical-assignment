import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Header, List, StyledLink } from './AppBar.styled'
import { Loader } from '../Loader/Loader'
export const AppBar = () => {

return (
    <Wrapper>
      <Header>
        <List>
          <li>
            <StyledLink to="/" >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" end>
              Movies
            </StyledLink>
          </li>
        </List>
      </Header>
<Suspense fallback={<Loader />}>
      <Outlet />
 </Suspense>
    </Wrapper>
  );






 }
    