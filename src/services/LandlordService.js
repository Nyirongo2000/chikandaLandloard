import axios from "axios";
const LANDLORD_API_BASE_URL = "http://localhost:8080/api/landlord/landlord";


class LandlordService {
    // lets start with hostels
  getHostels() {
    return axios.get(LANDLORD_API_BASE_URL);
  }
  saveLandlord(landlord){
    return axios.post(LANDLORD_API_BASE_URL,landlord);
  }
}
export default new LandlordService();
