import * as feedsAPI from '../common/api/dummy'
import {getFeedList} from "../common/api/getFeedList";
import {getFeedImage} from "../common/api/getFeedImages";

const GET_FEEDS = 'categoryFeed/GET_FEEDS';
const GET_FEEDS_SUCCESS = 'categoryFeed/GET_FEEDS_SUCCESS';
const GET_FEEDS_ERROR = 'categoryFeed/GET_FEEDS_ERROR';

const GET_FEED = 'categoryFeed/GET_FEED';
const GET_FEED_SUCCESS = 'categoryFeed/GET_FEED_SUCCESS';
const GET_FEED_ERROR = 'categoryFeed/GET_FEED_ERROR';

const GET_IMAGE = 'categoryFeed/GET_IMAGE';
const GET_IMAGE_SUCCESS = 'categoryFeed/GET_IMAGE_SUCCESS';
const GET_IMAGE_ERROR = 'categoryFeed/GET_IMAGE_ERROR'

export const getFeeds = ({category}) => async dispatch => {
  dispatch({ type: GET_FEEDS });
  try {
    const feeds = await getFeedList({category});
    dispatch({ type: GET_FEEDS_SUCCESS, feeds });
  } catch (e) {
    dispatch({ type: GET_FEEDS_ERROR, error: e });
  }
};

export const getFeed = (id) => async (dispatch) => {
  dispatch({ type: GET_FEED });
  try {
    const feed = await feedsAPI.getFeedById(id);
    dispatch({ type: GET_FEED_SUCCESS, feed });
  } catch (e) {
    dispatch({ type: GET_FEED_ERROR, error: e });
  }
};

export const getImage = (id) => async (dispatch) => {
  dispatch({ type: GET_IMAGE, id: id });
  try {
    const image = await getFeedImage(id);
    dispatch({ type: GET_IMAGE_SUCCESS, id: id, image });
  } catch(e) {
    dispatch({ type: GET_IMAGE_ERROR, id: id, error: e });
  }
}

const initialState = {
  feeds: {
    loading: true,
    data: null,
    error: null
  },
  images: [],
  feed: {
    loading: true,
    data: null,
    error: null
  }
};

export default function feeds(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDS:
      return {
        ...state,
        feeds: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: {
          loading: false,
          data: action.feeds,
          error: null
        }
      };
    case GET_FEEDS_ERROR:
      return {
        ...state,
        feeds: {
          loading: false,
          data: null,
          error: action.error
        }
      };

    case GET_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: action.id,
            loading: true,
            uri: null,
            error: null
          }
        ]
      }
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        images: state.images.map(image =>
          image.id === action.id
          ? {id: action.id, loading: false, uri: action.image, error: null}
          : image
        )
      }
    case GET_IMAGE_ERROR:
      return {
        ...state,
        images: state.images.map(image =>
          image.id === action.id
          ? {id: action.id, loading: false, uri: null, error: action.error}
          : image
        )
      }

    case GET_FEED:
      return {
        ...state,
        feeds: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_FEED_SUCCESS:
      return {
        ...state,
        feeds: {
          loading: false,
          data: action.feed,
          error: null
        }
      };
    case GET_FEED_ERROR:
      return {
        ...state,
        feeds: {
          loading: false,
          data: null,
          error: action.error
        }
      };

    default:
      return state;
  }
}