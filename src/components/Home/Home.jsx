

import {
  Title,
  Section,
  StyledLink,
  Wrapper
 
} from "./Home.styled";


const Home = () => {
  return (

        <Section >
     <Wrapper>
          <Title >Effective Solutions for Your Trip</Title>
          <StyledLink to="/catalog" end>
            Order Service
          </StyledLink>
    </Wrapper>
      </Section>
     
    
  );
};
export default Home;
