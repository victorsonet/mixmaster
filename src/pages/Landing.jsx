import axios from "axios";
import { useLoaderData } from "react-router-dom";
const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const result = await axios.get(`${cocktailUrl}${searchTerm}`);
  return { drinks: result.data.drinks, searchTerm: searchTerm };
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
