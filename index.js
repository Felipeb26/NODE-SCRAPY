const axios = require("axios");
const cheerio = require("cheerio");


const teste = async () =>{
    try {
        const reponse = await axios.get(
			"https://www.youtube.com/results?search_query=java"
		);
        const html = reponse.data;
        const $ = cheerio.load(html);
        


    } catch (error) {
        console.log(error)        
    }
}

teste();