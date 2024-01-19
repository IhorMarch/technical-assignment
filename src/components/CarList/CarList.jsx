
import { Car } from '../Car/Car';
import { List,Item} from '../CarList/CarList.styled';


export const CarList = ({cars}) => { 

  return (
    <List>
          {cars.map((car, index) => (   
    <Item key={`${car.id}-${index}`}> 
                  <Car car={car} />
              </Item>    
      ))}

    </List>
  );
};