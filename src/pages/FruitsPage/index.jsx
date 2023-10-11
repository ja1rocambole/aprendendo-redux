//importando useSelector do react-redux
import { useDispatch, useSelector } from "react-redux";
import { FruitCard } from "../../components/FruitCard/indes";
import { StyledFruitCard } from "./style";
import { useState } from "react";
import { addFruit } from "../../store/modules/fruits/actions";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();

  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <StyledFruitCard>
      {fruits.map((fruits) => (
        <FruitCard
          key={fruits.name}
          nameFruit={fruits.name}
          imgFruit={fruits.img}
        />
      ))}

      <input onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adicionar fruta</button>
    </StyledFruitCard>
  );
};

export default FruitsPage;
