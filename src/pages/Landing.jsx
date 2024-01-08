import axios from "axios";
import { useLoaderData, useOutletContext } from "react-router-dom";
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
import CocktailList from "../components/CocktailList";

export async function loader() {
  const searchTerm = "";
  const result = await axios.get(`${url}${searchTerm}`);
  return { drinks: result.data.drinks, searchTerm: searchTerm };
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  const data = useOutletContext();
  console.log(data);

  return (
    <>
      <CocktailList drinks={drinks} searchTerm={searchTerm} />
    </>
  );
}
export default Landing;
