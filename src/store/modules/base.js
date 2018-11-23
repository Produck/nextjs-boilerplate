import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SHOW_MODAL = "base/SHOW_MODAL";
const HIDE_MODAL = "base/HIDE_MODAL";

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = {
  modal: {
    visible: false,
    content: "",
    title: ""
  }
};

export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      return produce(state, draft => {
        draft.modal = {
          ...action.payload,
          visible: true
        };
      });
    },
    [HIDE_MODAL]: (state, action) => {
      return produce(state, draft => {
        draft.modal = {
          ...action.payload,
          visible: false
        };
      });
    }
  },
  initialState
);
