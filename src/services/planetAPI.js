import axios from 'axios';
const SWAPI_JSON_URL = 'https://swapi.dev/api/planets';
// const SWAPI_JSON_URL = "http://swapi.dev/api/planets/?page=2"

let API = {
    getPlanetData: async () => {
        return axios.get(SWAPI_JSON_URL)
            .catch(function (error) {
                throw error.message
            });
    }
}
export default API;