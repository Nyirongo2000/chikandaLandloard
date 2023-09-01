import axios from "axios";
const LANDLORD_API_BASE_URL = "http://localhost:8080/api/landlord/Hostel";


class LandlordService {
    // lets start with hostels
  getHostels() {
    return axios.get(LANDLORD_API_BASE_URL);
  }
}
export default new LandlordService();
