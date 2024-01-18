
import { Car } from '../Car/Car';
import { List,Item} from '../CarList/CarList.styled';


export const CarList = ({cars}) => { 

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