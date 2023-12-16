// import { ContactList } from './Contactlist/Contactlist';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './Contactform/Contactform';
// import { Container, Head, Head2 } from './Appstyles/App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { fetchContacts } from 'reduxfolder/http';
// import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
// import PhoneContainer from './Container';
// import Register from './Register/Register';
// import Login from './Login/Login';
// import { Nav } from './Appstyles/App.styles';
// import Hallo from './Hallo';
// import LogOut from './LogOut';
import React from 'react';
import { refreshUser } from './toGetApi/toGetApi';
import SharedLayout from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import LogOut from './LogOut';

const Hallo = React.lazy(() => import('./Hallo'));
const Register = React.lazy(() => import('./Register/Register'));
const Login = React.lazy(() => import('./Login/Login'));
const PhoneContainer = React.lazy(() => import('./Container'));
const ContactForm = React.lazy(() => import('./Contactform/Contactform'));

export const App = () => {
  const isRefreshing = useSelector(state => state.user.isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>load....</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Hallo />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="logout"
            element={
              <PrivateRoute redirectTo="/login" component={<LogOut />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<PhoneContainer />}
              />
            }
          />
          <Route
            path="createcontact"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactForm />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
