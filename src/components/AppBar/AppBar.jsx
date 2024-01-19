import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, List, StyledLink } from './AppBar.styled'
import { Loader } from '../Loader/Loader'



export const AppBar = () => {

return (
     <header>
        <List>
          <li>
            <StyledLink to="/" >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog" end>
              Catalog
            </StyledLink>
                </li>
                
                  <li>
            <StyledLink to="/favorites" end>
              Favorites
            </StyledLink>
          </li>
        </List>
       
     
<Suspense fallback={<Loader />}>
      <Outlet />
 </Suspense>

  </header>
  );


 }
    