import { LoadBtn} from '../LoadMore/LoadMore.styled';
export const Button = ({ onClick }) => {

  return (
   <LoadBtn type="submit" onClick={onClick} >Load more</LoadBtn>
  );
};