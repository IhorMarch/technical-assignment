// import { SearchBar } from '../components/SearchBar/Searchbar'
import { Carlist } from '../components/CarList/CarList';
import { Loader } from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Catalog = () => {
  return (
  
      <div className="container">
        {/* <SearchBar/> */}
        <Carlist/>
      </div>
    
  );
};
export default Catalog;