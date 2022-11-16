import React from 'react';
import { useState, useEffect } from 'react';
import FormGroup from '../../../components/FormGroup/FormGroup';
import styles from './SignUp.module.css';
import Button from '../../../components/Button/Button';
import Google from '../../../components/Button/Google';
import { Link, useNavigate } from 'react-router-dom';
// import Modal from 'components/Modal/Modal';
// import openemail from 'assets/open_email.png';
// import Close from 'assets/close.png';
import { registerData } from '../../../constant/authData';
// import { registerUser } from 'services/auth';
// import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';

const SignUp = (props) => {
  const navigate = useNavigate();
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [signupForm, setSignupForm] = useState(registerData);

  useEffect(() => {
    const updatedArr = signupForm.map((item, i) => {
      if (i === 4) {
        if (type) item.type = 'text';
        else item.type = 'password';
      }
      return item;
    });
    // setSignupForm(updatedArr);
  }, [
    type,
    // signupForm
  ]);

  const onChange = (e, index) => {
    const updatedArr = signupForm.map((item, i) => {
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setSignupForm(updatedArr);
  };

  const handleSubmit = async (e) => {
    navigate('/');
    // e.preventDefault();
    // const data = {};
    // signupForm.map((input) => (data[input.name] = input.value));
    // try {
    //   setLoading(true);
    //   const response = await registerUser(data);
    //   toast.success('Kindly Check your email to verify your account');
    //   setLoading(false);
    //   setShowModal(true);
    //   navigate('/login');
    // } catch (error) {
    //   setLoading(false);
    //   toast.error(error.response.data.message);
    // }
  };
  // const close = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Hi, Welcome to iT8</h1>
        <p className={styles.p1}>
          Kindly fill in the details below to create your account
        </p>
        {registerData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            // signupForm={signupForm[input.name]}
            onChange={(e) => onChange(e, index)}
          />
        ))}
        <p className={styles.p2}>
          By signing up, you’re agreeing to our Terms & Conditions and Privacy
          Policy
        </p>
        <Button>{loading ? <Loading /> : 'Create Account'}</Button>
      </form>
      <Google />
      <Link to="/login">
        <p className={styles.p3}>Already have an account? Login</p>
      </Link>
    </>
  );
};
export default SignUp;
