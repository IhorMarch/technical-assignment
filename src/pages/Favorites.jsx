

import { CarList } from '../components/CarList/CarList';
// import { Loader } from '../components/Loader/Loader';
import { getFavorites} from '../redux/selectors';
import { useSelector } from "react-redux";



const Favorites = () => {

  const cars = useSelector(getFavorites);


  return (
  <>
      <h2 style={{ margin: '50px 0' }}> Your favorist cars</h2>
      
  <CarList cars={cars}/>
     
    </>
  );
};
export default Favorites;