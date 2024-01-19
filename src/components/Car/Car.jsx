
import {
  ImgWrapper,
  Img,
  TitleBox,
  Title,
  TitleModel,
  Item,
  Button,
  TitlePrice,
  List,
} from '../Car/Car.styled';




export const Car = ({ car }) => {
  
  const { id, make, model, year, img, rentalPrice,address,rentalCompany,type,accessories } = car;
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

  const cutedAddress = address ? address.split(/, |,|,/):[]
  //  const accessoriesContent = accessories[2].length > 20 ? accessories[2].slice(0, 25) + '...' : accessories[2];
  return (
    
           <div>
                <ImgWrapper>
        <Img  
                src={img ? img : defaultImg}
                  
                    alt={`${make} car`}
                  
                  />    
                </ImgWrapper>

        <TitleBox>
         
            <List>
          <Title>{make}</Title>
          <TitleModel> {model},</TitleModel>
          <Title>{year}</Title>
            </List>
        
            <TitlePrice>{rentalPrice}</TitlePrice>
        </TitleBox>

      
          <List>

            <Item>{cutedAddress[1]}</Item>
            <Item>{cutedAddress[2]}</Item>
            <Item> {rentalCompany}</Item>
            </List>
             <List>
            <Item>{type}</Item>
            <Item>{model}</Item>
            <Item>{id}</Item>
            <Item>{accessories[2]}</Item>
          
          </List>
     

      <Button>Learn more</Button>
              </div>
 
  );
};