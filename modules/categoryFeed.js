import * as feedsAPI from '../utils/api/dummy'

const GET_FEEDS = 'categoryFeed/GET_FEEDS';
const GET_FEEDS_SUCCESS = 'categoryFeed/GET_FEEDS_SUCCESS';
const GET_FEEDS_ERROR = 'categoryFeed/GET_FEEDS_ERROR';

const GET_FEED = 'categoryFeed/GET_FEED';
const GET_FEED_SUCCESS = 'categoryFeed/GET_FEED_SUCCESS';
const GET_FEED_ERROR = 'categoryFeed/GET_FEED_ERROR';

export const getFeeds = () => async dispatch => {
  dispatch({ type: GET_FEEDS });
  try {
    const feeds = await feedsAPI.getFeeds();
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

const initialState = {
  feeds: {
    loading: true,
    data: null,
    error: null
  },
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