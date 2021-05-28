import axios from 'axios';
const SWAPI_JSON_URL = 'https://swapi.dev/api/planets/';
// const SWAPI_JSON_URL = "https://swapi.dev/api/planets/?page=2"
// const SWAPI_JSON_URL = "https://swapi.dev/api/planets/?page=3"
// const SWAPI_JSON_URL = "https://swapi.dev/api/planets/?page=4"

let API = {
    getPlanetData: async () => {
        return axios.get(SWAPI_JSON_URL)
            .catch(function (error) {
                // throw error.message    // original
                throw new Error(error.message);
            });
    }
}
export default API;