
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
  ButtonFav,
  SvgWrapper
 
} from '../Car/Car.styled';
import { useDispatch, useSelector } from 'react-redux';
import { CarModal } from '../Modal/Modal'
import { toggleFavorite} from '../../redux/carsSlice'
import sprite from '../../images/symbol-defs.svg';
import React, { useState} from "react";
import { getFavorites} from '../../redux/selectors';

export const Car = ({ car }) => {

  const { id, make, model, year, img, rentalPrice,address,rentalCompany,type,accessories } = car;
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  const cutedAddress = address ? address.split(/, |,|,/) : [];
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  
  const isFavorite = favorites.some(favCar => favCar.id === id);
  console.log(isFavorite);
     const handleCarClick = () => {
    
    setModalActive(true);

  };

    const handleModalClose = () => {
    setModalActive(false);
  };
  
const handleFavoriteClick = () => {
  dispatch(toggleFavorite(car));
  };


  return (
    
    <div>
      
      <ImgWrapper>
        <ButtonFav onClick={handleFavoriteClick} isfavorite={isFavorite}  >
          <SvgWrapper isfavorite={isFavorite}>
              <svg width={18} height={18} >
                <use href={`${sprite}#${isFavorite ? 'active' : 'normal'}`} />
          </svg>
          </SvgWrapper>
        </ButtonFav>
        
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