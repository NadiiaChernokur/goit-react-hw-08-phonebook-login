import { logOut } from 'components/toGetApi/toGetApi';
import { useDispatch, useSelector } from 'react-redux';

const {
  Nav,
  DivContact,
  LogoutButton,
} = require('components/Appstyles/App.styles');
const { NavLink } = require('react-router-dom');

const UserMenu = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <Nav>
      <NavLink to="/">Main page</NavLink>
      {isLoggedIn ? (
        <DivContact>
          <NavLink to="/contacts">Mein Contacts</NavLink>
          <NavLink to="/createcontact">Create contact</NavLink>

          <LogoutButton type="button" onClick={() => dispatch(logOut())}>
            Logout
          </LogoutButton>
        </DivContact>
      ) : (
        <DivContact>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </DivContact>
      )}
    </Nav>
  );
};
export default UserMenu;
