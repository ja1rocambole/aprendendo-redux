//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { FruitCard } from "../../components/FruitCard/indes";
import { StyledFruitCard } from "./style";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <StyledFruitCard>
      {fruits.map((fruits) => (
        <FruitCard
          key={fruits.name}
          nameFruit={fruits.name}
          imgFruit={fruits.img}
        />
      ))}
    </StyledFruitCard>
  );
};

export default FruitsPage;
