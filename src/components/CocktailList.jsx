import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

function CocktailList({ drinks, searchTerm }) {
  if (!drinks) {
    return <h4>Drinks doesn't exist!</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
}
export default CocktailList;
