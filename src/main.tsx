import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import '@mantine/core/styles.css';
import './index.css';

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={routes} />;
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
