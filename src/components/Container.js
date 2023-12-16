import { Container, Head, Head2 } from './Appstyles/App.styles';
import { Filter } from './Filter/Filter';
// import { ContactForm } from './Contactform/Contactform';
// import Header from './Header/Header';
import { ContactList } from './Contactlist/Contactlist';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './toGetApi/toGetApi';

const PhoneContainer = () => {
  const contacts = useSelector(state => state.contacts.items);
  const token = useSelector(state => state.user.token);
  //   console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <Container>
      {/* <Header /> */}
      {/* <Head>Phonebook</Head> */}
      {/* <ContactForm /> */}

      <Head2>Contacts</Head2>
      <Filter />
      {contacts && <ContactList />}
    </Container>
  );
};
export default PhoneContainer;
