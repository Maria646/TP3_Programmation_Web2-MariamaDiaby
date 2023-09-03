import {config} from "./config.js"

class RecetteService{
    baseUrl = config.baseUrl;
    endPointAllCategories = "json/v1/1/categories.php";
    endPointMealsByCategories = "json/v1/1/filter.php?c=";
    endPointMeal = "json/v1/1/lookup.php?i=";
    urlAllCategories = `${this.baseUrl}/${this.endPointAllCategories}`;
    urlMealsByCategories = `${this.baseUrl}/${this.endPointMealsByCategories}`;
    urlMeal = `${this.baseUrl}/${this.endPointMeal}`;

    async getAllCategoriesMeals (){
        const res = await fetch(this.urlAllCategories)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data;
    }

    async getAllMealsByCategories (nameCategorie){
        const res = await fetch(`${this.urlMealsByCategories}${nameCategorie}`)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data;
    }

    async getMeals (identifiant){
        const res = await fetch(`${this.urlMeal}${identifiant}`)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data;
    }
}

export default RecetteService;