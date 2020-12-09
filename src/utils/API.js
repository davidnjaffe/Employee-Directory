
import axios from "axios";

export default {
  // Gets all users
  getUsers: function(query) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};