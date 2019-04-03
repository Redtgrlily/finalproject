import axios from "axios";
//this is where this might be the reason why the sign up login items are not working.
export default {
  // Gets all users
  getChef: function() {
    return axios.get("/api/chef");
  },
  // Gets the user with the given id
  getChef: function(id) {
    return axios.get("/api/chef/" + id);
  },
  // Deletes the user with the given id
  deleteChef: function(id) {
    return axios.delete("/api/chef/" + id);
  },
  // Saves a user to the database
  saveChef: function(bookData) {
    return axios.post("/api/chef", bookData);
  }
};
