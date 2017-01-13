import * as actionTypes from '../actionTypes/comments';
import { get, post, del } from '../utils/api';

export function addComment(comment) {

  return dispatch => {
    dispatch({
      type: actionTypes.ADD_COMMENT
    });

    try {
      dispatch({
        type: actionTypes.ADD_COMMENT_SUCCESS,
        comment: comment
      });
    } catch(e) {
      dispatch({
        type: actionTypes.ADD_COMMENT_ERROR
      });
    }
  }
}

export function requestComments() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_COMMENTS
    });

    try {
      const result = await get('/api/comments');

      dispatch({
        type: actionTypes.REQUEST_COMMENTS_SUCCESS,
        comments: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_COMMENTS_ERROR
      });
    }
  }
}

export function deleteComment(commentId) {
  return async dispatch => {
    dispatch({
      type: actionTypes.DELETE_COMMENT,
      commentId
    });

    try {
      await del(`/api/comments/${commentId}`);

      dispatch({
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        commentId
      });
    } catch(e) {
      dispatch({
        type: actionTypes.DELETE_COMMENT_ERROR,
        commentId
      });
    }
  }
}
