import { Home } from '../components/Home';
import { ClickCounter } from '../components/ClickCounter';
import { Jotto } from '../components/Jotto';
import { P404 } from '../components/P404';

const routes = [
  {
    name: 'home',
    url: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'clickcounter',
    url: '/clickcounter',
    component: ClickCounter,
    exact: true,
  },
  {
    name: 'jotto',
    url: '/jotto',
    component: Jotto,
    exact: true,
  },
  {
    url: '*',
    component: P404,
  },
];

export default routes;
