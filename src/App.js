import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className='mx-20'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
