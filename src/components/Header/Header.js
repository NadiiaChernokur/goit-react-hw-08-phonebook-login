import Login from 'components/Login/Login';

const { default: Register } = require('components/Register/Register');

const Header = () => {
  return (
    <div>
      <p>Register </p>
      <p>Login</p>
      <p>Contacts</p>
      <Register />
      <Login />
      {/* <Contacts />  */}
    </div>
  );
};

export default Header;
