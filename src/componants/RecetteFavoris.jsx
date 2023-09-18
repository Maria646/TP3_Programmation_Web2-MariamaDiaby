import { useSelector } from "react-redux";
import { recetteFavorisSelectors } from "./storeRecetteFavoris/recetteFavorisSelectors";

const RecetteFavoris = () => {
  const favorites = useSelector(recetteFavorisSelectors);

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