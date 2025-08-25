
// react router dom 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages 
import Home from './pages/Home';
import AddPicture from './pages/AddPicture';
import SavedPicture from './pages/SavedPicture';
import Profile from './pages/Profil'
import MainLayout from './layout/MainLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='/add' element={<AddPicture />} />
          <Route path='/saved' element={<SavedPicture />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;