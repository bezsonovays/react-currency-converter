import axios from "axios";

export default class PostService {
    static async getСurrency() {
           return  await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').catch(err => console.log(err));       
    }
}


