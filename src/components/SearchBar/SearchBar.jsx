import {Label,Title} from './SearchBar.styled'
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import React, { useState} from 'react';


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
    
    const changeFilter = event => {
         event.preventDefault();
         dispatch(setStatusFilter(selectedMake));
       
  }
  

   const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  return (
      



          <Label>
                <Title>Car brand</Title>
              <select  value={selectedMake} onChange={handleMakeChange}>
        <option value="">All Makes</option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select >
      <button type="button" onClick={changeFilter}>
        Apply Filter
      </button>
            </Label>
 
    )
};