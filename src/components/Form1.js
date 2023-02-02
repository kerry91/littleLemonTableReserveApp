import { NavLink } from "react-router-dom";
import React from "react";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import { MySelect, MyRadio, MyTextInput} from "../helpers/FormInputs"
import {fetchAPI, submitAPI} from '../api/Api'
import { useReducer } from "react";


const Form1 = () => {


  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
}

const output = fetchAPI(new Date());

const [availableTimes] = useReducer(updateTimes, output);

const [finalTime, setFinalTime] = React.useState(
  availableTimes.map((times) => <option>{times}</option>)
);


// eslint-disable-next-line no-unused-vars
function handleDateChange(date) {

  setFinalTime(availableTimes.map((times) => <option>{times}</option>));
}


  return (
    <>
    <Formik
         initialValues={{
           date: Date,
           time: '',
           occasion: '',
           seats: '',
           seatingOptions: false,
         }}
         validationSchema={Yup.object({
           date: Yup.date().default(() => new Date())
             .required('Choose a date'),

             time: Yup.string()
             .required('Choose a time'),

             occasion: Yup.string()
             .oneOf(
               ['birthday', 'anniversary', 'engagement'],
               'Invalid occasion'
             )
             .required('Choose an occasion'),

             seats: Yup.string()
             .oneOf(
               ['1', '2', '3', '4'],
               'Invalid seat number'
             )
             .required('Choose an occasion'),
         })}
         onSubmit={(values) => {
          submitAPI(values);
          console.log(submitAPI)
        }}
       >
        {({ isSubmitting }) => (
         <Form >
           <MyTextInput
             label="Select a Date"
             name="date"
             type="date"
             placeholder="Date"
           />
          <br />
 
           <MySelect label="Select a Time" name="time">
           {finalTime}
           </MySelect>

           <MySelect label="Select an Occasion" name="occasion">
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
           </MySelect>

           <MySelect label="Select Number of Seats" name="seats">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
           </MySelect>

            <label htmlFor="seatingOptions">Select a Seating Option</label>
           <MyRadio name="seatingOptions">
             Standard
           </MyRadio>
           <MyRadio name="seatingOptions">
             Outside
           </MyRadio>
          <br /> <br />
           <button type="submit" disabled={isSubmitting}>
        {isSubmitting === false ? "Lets Go"  : <NavLink exact to="/form2">Lets Go</NavLink>}
        </button>
         </Form>
          )}
       </Formik>
  </>
  );
};
export default Form1;
