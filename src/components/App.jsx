// import { ContactList } from './Contactlist/Contactlist';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './Contactform/Contactform';
// import { Container, Head, Head2 } from './Appstyles/App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { fetchContacts } from 'reduxfolder/http';
// import Header from './Header/Header';
import { NavLink, Route, Routes } from 'react-router-dom';
// import PhoneContainer from './Container';
// import Register from './Register/Register';
// import Login from './Login/Login';
import { Nav } from './Appstyles/App.styles';
// import Hallo from './Hallo';
import LogOut from './LogOut';
import React, { Suspense } from 'react';
import { refreshUser } from './toGetApi/toGetApi';

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

  return (
    <>
      {isRefreshing ? (
        <div>load....</div>
      ) : (
        <Suspense>
          <Nav>
            <NavLink to="/"></NavLink>
            <NavLink to="/contacts">Mein Contacts</NavLink>
            <NavLink to="/createcontact">Create contact</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <LogOut />
          </Nav>
          <Routes>
            <Route path="/" element={<Hallo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<PhoneContainer />} />
            <Route path="/createcontact" element={<ContactForm />} />
            {/* <Route path="/register" element={<Register />}/> */}
          </Routes>
        </Suspense>
      )}
    </>
    // <Container>
    //   <Header />
    //   <Head>Phonebook</Head>
    //   <ContactForm />

    //   <Head2>Contacts</Head2>
    //   <Filter />
    //   {contacts && <ContactList />}
    // </Container>
  );
};
