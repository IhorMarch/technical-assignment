import styled from 'styled-components';



export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 116px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 29px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-top:50px;
`;


export const Item = styled.li`



  width: 274px;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;