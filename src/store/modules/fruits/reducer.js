//
import Banana from "../../../assets/Banana.png";
import Apple from "../../../assets/Apple.png";
import Strawberry from "../../../assets/Strawberry.png";

const initialState = [
  { name: "Banana", img: Banana },
  { name: "Maçã", img: Apple },
  { name: "Morango", img: Strawberry },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
