import { StyledFruitCard } from "./style";

export const FruitCard = ({ nameFruit, imgFruit }) => {
  return (
    <StyledFruitCard>
      <p>{nameFruit}</p>
      <img src={imgFruit} alt={nameFruit} />
    </StyledFruitCard>
  );
};
