import {
  Option, Title, SelectBrands, Wrapper, InputLeft,Select,
  InputRight, Button, SelectedOption,WrapperSelect,ArrowIcon
} from './SearchBar.styled'
import { useDispatch } from "react-redux";
import { setMakeFilter  } from "../../redux/filterSlice";
import React, { useState } from 'react';
import { fetchFiltredCars } from '../../redux/operations';

import sprite from '../../images/symbol-defs.svg';


const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"
]

export const SearchBar = () =>{


  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
    

  

  const handleMakeChange = (newMake) => {


    setSelectedMake(newMake);
   
  };

  const handleSearchClick = () => {
    dispatch(setMakeFilter(selectedMake));
    dispatch(fetchFiltredCars());
};
  return (
      

<Wrapper>

      <div>
        

        <Title>Car brand</Title>     

 <WrapperSelect>
          <SelectBrands
            id="make" name="make"
            className="custom-select"
            value={selectedMake}
            onChange={(e) => handleMakeChange(e.target.value)}>
          <SelectedOption value="">All cars </SelectedOption>
           
        {makes.map((make) => (
          <Option key={make} value={make}>
            {make} 
          </Option> 

        ))}
     
          </SelectBrands > 
           <ArrowIcon >
                <use href={`${sprite}#chevron-down`} />
          </ArrowIcon>
        </WrapperSelect>



      </div>

      <div>
    <Title>price/1 hour</Title>
    
    <WrapperSelect>
        <Select>
        <Option value="">To $</Option>     
        
          </Select>
        <ArrowIcon >
                <use href={`${sprite}#chevron-down`} />
          </ArrowIcon>
        </WrapperSelect>
      </div>

      

      
    <div>
 <Title>Сar mileage / km</Title>
   <div>
          <InputLeft
         
            placeholder="From"
       
         />
      
          <InputRight
   
            placeholder="To"
       
          />
      </div>
      </div>
      
<Button onClick={handleSearchClick}>Search</Button>

      </Wrapper>


    
    
    )
};