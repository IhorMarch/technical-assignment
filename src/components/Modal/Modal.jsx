import { Overlay,ImgWrapper,
  Img,
  TitleBox,
  Title,
  TitleModel,
  Item,
  Button,
  TitlePrice,
  List,  ModalWrapper } from './Modal.styled'

import { useEffect, } from 'react';


export const CarModal = ({ onClose, car }) => { 
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

 
  const { id, make, model, year, img, rentalPrice, address, rentalCompany, type, accessories, fuelConsumption, description, functionalities, rentalConditions, mileage } = car;
   const cutedAddress = address ? address.split(/, |,|,/) : [];
  useEffect(() => { 
    const handleKeyDown = event => {
    if (event.code === 'Escape') {
     onClose();
    }
  };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    }
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
      
    <Overlay onClick={handleBackdropClick} closeModal={onClose}>
      <ModalWrapper>
        
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
     

      <Button  >Rental care</Button>
         </ModalWrapper>
            </Overlay>)
           
           

}