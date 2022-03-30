import apiUrl from "../apiConfig";
import axios from "axios";

// Index function
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}