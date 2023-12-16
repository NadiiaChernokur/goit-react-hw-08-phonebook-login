import { useDispatch } from 'react-redux';
const { logOut } = require('./toGetApi/toGetApi');

const LogOut = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return <></>;
};
export default LogOut;
