import { useSelector } from 'react-redux';
import { HalloContainer, Head, Text } from './Appstyles/App.styles';

const Hallo = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const userName = useSelector(state => state.user.user.name);

  return (
    <HalloContainer>
      <Head>Phonebook</Head>
      {isLoggedIn ? (
        <Text>Hallo, {userName}</Text>
      ) : (
        <Text>
          Welcome to our website! If you are here for the first time, go through
          registration, if you have an account - log in!
        </Text>
      )}
    </HalloContainer>
  );
};
export default Hallo;
