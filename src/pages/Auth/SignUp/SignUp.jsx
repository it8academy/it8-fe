import React from "react";
import { useState } from "react";
import FormGroup from "../../../components/FormGroup/FormGroup";
import styles from "./SignUp.module.css";
import Button from "../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerData } from "../../../constant/authData";
import { registerUser } from "../../../services/auth";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [signupForm, setSignupForm] = useState(registerData);
  const [course, setCourse] = useState("");
  const [mode_of_learning, setMode_of_learning] = useState("");
  let course_amount = 0;

  const onChange = (e, index) => {
    const updatedArr = signupForm.map((item, i) => {
      if (i === index) {
        item.value = e.target.value;
      }
      return item;
    });
    setSignupForm(updatedArr);
  };
  const data = {
    course,
    mode_of_learning,
    tx_ref: Date.now().toString(),
    course_amount,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signupForm.map((input) => (data[input.name] = input.value));
    console.log(data);
    try {
      setLoading(true);
      const res = await registerUser(data);
      toast.success("Kindly Check your email to verify your account");
      console.log(res);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

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

  if (course === "frontend engineering") course_amount = 120000;
  else if (course === "backend engineering") course_amount = 120000;

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
          <h5 className={styles.course_amount}>
            You are choosing front end for #{course_amount}
          </h5>
        ) : course === "backend engineering" ? (
          <h5 className={styles.course_amount}>
            You are choosing Back end for #{course_amount}
          </h5>
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
          }
        >
          {loading ? <Loading /> : "Create Account"}
        </Button>
      </form>
      <Link to="/login">
        <p className={styles.p3}>
          Already have an account? <span>Login</span>
        </p>
      </Link>
    </>
  );
};
export default SignUp;
