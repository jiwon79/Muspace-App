import axios from "axios";
import {Buffer} from "buffer";

export const getFeedImage = async (id) => {
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';
  const imageResponse = await axios.get(APIURL+'get_image?post_id='+id, {
    responseType: 'arraybuffer'
  });

  const imageData = await Buffer.from(imageResponse.data, 'binary').toString('base64');
  const imageURI = await 'data:image/png;base64,' + imageData;

  return imageURI;
}