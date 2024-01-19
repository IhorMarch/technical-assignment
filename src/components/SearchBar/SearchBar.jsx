import {Label,Title,Wrapper,Select,Option} from './SearchBar.styled'
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import React, { useState} from 'react';
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
  "Mercedes-Benz",
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

// Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
    
  //   const changeFilter = event => {
  //        event.preventDefault();
  //        dispatch(setStatusFilter(selectedMake));
       
  // }
  

  const handleMakeChange = (event) => {
     const newMake = event.target.value;
    setSelectedMake(newMake);
    dispatch(setStatusFilter(newMake))
  };

  return (
      

<Wrapper>

          <Label>
                <Title>Car brand</Title>
              <Select  value={selectedMake} onChange={handleMakeChange}>
        <Option value="">Enter the text</Option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
        
        <button type="button">
       <svg width={16} height={16}>
          <use href={`${sprite}#shevron-down`} />
        </svg>
      </button>
      </Select >
      
    </Label>
    
    <Label>
 <Title>price/1 hour</Title>
              <Select >
        <Option value="">To $</Option>     
        <button type="button">
       <svg width={16} height={16}>
          <use href={`${sprite}#shevron-down`} />
        </svg>
      </button>
      </Select >
      
      </Label>
      

      
    <Label>
 <Title>Сar mileage / km</Title>
   <div>
          <input
            type="number"
            name="min"
            placeholder="From"
          //   value={mileageRange.min}
          //   onChange={handleMileageChange}
         />
          <span>|</span>
          <input
            type="number"
            name="max"
            placeholder="To"
            // value={mileageRange.max}
            // onChange={handleMileageChange}
          />
      </div>
      </Label>
      
<button>Search</button>

      </Wrapper>


    
    
    )
};