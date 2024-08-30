import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsApi";
import { ErrorMessage, Field, Form, Formik } from "formik";

const validationControl = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(1, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .min(3, "Too short")
    .max(25, "Too long")
    .required("Required"),
});
const initialContact = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
export const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={usernameFieldId}>Username</label>
          <Field id={usernameFieldId} type="text" name="username" />
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field id={emailFieldId} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={phoneFieldId}>Phone</label>
          <Field id={phoneFieldId} type="text" name="phone" />
          <ErrorMessage name="phone" component="span" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
