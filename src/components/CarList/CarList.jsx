import { getCars } from '../../redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import { Car } from '../Car/Car';
import { List,Item} from '../CarList/CarList.styled';

export const Carlist = () => { 

   // Получаем ссылку на функцию отправки экшенов
 const cars = useSelector(getCars);
   console.log(cars);
  return (
    <List>
          {cars.map(car => (   
    <Item key={car.id}> 
                  <Car car={car} />
              </Item>    
      ))}

    </List>
  );





};