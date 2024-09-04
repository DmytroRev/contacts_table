import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "react-modal";
import css from "./ModalContactForm.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

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
export const ModalContactForm = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    onClose();
  };

  return (
    <div className={css.modalContainer}>
      <Modal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <Formik
          initialValues={initialContact}
          onSubmit={handleSubmit}
          validationSchema={validationControl}
        >
          <Form className={css.formModal}>
            <div className={css.containerField}>
              <label htmlFor={nameFieldId} className={css.input}>
                Name
              </label>
              <Field id={nameFieldId} type="text" name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.containerField}>
              <label htmlFor={usernameFieldId} className={css.input}>
                Username
              </label>
              <Field id={usernameFieldId} type="text" name="username" />
              <ErrorMessage name="username" component="span" />
            </div>
            <div className={css.containerField}>
              <label htmlFor={emailFieldId} className={css.input}>
                Email
              </label>
              <Field id={emailFieldId} type="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className={css.containerField}>
              <label htmlFor={phoneFieldId} className={css.input}>
                Phone
              </label>
              <Field id={phoneFieldId} type="text" name="phone" />
              <ErrorMessage name="phone" component="span" />
            </div>
            <button type="submit">Add Contact</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
