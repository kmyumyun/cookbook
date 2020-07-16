import axios from "axios"
import db from "../../resources/db.config.json"

class AuthService {
    async login(data) {
        const response = await axios.post(db.apiURL + "/login", data);

        return response;
    }

    async register(data) {
        const response = await axios.post(db.apiURL + "/register", data);

        return response;
    }
}

export default AuthService;