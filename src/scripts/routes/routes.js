import RestorantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestorantList,
  '/restaurant-list': RestorantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
