import { browserHistory } from 'react-router';

export default store => next => action => {
  if (action.payload && action.payload.constructor.name === 'ApiError') {
    // ApiError action
    switch (action.payload.status) {
      case 401:
        browserHistory.push('/login');
        break;

      case 404:
        location.href = '/404.html';
        break;

      case 500:
      case 505:
        location.href = '/500.html';
        break;

      default:
    }
  }

  return next(action);
};
