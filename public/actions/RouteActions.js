import { browserHistory } from 'react-router';

const RouteActions = {
  route(path) {
    browserHistory.push(path);
  }
};

export default RouteActions;
