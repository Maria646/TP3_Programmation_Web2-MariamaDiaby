import React from 'react'
import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'
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
    const { isLoading: isLoadingCategories, 
        data: dataListCategories, 
        isError: isErrorCategories, 
        error: errorCategories } = useQuery({
        queryKey:["categories", params.categories],
        queryFn: () => recetteService.getAllCategoriesMeals(),
    })


    console.log(data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>
    if(isLoadingCategories) return <div>Loading...</div>
    if(isErrorCategories) return <div>{error.message}</div>

    const ingredients = [];
    const mesures = [];

    for (let i = 1; i < 21; i++){
        if(data.meals[0][`strIngredient${i}`] === "") break;
        ingredients.push(data.meals[0][`strIngredient${i}`]);
        mesures.push(data.meals[0][`strMeasure${i}`]);
    }

    console.log(ingredients, mesures)


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
                            <ListGroup>
                                {ingredients.map((ingredient, index) => (
                                    <ListGroupItem key={index}>
                                    {mesures[index] + " " + ingredient}
                                    </ListGroupItem>
                                   ))}
                            </ListGroup>
                                <p>{meal.strInstructions}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                <div>
                    <Link to={`/categories`}>Retour categorie</Link>
                </div>
			</div>
		)
	})
    }
    </div>
}

export default Recette