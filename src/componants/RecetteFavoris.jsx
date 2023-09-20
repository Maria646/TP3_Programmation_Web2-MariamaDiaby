import { useSelector } from "react-redux";
import { recetteFavorisSelectors } from "./storeRecetteFavoris/recetteFavorisSelectors";
import { useEffect } from 'react'
import {useQuery} from "@tanstack/react-query"
import {Link, useParams} from "react-router-dom"
import {favoritesSelectors} from "../favoriteButton/store/favoritesSelectors"

const RecetteFavoris = () => {

  const favorites = useSelector(favoritesSelectors);
  console.log(favorites)

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