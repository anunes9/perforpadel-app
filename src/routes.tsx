import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
