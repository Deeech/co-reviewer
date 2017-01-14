import * as actionTypes from '../actionTypes/comments';

const DEFAULT_STATE = [
  {id: 1, title: 'comment', text: 'text text text text text text text text text'},
  {id: 2, title: 'comment', text: 'text text text text text text text text text'},
  {id: 3, title: 'comment', text: 'text text text text text text text text text'},
  {id: 4, title: 'comment', text: 'text text text text text text text text text'},
];

const addComment = (state, action) => ([
  ...state,
  action.comment
]);

const requestComments = (state, action) => ([
  ...state,
  ...action.comments
]);

const deleteComment = (state, action) => (
  state.filter(comment => comment.id !== action.commentId)
);


export default function comments(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_COMMENT_SUCCESS]: addComment,
    [actionTypes.REQUEST_COMMENTS_SUCCESS]: requestComments,
    [actionTypes.DELETE_COMMENT_SUCCESS]: deleteComment
  }[action.type] || (s => s))(state, action);
}
