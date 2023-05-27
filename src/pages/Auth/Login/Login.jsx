import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';
import useAuthStore from './useStore';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../../services/auth';
const Login = (props) => {
  const navigate = useNavigate();
  const { setToken, setAuthUser } = useAuthStore();
  const [submiting, setSubmiting] = useState(false);
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'The password is not what you used in signing in, Is it?')
      .max(20, 'Too Long!')
      .required('This field is Required'),
    email: Yup.string()
      .email('This email is invalid')
      .required('This field is Required'),
  });

  const handlesubmit = async (payload) => {
    setSubmiting(true);
    try {
      const res = await loginUser(payload);
      setToken(res?.data.token);
      setAuthUser(res?.data);
      navigate('/coursedashboard');
      toast.success(res?.data.message);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
    setSubmiting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(value) => {
          console.log(value);
          handlesubmit(value);
        }}>
        {({ errors, touched }) => (
          <Form className={styles.form} noValidate>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.p1}>Continue your tech journey from here</p>
            <div className="form-group">
              <label className={styles.formLabel}>Email</label>
              <Field
                className={`${styles.formInput} ${
                  errors.email && styles.errorBorder
                }`}
                type="email"
                name="email"
              />
            </div>
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
            <div className="form-group">
              <label className={styles.formLabel}>Password</label>
              <Field
                className={`${styles.formInput} ${
                  errors.password && styles.errorBorder
                }`}
                type="password"
                name="password"
              />
            </div>
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}

            <div className={styles.checkboxDiv}>
              <div></div>
              <Link to="/resetpassword">
                <p>Forgot password?</p>
              </Link>
            </div>
            <button type="submit" className={styles.btn } disabled={submiting}>
              {submiting ? '...' : 'Login'}
            </button>
           
          </Form>
        )}
      </Formik>
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
