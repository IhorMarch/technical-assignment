import { Overlay,ImgWrapper,
  Img,
  TitleBox,
  Title,
  TitleModel,
  Item,
  Button,
 TitleBlock,
  Description,
  List,  ModalWrapper,ItemConditions, ListConditions,Span,ButtonClose } from './Modal.styled'

import { useEffect, } from 'react';
import sprite from '../../images/symbol-defs.svg';

export const CarModal = ({ onClose, car }) => { 
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

 
  const { id, make, model, year, img, rentalPrice, address, type, accessories, fuelConsumption, description, functionalities, rentalConditions, mileage,engineSize } = car;
  const cutedAddress = address ? address.split(/, |,|,/) : [];
  const cutedСConditions = rentalConditions ? rentalConditions.split('\n') : [];
  const minAge = cutedСConditions[0].split(':')
  const PhoneNumber = '+380730000000';


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
   const handleClose = () => {

    onClose();
    
  };

  return (
      
    <Overlay onClick={handleBackdropClick} >
      <ModalWrapper>
       
            <ButtonClose onClick={handleClose}>
           {" "}
              <svg width={12} height={12} stroke="#121417">
                <use href={`${sprite}#icon-cross`} />
          </svg>
   
            </ButtonClose>
        
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
          <Item> Id: {id}</Item>
          <Item> Year: {year}</Item>
          <Item>Type:{type}</Item>
            </List>
             <List>
            <Item>Fuel Consumption{fuelConsumption}</Item>
            <Item>Engine Size:{engineSize}</Item>
        </List>
        <Description>{description}</Description>
        <div>
         <TitleBlock>Accessories and functionalities:</TitleBlock>
            <List>

            <Item>{accessories[0]}</Item>
            <Item>{accessories[1]}</Item>
            <Item>{accessories[2]}</Item>
            </List>
             <List>
             <Item>{functionalities[0]}</Item>
             <Item>{functionalities[1]}</Item>
             <Item>{functionalities[2]}</Item>
        </List>

        </div>

            <div>
         <TitleBlock>Rental Conditions:</TitleBlock>
            <ListConditions>

            <ItemConditions>{minAge[0]}:<Span>{minAge[1]}</Span></ItemConditions>
            <ItemConditions>{cutedСConditions[1]}</ItemConditions>
          </ListConditions>
              <ListConditions>
            <ItemConditions>{cutedСConditions[2]}</ItemConditions>
            <ItemConditions>Mileage: <Span>{mileage.toLocaleString('en-US')}</Span></ItemConditions>
            <ItemConditions>Price: <Span>{rentalPrice}</Span></ItemConditions>
            </ListConditions>
            
        </div>
     

      <Button href={`tel:${PhoneNumber}`} >Rental car</Button>
         </ModalWrapper>
            </Overlay>)
           
           

}