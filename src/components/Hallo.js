import { useSelector } from 'react-redux';
import { Head } from './Appstyles/App.styles';

const Hallo = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const userName = useSelector(state => state.user.user.name);
  console.log(userName);
  return (
    <>
      <Head>Phonebook</Head>
      {isLoggedIn ? (
        <div>Hallo, {userName}</div>
      ) : (
        <div>
          Вітаємо вас на нашому сайті. Якщо ви у нас вперше, пройдіть
          реєстрацію, якщо має акаунт, залогінтесь
        </div>
      )}
    </>
  );
};
export default Hallo;
