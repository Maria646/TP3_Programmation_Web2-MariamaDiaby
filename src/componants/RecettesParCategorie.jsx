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
    console.log(data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>

    return <div>{data && data.meals.map((meal) => {
		return (
			<div key={meal.strMeal}>
                <img src={meal.strMealThumb} alt="" />
                <Link to={`/${meal.strMeal}`}>
				<h2>{meal.strMeal}</h2>
                </Link>
			</div>
		)
	})}</div>
}

export default RecettesParCategorie