import React from "react";
import { useState } from "react";
import {
 Form,
 FormGroup,
 Label,
 Input,
 FormFeedback,
 Button,
} from "reactstrap";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { userName } from "../../state/name/nameSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [form, setForm] = useState({
  userName: "",
  email: "",
  password: "",
 });

 const [errors, setErrors] = useState({
  userName: false,
  email: false,
  password: false,
 });

 const validateUserName = (name) => {
  const userNameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  return userNameRegex.test(name);
 };

 const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
 };

 const validatePassword = (password) => {
  const passwordRegex = /^[A-Za-z0-9\d]{4,}$/;
  return passwordRegex.test(password);
 };

 const validation = (e) => {
   const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
  let isValid = false;
  if (name === "userName") {
   isValid = validateUserName(value);
    if (isValid) dispatch(userName(value));
    console.log(value)
  } else if (name === "email") {
   isValid = validateEmail(value);
  } else if (name === "password") {
   isValid = validatePassword(value);
  }

  setErrors({
   ...errors,
   [name]: !isValid,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const isFormValid =
   validateUserName(form.userName) &&
   validateEmail(form.email) &&
   validatePassword(form.password);

  if (isFormValid) {
   axios
    .post("http://localhost:3001/", {
     userName: form.userName,
     email: form.email,
     password: form.password,
    })
    .then((result) => {
     console.log(result);
     alert("Form submitted successfully");
     navigate("/home");
    })
    .catch((err) => console.log(err));
  } else {
   // Highlight errors
   setErrors({
    userName: !validateUserName(form.userName),
    email: !validateEmail(form.email),
    password: !validatePassword(form.password),
   });
   console.log("Form contains errors");
  }
 };

 return (
  <>
   <div className="signUp-container">
    <Form style={{ width: "50%" }} onSubmit={handleSubmit}>
     <FormGroup>
      <Label for="userName">User Name</Label>
      <Input
       name="userName"
       placeholder="Enter your name"
       onChange={validation}
       invalid={errors.userName}
       value={form.userName}
      />
      <FormFeedback>
       This name is already taken or invalid or blank spaces(must be 3-15
       characters long, alphanumeric).
      </FormFeedback>
     </FormGroup>
     <FormGroup>
      <Label for="email">User Email</Label>
      <Input
       name="email"
       placeholder="Enter your email"
       value={form.email}
       onChange={validation}
       valid={!errors.email && form.email.length > 0}
       invalid={errors.email}
      />
      <FormFeedback>Please enter a valid email address.</FormFeedback>
     </FormGroup>
     <FormGroup>
      <Label for="password">Password</Label>
      <Input
       name="password"
       type="password"
       placeholder="Enter your password"
       value={form.password}
       onChange={validation}
       valid={!errors.password && form.password.length > 0}
       invalid={errors.password}
      />
      <FormFeedback>
       Password must be at least 4 characters long and contain at least one
       number.
      </FormFeedback>
     </FormGroup>
     <Button type="submit">Submit</Button>
    </Form>
   </div>
  </>
 );
};

export default SignUp;
