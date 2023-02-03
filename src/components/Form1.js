import { NavLink } from "react-router-dom";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import { MySelect, MyRadio, MyTextInput} from "../helpers/FormInputs"
import {fetchAPI, submitAPI} from '../api/Api'
import { useReducer, useState } from "react";


const Form1 = () => {
  const [date, setDate] = useState("");
  const output = fetchAPI(new Date());
  const [availableTimes] = useReducer(updateTimes, output);
  
  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  )

  function updateTimes(date) {
    return (
      fetchAPI(date)
    );
}

function handleDateChange(e) {
  setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        updateTimes(date);

  setFinalTime(availableTimes.map((times) => <option>{times}</option>));
}


  return (
    <>
    <Formik
         initialValues={{
           date: Date(),
           time: '',
           occasion: '',
           seats: '',
           seatingOptions: false,
         }}
         validationSchema={Yup.object({
          date: Yup.date().required('Choose a date'),
          time: Yup.string().required('Choose a time'),
          occasion: Yup.string().oneOf(
               ['birthday', 'anniversary', 'engagement'],
               'Invalid occasion'
             ).required('Choose an occasion'),
          seats: Yup.string()
             .oneOf(
               ['1', '2', '3', '4'],
               'Invalid seat number'
             ).required('Choose an occasion'),
         })}
         onSubmit={(values) => {
          submitAPI(values);
        }}
       >
        {({ isSubmitting }) => (
         <Form >

         <MyTextInput label="Select a Date" name="date" type="date"
         pattern="\d{4}-\d{2}-\d{2}"
         value={date}
         onChange={handleDateChange} />
         <br/>
 
           <MySelect label="Select a Time" name="time">
           {finalTime}
           </MySelect>
           <br/>

           <MySelect label="Select an Occasion" name="occasion">
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
           </MySelect>
           <br/>

           <MySelect label="Select Number of Seats" name="seats">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
           </MySelect>
           <br/>

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
