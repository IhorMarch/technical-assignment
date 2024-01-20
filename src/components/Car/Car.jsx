
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

import { CarModal } from '../Modal/Modal'

import React, { useState} from "react";


export const Car = ({ car }) => {
  
  const { id, make, model, year, img, rentalPrice,address,rentalCompany,type,accessories } = car;
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

  const cutedAddress = address ? address.split(/, |,|,/) : [];

    const [modalActive, setModalActive] = useState(false);

     const handleCarClick = () => {
    
    setModalActive(true);

  };

    const handleModalClose = () => {
    setModalActive(false);
  };
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
     

      <Button onClick={handleCarClick} >Learn more</Button>
         

      {modalActive && (
        <CarModal car={car} onClose ={handleModalClose}>
        </CarModal>
      )}
    
 </div>
  );
};