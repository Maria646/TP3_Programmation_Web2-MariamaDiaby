import {config} from "./config.js"

class RecetteService{
    endpoint = "json/v1/1/categories.php";
    baseUrl = config.baseUrl;
    recetteUrl = `${this.baseUrl}/${this.endpoint}`;

    async getAllCategoriesMeals (){
        const res = await fetch(this.recetteUrl)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data;
    }
}

export default RecetteService;