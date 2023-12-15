import { logIn } from 'components/toGetApi/toGetApi';
import { useDispatch } from 'react-redux';

const {
  FormContainer,
  FormButton,
} = require('components/Contactform/Contactform.styles');
const { Formik, Field } = require('formik');

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          if (values.email === '' || values.password === '') {
            alert(`There are empty fields`);
            return;
          }

          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <FormContainer>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="ffff@gmail.com" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="*******" />

          <FormButton type="submit">To login</FormButton>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default Login;
