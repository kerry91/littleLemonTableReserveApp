import { NavLink } from "react-router-dom";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import HeroOther from "./HeroOther";
import { MyTextInput, MyRadio } from "../helpers/FormInputs";
import { submitAPI } from "../api/Api";
import heroImg1 from "../assets/restaurant chef B.jpg";
import dayjs from "dayjs";

const Form3 = () => {
  
  const Form1 = localStorage.getItem('Form1');
  const resultsForm1 = JSON.parse(Form1);

  const shortDate = dayjs(resultsForm1.date).format("DD MMM YYYY")
  console.log(resultsForm1.date)

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
          submitAPI(values, localStorage.clear());
         }}
       >
        {({ isSubmitting}) => (
         <Form>
          <h3>Booking Details</h3>
          <section id="results">
            Date:{shortDate} <br></br>
            Time: {resultsForm1.time}<br></br> 
            Number of Diners: {resultsForm1.seats}
          </section>
          <h3>Credit Card Details</h3>
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
