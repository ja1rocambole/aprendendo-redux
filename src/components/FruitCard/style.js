import styled from "styled-components";

export const StyledFruitCard = styled.li`
  border: solid 2px;
  padding: 6px;

  display: flex;
  justify-content: space-between;

  width: 200px;
  height: 100px;

  p {
    display: flex;
    align-items: end;
    width: 50%;
  }
  img {
    border: solid 1px;
    width: 50%;
  }
`;
