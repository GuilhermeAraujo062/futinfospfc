import axios from "axios";

const API_KEY = "live_16f52fe5eea7808aaa86ce574810e1";

export async function getFutInfo() {
    try {
        const response = await axios.get("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", {
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error.response ? error.response.data : error.message);
        return null;
    }
}
