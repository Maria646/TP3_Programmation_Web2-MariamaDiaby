import React from 'react'
import { Accordion } from 'react-bootstrap'
import RecetteService from "../services/RecetteService"
import {useQuery} from "@tanstack/react-query"
import {Link, useParams} from "react-router-dom"

const recetteService = new RecetteService();

const Recette = () => {
    const params = useParams();
    const {isError, isLoading, error, data} = useQuery({
        queryKey:["recette", params.identifiant],
        queryFn: () => recetteService.getMeals(params.identifiant),
    })
    console.log(data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>

    return <div>{data && data.meals.map((meal) => {
		return (
			<div key={meal.strCategory}>
                <h1>{meal.strMeal}</h1>
				<h2>{meal.strCategory}</h2>
                <img src={meal.strMealThumb} alt="" />
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ingredients</Accordion.Header>
                            <Accordion.Body>
                                <span>{meal.strInstructions}</span>
                                <p>{meal.strInstructions}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
			</div>
		)
	})}</div>
}

export default Recette