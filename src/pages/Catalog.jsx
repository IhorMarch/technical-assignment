import { SearchBar } from '../components/SearchBar/SearchBar'
import { CarList } from '../components/CarList/CarList';
// import { Loader } from '../components/Loader/Loader';
import { useEffect} from 'react';
import { getCars,getPage,getStatusFilter} from '../redux/selectors';
import { fetchCars,handleLoadMoreAction,fetchFiltredCars} from '../redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../components/LoadMore/LoadMore';





//     const getVisibleCars = (statusFilter,dispatch) => { 
//       if (statusFilter === "") {
//         fetchCars();
//       return
        
// }
//       else {
//         dispatch(fetchFiltredCars());
       
//  }

//     return cars

//   };

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const page = useSelector(getPage);
  const statusFilter = useSelector(getStatusFilter)

  // const visiblecars = getVisibleCars(cars, statusFilter,dispatch);

  const perPage = 12;
  const loadMoreDisabled = cars.length >= perPage * page;
 
  
useEffect(() => {
       if (cars.length === 0) {
      dispatch(fetchCars());
    }
   
}, [dispatch, cars]);
  

  const handleLoadMore = () => {
 dispatch(handleLoadMoreAction());
  dispatch(fetchCars());
};


  return (
  <>
    
  <SearchBar/>
  <CarList cars={cars}/>
      {loadMoreDisabled &&  (
  <Button onClick={handleLoadMore}/>
     )}

    </>
  );
};
export default Catalog;