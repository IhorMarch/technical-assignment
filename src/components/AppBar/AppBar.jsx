import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, List, StyledLink } from './AppBar.styled'
import { Loader } from '../Loader/Loader'



export const AppBar = () => {

return (
    
      <Header>
        <div className="container">
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
        </div>
     
<Suspense fallback={<Loader />}>
      <Outlet />
 </Suspense>
     </Header>
  );


 }
    