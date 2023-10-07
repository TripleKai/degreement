import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import AboutPage from './pages/About.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/how-it-works', element: <AboutPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
