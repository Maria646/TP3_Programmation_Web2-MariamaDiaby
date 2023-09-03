import {config} from "./config.js"

class RecetteService{
    baseUrl = config.baseUrl;
    endPointAllCategories = "json/v1/1/categories.php";
    endPointMealsByCategories = "json/v1/1/filter.php?c=";
    urlAllCategories = `${this.baseUrl}/${this.endPointAllCategories}`;
    urlMealsByCategories = `${this.baseUrl}/${this.endPointMealsByCategories}`;

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
}

export default RecetteService;