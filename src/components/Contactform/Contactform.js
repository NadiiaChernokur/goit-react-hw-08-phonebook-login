import { Formik, Field } from 'formik';
import { FormButton, FormContainer } from './Contactform.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/toGetApi/toGetApi';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          const names = contacts.map(contact => contact.name.toLowerCase());
          const valueName = values.name;

          if (names.find(name => name === valueName.toLowerCase())) {
            alert(`${values.name} is already in contacts`);
            return;
          }

          if (values.name === '' || values.number === '') {
            alert(`There are empty fields`);
            return;
          }
          console.log(values);
          dispatch(addContact(values));
          actions.resetForm();
          navigate('/contacts');
        }}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="number">Number</label>
          <Field id="number" name="number" placeholder="000-00-00" />

          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    </div>
  );
};
export default ContactForm;
