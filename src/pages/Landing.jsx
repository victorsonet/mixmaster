import axios from "axios";
import { useLoaderData } from "react-router-dom";
const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const result = await axios.get(`${cocktailUrl}${searchTerm}`);
      return result.data.drinks;
    },
  };
};

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  return { searchTerm: searchTerm };
}

function Landing() {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
