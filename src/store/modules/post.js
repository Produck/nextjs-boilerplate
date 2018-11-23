import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { pender } from "redux-pender";

import * as api from "lib/api";

const GET_POSTS = "post/GET_POSTS";

export const getPosts = createAction(GET_POSTS, api.getPosts);

const initialState = {
  posts: []
};

export default handleActions(
  {
    ...pender({
      type: GET_POSTS,
      onSuccess: (state, action) => {
        const { data: posts } = action.payload;
        return produce(state, draft => {
          draft.posts = posts;
        });
      }
    })
  },
  initialState
);
