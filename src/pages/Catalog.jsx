// import { SearchBar } from '../components/SearchBar/Searchbar'
import { CarList } from '../components/CarList/CarList';
// import { Loader } from '../components/Loader/Loader';
import { useEffect} from 'react';
import { getCars} from '../redux/selectors';
import { fetchCars} from '../redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../components/LoadMore/LoadMore';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);


// Вызываем операцию
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);


  return (
  
      <div className="container">
        {/* <SearchBar/> */}
      <CarList cars={cars} />
      {/* {cars.length > 0 && cars.length >this.state.perPage&&this.state.page<=this.state.allpages  && <Button onClick={this.handleLoadMore} />} */}
      
     <Button/>
    
    </div>
    
  );
};
export default Catalog;