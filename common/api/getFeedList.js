import axios from "axios";

export const getFeedList = async ({category}) => {
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';

  const response = await axios.get(APIURL+'get_post?category='+category);
  const feeds = await response.data;
  return feeds;
}