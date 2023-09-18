import { useSelector } from "react-redux";
import { recetteFavorisSelectors } from "./storeRecetteFavoris/recetteFavorisSelectors";
import {useQuery} from "@tanstack/react-query"
import {Link, useParams} from "react-router-dom"
import { useDispatch } from "react-redux"
import RecetteService from "../services/RecetteService"

const recetteService = new RecetteService();

const RecetteFavoris = () => {
  const params = useParams();
  const {isError, isLoading, error, data} = useQuery({
      queryKey:["recette", params.identifiant],
      queryFn: () => recetteService.getMeals(params.identifiant),
  })

  console.log(data)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Liste de toutes les recettes favorites</h1>
      {favorites.map((recette) => (
        <div key={recette}>{recette.strMeal}</div>
      ))}
    </div>
  );
};

export default RecetteFavoris;