import React from 'react'
import RecetteService from "../services/RecetteService"
import {useQuery} from "@tanstack/react-query"
import {Link, useParams} from "react-router-dom"

const recetteService = new RecetteService();

const RecettesParCategorie = () => {
  const params = useParams();
    const {isError, isLoading, error, data} = useQuery({
        queryKey:["recettesParCategories",  params.nameCategorie],
        queryFn: () => recetteService.getAllMealsByCategories(params.nameCategorie),
    })

    const { isLoading: isLoadingCategories, 
      data: dataListCategories, 
      isError: isErrorCategories, 
      error: errorCategories } = useQuery({
      queryKey:["categories", params.categories],
      queryFn: () => recetteService.getAllCategoriesMeals(),
  })


  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>{error.message}</div>
  if(isLoadingCategories) return <div>Loading...</div>
  if(isErrorCategories) return <div>{error.message}</div>

    return <div>{data && data.meals.map((meal) => {
		return (
			<div key={meal.strMeal}>
                <Link to={`recette/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt="" />
                  <h2>{meal.strMeal}</h2>
                </Link>
          <div>
            <Link to={`/categories`}>Retour categorie</Link>
          </div>
			</div>
      )
	})}
  </div>
}

export default RecettesParCategorie