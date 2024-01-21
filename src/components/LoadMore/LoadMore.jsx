import { LoadBtn,Wrapper} from '../LoadMore/LoadMore.styled';
export const Button = ({ onClick }) => {

  return (
    <Wrapper>
      <LoadBtn type="submit" onClick={onClick} >Load more</LoadBtn>
    </Wrapper>
  );
};