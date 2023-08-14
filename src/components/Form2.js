import { NavLink } from "react-router-dom";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import HeroOther from "./HeroOther";
import { MyTextInput, MyTextArea } from "../helpers/FormInputs";
import { submitAPI } from "../api/Api";
import heroImg1 from "../assets/restaurant chef B.jpg";

const Form2 = () => {
  return (
    <>
      <section>
        <HeroOther
        src={heroImg1}
        alt="chef B"/>
      </section>

      <section>
      <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           number: '',
           email: '',
           password: '',
           comment: '',
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(100, 'Must be 100 characters or less')
             .required('First name is required'),
           lastName: Yup.string()
             .max(100, 'Must be 100 characters or less')
             .required('Last name is required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Email is required'),
          number: Yup.string()
             .required('Contact number is required'),
          password: Yup.string()
             .required('Password is required'),

         })}
         onSubmit={(values) => {
          submitAPI(values);
          localStorage.setItem('Form2', JSON.stringify(values))
         }}
       >
        {({ isSubmitting }) => (
         <Form>
           <MyTextInput
             label=""
             name="firstName"
             type="text"
             placeholder="First Name"
           />
 
           <MyTextInput
             label=""
             name="lastName"
             type="text"
             placeholder="Last Name"
           />

          <MyTextInput
             label=""
             name="number"
             type="tel"
             placeholder="Contact Number"
           />
 
           <MyTextInput
             label=""
             name="email"
             type="email"
             placeholder="Email"
           />

            <MyTextInput
             label=""
             name="password"
             type="password"
             placeholder="Password"
           />

          <MyTextArea
             label=""
             name="comment"
             placeholder="Add a special request (Optional)"
           />
 
 
           <button type="submit" disabled={isSubmitting}>
        {isSubmitting === false ? "Lets Go"  : <NavLink exact to="/form3">Lets Go</NavLink>}
        </button>
         </Form>
          )}
       </Formik>
      </section>

    </>
  );
};

export default Form2;
