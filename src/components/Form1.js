import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import "../css/TableBooking.css";
import { MySelect, MyRadio} from "../helpers/FormInputs";


const Form1 = () => {

  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch()
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
    console.log(user)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [availableTimes, setAvailableTimes] = useState(
    [
    {
      time: "17:00"
    },
    {
      time: "18:00"
    },
    {
      time: "19:00"
    },
    {
      time: "20:00"
    },
    {
      time: "21:00"
    }
  ]
    )

  const timeOptions = availableTimes.map((timeOption) => {
    return (
      <option>{timeOption.time}</option>
    )
  });

  return (
    <>
    <Formik
         initialValues={{
           date: '',
           time: '',
           occasion: '',
           seats: '',
           seatingOptions: false,
         }}
         validationSchema={Yup.object({
           date: Yup.string()
             .required('Choose a date'),

             time: Yup.string()
             .required('Choose a time'),

             occasion: Yup.string()
             .oneOf(
               ['occasion1', 'occasion2', 'occasion3'],
               'Invalid occasion'
             )
             .required('Choose an occasion'),

             seats: Yup.string()
             .oneOf(
               ['seats1', 'seats2', 'seats3', 'seats4'],
               'Invalid seat number'
             )
             .required('Choose an occasion'),
         })}
         onSubmit={(values) => {
         }}
       >
        {({ isSubmitting }) => (
         <Form>
          <label htmlFor="date">Select a Date</label>
           <Field
             label="Select a Date"
             name="date"
             type="date"
             placeholder="Date"
           >
            </Field>
 
           <MySelect label="Select a Time" name="time">
            {timeOptions}
           </MySelect>

           <MySelect label="Select an Occasion" name="occasion">
          <option value="occasion1">Birthday</option>
          <option value="occasion2">Anniversary</option>
          <option value="occasion3">Engagement</option>
           </MySelect>

           <MySelect label="Select Number of Seats" name="seats">
          <option value="seats1">1</option>
          <option value="seats2">2</option>
          <option value="seats3">3</option>
          <option value="seats4">4</option>
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
