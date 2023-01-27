import { NavLink } from "react-router-dom";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import Hero from "./Hero";

import { MyTextInput, MyRadio } from "../helpers/FormInputs";

const Form3 = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
      <Formik
         initialValues={{
           cardNumber: '',
           cardName: '',
           exp: '',
           cvv: '',
           sendOptions1: false,
           sendOptions2: false,
         }}
         validationSchema={Yup.object({
           cardNumber: Yup.string()
             .required('Enter a card number'),
             cardName: Yup.string()
             .required('Enter a card name'),
             exp: Yup.string()
             .required('Enter an expiry date'),
             cvv: Yup.string()
             .required('Enter the card CVV number'),
         })}
         onSubmit={(values) => {
         }}
       >
        {({ isSubmitting }) => (
         <Form>
           <MyTextInput
             label=""
             name="cardNumber"
             type="text"
             placeholder="Card Number"
           />
           <MyTextInput
             label=""
             name="cardName"
             type="text"
             placeholder="Card Name"
           />
           <MyTextInput
             label=""
             name="exp"
             type="text"
             placeholder="EXP."
           />
           <MyTextInput
             label=""
             name="cvv"
             type="text"
             placeholder="CVV"
           />

           <MyRadio name="sendOptions1">
             Send my booking confirmation via text
           </MyRadio>
           <MyRadio name="sendOptions2">
           end me booking confirmation via email
           </MyRadio>
          <br /> <br />
           <button type="submit" disabled={isSubmitting}>
        {isSubmitting === false ? "Lets Go"  : <NavLink exact to="/formsuccess">Lets Go</NavLink>}
        </button>
         </Form>
          )}
       </Formik>
      </section>
    </>
  );
};

export default Form3;
