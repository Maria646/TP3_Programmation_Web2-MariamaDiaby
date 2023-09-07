import React from 'react'
import RecetteService from "../services/RecetteService"
import { Container, Row } from 'react-bootstrap'
import {useQuery} from "@tanstack/react-query"
import {Link} from "react-router-dom"

const recetteService = new RecetteService();

const CategorieDeRecette = () => {
    const {isError, isLoading, error, data} = useQuery({
        queryKey:["categories"],
        queryFn: () => recetteService.getAllCategoriesMeals(),
    })
    console.log(data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>

    return  <Container>{data && data.categories.map((cat) => {
		return (
			<Row key={cat.strCategory} flex>
                <img src={cat.strCategoryThumb} alt="" />
                <Link to={`/categorie/${cat.strCategory}`}>
				<h2>{cat.strCategory}</h2>
                </Link>
			</Row>
		)
	})}</Container>
}

export default CategorieDeRecette