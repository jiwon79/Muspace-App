import axios from "axios";
const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';
const category = '휘미'

const getFeedList = async () => {
  await axios.get(APIURL+'get_post?category='+category)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      console.log("error");
    });
}

export default getFeedList