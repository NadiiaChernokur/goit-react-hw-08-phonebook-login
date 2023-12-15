import { useDispatch } from 'react-redux';
const { logOut } = require('./toGetApi/toGetApi');

const LogOut = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return (
    <>
      <button type="button" onClick={onClick}>
        Logout
      </button>
    </>
  );
};
export default LogOut;
