import { SearchBar } from '../components/SearchBar/SearchBar'
import { CarList } from '../components/CarList/CarList';
// import { Loader } from '../components/Loader/Loader';
import { useEffect} from 'react';
import { getCars,getPage,getStatusFilter} from '../redux/selectors';
import { fetchCars,handleLoadMoreAction} from '../redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../components/LoadMore/LoadMore';


    const getVisibleCars = (cars, statusFilter) => { 

 

    return cars.filter(car => 
      car.make.includes(statusFilter)
      );

  };

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const page = useSelector(getPage);
  const statusFilter = useSelector(getStatusFilter)

  const visiblecars = getVisibleCars(cars, statusFilter);
console.log(visiblecars.id);
  const perPage = 12;
  const loadMoreDisabled = cars.length >= perPage * page;
 
  

  useEffect(() => {
       if (cars.length === 0) {
      dispatch(fetchCars());
    }
   
  }, [dispatch,cars]);

  const handleLoadMore = () => {
 dispatch(handleLoadMoreAction());
  dispatch(fetchCars());
};


  return (
  
    <div className="container">
  <SearchBar/>
  <CarList cars={visiblecars}/>
      {loadMoreDisabled &&  (
  <Button onClick={handleLoadMore}/>
     )}
    </div>
    
  );
};
export default Catalog;