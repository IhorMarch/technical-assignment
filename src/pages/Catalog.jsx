import { SearchBar } from '../components/SearchBar/SearchBar'
import { CarList } from '../components/CarList/CarList';
// import { Loader } from '../components/Loader/Loader';
import { useEffect} from 'react';
import { getCars,getPage} from '../redux/selectors';
import { fetchCars, handleLoadMoreAction } from '../redux/operations';

import { useDispatch, useSelector } from "react-redux";
import { Button } from '../components/LoadMore/LoadMore';



  const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const page = useSelector(getPage);


  const perPage = 12;
  const loadMoreDisabled = cars.length >= perPage * page;

 
  
useEffect(() => {

  const isPageReloaded = localStorage.getItem('isPageReloaded');

       if (isPageReloaded === 'true'||cars.length===0) {
      dispatch(fetchCars());
    }
  localStorage.setItem('isPageReloaded', 'false');

}, [dispatch,cars]);
  

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('isPageReloaded', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLoadMore = () => {
 dispatch(handleLoadMoreAction());
  dispatch(fetchCars());
};


  return (
  <>
    
  <SearchBar/>
      <CarList cars={cars} />

      {loadMoreDisabled &&  (
  <Button onClick={handleLoadMore}/>
     )}

    </>
  );
};
export default Catalog;