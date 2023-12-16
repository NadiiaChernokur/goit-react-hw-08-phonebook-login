import { toCreateUser } from 'components/toGetApi/toGetApi';
import { useDispatch } from 'react-redux';

const {
  FormContainer,
  FormButton,
} = require('components/Contactform/Contactform.styles');
const { Formik, Field } = require('formik');

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);

          if (
            values.name === '' ||
            values.email === '' ||
            values.password === ''
          ) {
            alert(`There are empty fields`);
            return;
          }

          dispatch(toCreateUser(values));
          actions.resetForm();
        }}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="ffff@gmail.com" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="*******" />

          <FormButton type="submit">To register</FormButton>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default Register;
