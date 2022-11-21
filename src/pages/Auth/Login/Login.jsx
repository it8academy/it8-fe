import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup/FormGroup';

import { useState, useEffect } from 'react';
import Button from '../../../components/Button/Button';
import styles from './Login.module.css';
// import Google from '../../../components/Button/Google';

import { loginData } from '../../../constant/authData';

// import { loginUser } from 'services/auth';
// import { useContextState } from 'context/context';
// import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';

const Login = (props) => {
  const navigate = useNavigate();
  // const { setIsLoggedIn } = useContextState();
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState(loginData);

  const onChange = (e, index) => {
    const updatedArr = loginForm.map((item, i) => {
      if (i === index) {
        item.value = e.target.value;
      }

      return item;
    });
    setLoginForm(updatedArr);
  };

  useEffect(() => {
    const updatedArr = loginData.map((item, i) => {
      if (i === 1) {
        if (type) item.type = 'text';
        else item.type = 'password';
      }

      return item;
    });
    setLoginForm(updatedArr);
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = {};
    // loginForm.forEach((item) => (data[item.name] = item.value));
    // try {
    //   setLoading(true);
    //   const response = await loginUser(data);
    //   toast.success('Welcome to EasyRent!');
    //   setIsLoggedIn(true);
    //   localStorage.setItem('token', response.data.token);
    //   setLoading(false);
    //   navigate('/');
    // } catch (error) {
    //   setLoading(false);
    //   toast.error(error.response.data.message);
    // }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.p1}>Continue your tech journey from here</p>
        {loginData.map((input, index) => (
          <FormGroup
            key={input.id}
            {...input}
            loginform={loginForm[input.name]}
            onChange={(e) => onChange(e, index)}
          />
        ))}
        <div className={styles.checkboxDiv}>
          <div></div>
          <Link to="/resetpassword">
            <p>Forgot password?</p>
          </Link>
        </div>
        <Button> {loading ? <Loading /> : 'Login'}</Button>
      </form>
      {/* <Google /> */}
      <p className={styles.p3}>
        Don't have an account?
        <Link to="/signup">
          <span> Sign-up Now</span>
        </Link>
      </p>
    </>
  );
};

export default Login;
