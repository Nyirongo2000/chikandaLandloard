import axios from "axios";
const LANDLORD_API_BASE_URL = "http://localhost:8080/api/landlord";


class LandlordService {
    // lets start with hostels
  getHostels() {
    return axios.get(`${LANDLORD_API_BASE_URL}/hostel`);
  }
  saveHostel(hostel){
    return axios.post(`${LANDLORD_API_BASE_URL}/Hostel`,hostel);
  }
}
export default new LandlordService();
