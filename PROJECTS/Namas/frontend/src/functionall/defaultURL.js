import axios from "axios";

const DB_url = axios.create({ baseURL: 'http://localhost:8000/api/' });

export default DB_url;