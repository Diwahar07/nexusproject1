import Login from './components/Login';
import Signup from './components/Signup';

import './styles.scss';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  }
]);


function App() {
  return (
    <div className='app'>
    <div  className='container'>
       <RouterProvider router={router} />
    </div>
  </div>
  );
}

export default App;
