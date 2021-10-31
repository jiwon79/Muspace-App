import axios from "axios";

const getFeedList = async (category: String) => {
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';
  await axios.get(APIURL+'get_post?category='+category)
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      console.log("error");
    });
}

export default getFeedList