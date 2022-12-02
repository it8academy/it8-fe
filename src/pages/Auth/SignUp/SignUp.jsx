import React from "react";
import { useState, 
  // useEffect 
} from "react";
// import axios from "axios";
import FormGroup from "../../../components/FormGroup/FormGroup";
import styles from "./SignUp.module.css";
import Button from "../../../components/Button/Button";
// import Google from '../../../components/Button/Google';
import { Link, useNavigate } from "react-router-dom";
// import Modal from 'components/Modal/Modal';
// import openemail from 'assets/open_email.png';
// import Close from 'assets/close.png';
import { registerData } from "../../../constant/authData";
import { registerUser } from "../../../services/auth";
import { toast } from 'react-toastify';
import Loading from "../../../components/Loading/Loading";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const SignUp = (props) => {
  const navigate = useNavigate();
  // const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [signupForm, setSignupForm] = useState(registerData);

  // useEffect(() => {
  //   const updatedArr = signupForm.map((item, i) => {
  //     if (i === 4) {
  //       if (type) item.type = "text";
  //       else item.type = "password";
  //     }
  //     return item;
  //   });
  //   // setSignupForm(updatedArr);
  //   // setType()
  // }, [
  //   type,
  //   // signupForm
  // ]);

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
    // navigate('/');
    e.preventDefault();
    const data = {
      course,
      mode_of_learning,
      tx_ref: Date.now().toString(),
      course_amount,
      // tx_ref: "LiveCardTest",
      // transaction_id: "288200108",
    };
    signupForm.map((input) => (data[input.name] = input.value));

    console.log(data);

    // const form = new FormData();
    // form.append('first_name', 'Topelee')
    // form.append('last_name', 'LEEE')
    // form.append('email', 'temilee@gmail.com')
    // form.append('mode_of_learning', 'physical')
    // form.append('course', 'product design')
    // form.append('phone_number', '09078564534')
    // form.append('course_amount', '1')
    // form.append('transaction_id', '288200108')
    // form.append('tx_ref', 'LiveCardTest')
    // form.append('status', 'success')

    try {
      setLoading(true);
      // const res = axios.post('https://it8-academy.herokuapp.com/api/v1/auth/register', data);
      const res = await registerUser(data);
      // const info = await res.json()
      toast.success('Kindly Check your email to verify your account');
      console.log(res);
      // setLoading(false);
      // console.log(response);
      // setShowModal(true);

      // handleFlutterPayment({
      //   callback: (response) => {
      //     console.log({response});
      //     closePaymentModal();
      //   },
      //   onClose: () => {},
      // });

      navigate("/");
    } catch (error) {
      setLoading(false);
      // toast.error(error.response.data.message);
    }
  };

  // const close = () => {
  //   setShowModal(false);
  // };

  const [course, setCourse] = useState("");
  const [mode_of_learning, setMode_of_learning] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-e7c8f332b9d34b01b958cf4f4f643018-X",
    tx_ref: Date.now(),
    amount: 50000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: registerData.name === "email",
      phone_number: registerData.name === "phone_number",
      name: registerData.name === "last_name",
    },
    customizations: {
      title: "Course Payment",
      description: `Payment for ${course}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  // console.log(handleFlutterPayment);

 
  let course_amount = 0 

  if (course === "frontend engineering") course_amount = 120000
  else if (course === "backend engineering" ) course_amount = 120000

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

        <select
          onChange={(event) => setCourse(event.target.value)}
          value={course}
        >
          <option value="">Choose Course</option>
          <option value="frontend engineering">Front End</option>
          <option value="backend engineering">Back End</option>
        </select>

        {/* <h5>{currentSkill}</h5> */}



        {course === "frontend engineering" ? (
          <h5>You are choosing front end for #{course_amount}</h5>
        ) : course === "backend engineering" ? (
          <h5>You are choosing Back end for #{course_amount}</h5>
        ) : (
          ""
        )}

        <select
          onChange={(event) => setMode_of_learning(event.target.value)}
          value={mode_of_learning}
        >
          <option value="">Mode of Learning</option>
          <option value="online">Online</option>
          <option value="physical"> Physical </option>
        </select>

        {/* <FormGroup
            // signupForm={signupForm[input.name]}
            name="text"
            placeholder="amount"
            type="number"
            onChange={(e) => onChange(e)}
          /> */}

        <p className={styles.p2}>
          By signing up, you’re agreeing to our Terms & Conditions and Privacy
          Policy
        </p>
        <Button
        onClick={() =>
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal();
            },
            onClose: () => {},
          })
        }>
          {loading ? <Loading /> : "Create Account"}
        </Button>
      </form>
      {/* <Google /> */}
      <Link to="/login">
        <p className={styles.p3}>Already have an account? <span>Login</span></p>
      </Link>
    </>
  );
};
export default SignUp;
