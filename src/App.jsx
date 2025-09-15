
// react router dom 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages 
import Home from './pages/Home';
import AddPicture from './pages/AddPicture';
import SavedPicture from './pages/SavedPicture';
import Profile from './pages/Profil'
import MainLayout from './layout/MainLayout';
import Login from './pages/Login'
import SingUp from './pages/SingUp';
import Img from './pages/img'
import EditProfile from './pages/EditProfile';
import AuthLayout from './layout/AutLayout';
import MainProvider from './context/MainContext';

// redux
import { Provider } from 'react-redux';
import store from './store/store'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* main layout */}
        <Route path='/' element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='/add' element={<AddPicture />} />
          <Route path='/saved' element={<SavedPicture />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/img/:id' element={< Img />} />
          <Route path='/profile/editProfile' element={<EditProfile />} />
        </Route>

        {/* auht layout */}
        <Route path='/auth' element={<AuthLayout />}>
          <Route index={true} path='login' element={<Login />} />
          <Route path='signup' element={<SingUp />} />
        </Route>
      </Route>
    )
  )

  return (
      <Provider store={store}>
        <MainProvider>
          <RouterProvider router={router} />
        </MainProvider>
      </Provider>
  )
}

export default App;