import {Option,Title,SelectBrands,Wrapper,Svg,Select,InputLeft,InputRight,Button,SelectedOption} from './SearchBar.styled'
import { useDispatch } from "react-redux";
import { setMakeFilter  } from "../../redux/filterSlice";
import React, { useState } from 'react';
import { fetchFiltredCars} from '../../redux/operations';
import sprite from '../../images/symbol-defs.svg';
// import Select from 'react-select';
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

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     borderRadius: '14px',
//     alignItems: 'center',
//     // padding: '14px 89px 14px 18px',
//     justifyContent: 'center',
//     background: '#F7F7FB',
//     border: '1px solid #F7F7FB',
//     width:'224px',
//     height:'48px'
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     color: state.isSelected ? 'white' : '#121417',
//     fontSize: '18px',
//     fontWeight: '500',
//     lineHeight: '1.1111',
//     backgroundColor: state.isSelected ? '#3470FF' : 'transparent',
//   }),
// };
export const SearchBar = () =>{


  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
    
  //   const changeFilter = event => {
  //        event.preventDefault();
  //        dispatch(setStatusFilter(selectedMake));
       
  // }
  

  const handleMakeChange = (event) => {
     const newMake = event.target.value;
    setSelectedMake(newMake);
    // dispatch(setStatusFilter(newMake))
  };

  const handleSearchClick = () => {
    dispatch(setMakeFilter(selectedMake));
    dispatch(fetchFiltredCars());
};
  return (
      

<Wrapper>

        <div>
        <Title>Car brand</Title>
        
        {/* <Select
          styles={customStyles}
          options={[
            { label: 'Enter the text', value: '' },
            ...makes.map(make => ({ label: make, value: make }))
          ]}
          onChange={handleMakeChange}
          isSearchable
        /> */}
        

 
<SelectBrands value={selectedMake} onChange={handleMakeChange}>
          <SelectedOption value="">Enter the text </SelectedOption>
           
        {makes.map((make) => (
          <Option key={make} value={make}>
            {make} 
          </Option> 

        ))}
        {/* <Svg style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} width={16} height={16}>
          <use href={`${sprite}#chevron-down`} />
        </Svg> */}
        </SelectBrands > 
        
      </div>

      <div>
    <Title>price/1 hour</Title>
    
   
        <Select>
        <Option value="">To $</Option>     
        {/* <button type="button">
       <svg width={16} height={16}>
          <use href={`${sprite}#shevron-down`} />
        </svg>
      </button> */}
      </Select>
      </div>

      

      
    <div>
 <Title>Сar mileage / km</Title>
   <div>
          <InputLeft
            type="number"
            name="min"
            placeholder="From"
          //   value={mileageRange.min}
          //   onChange={handleMileageChange}
         />
      
          <InputRight
            // type="number"
            name="max"
            placeholder="To"
            // value={mileageRange.max}
            // onChange={handleMileageChange}
          />
      </div>
      </div>
      
<Button onClick={handleSearchClick}>Search</Button>

      </Wrapper>


    
    
    )
};