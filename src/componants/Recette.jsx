import React from 'react'
import {useQuery} from "@tanstack/react-query"
import {useParams} from "react-router-dom"

const Recette = () => {
    const {isError, isLoading, error, data} = useQuery({
        queryKey:["ingredientsRecette"],
        queryFn: () => recetteService.getAllCategoriesMeals(),
    })
    console.log(data);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>

    return <div>{data && data.categories.map((cat) => {
		return (
			<div key={cat.strCategory}>
                <img src={cat.strCategoryThumb} alt="" />
                <Link to={`/categorie/${cat.strCategory}`}>
				<h2>{cat.strCategory}</h2>
                </Link>
			</div>
		)
	})}</div>
}

export default Recette