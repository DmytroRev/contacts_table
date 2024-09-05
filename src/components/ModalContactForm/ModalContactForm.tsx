import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "react-modal";
import clsx from "clsx";
import { AppDispatch } from "../../redux/store";
import { v4 as uuidv4 } from 'uuid'; 
import { Contact } from "../../types";
import "./ModalContactForm.css";

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

type ModalContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContactForm = ({ isOpen, onClose }: ModalContactFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const nameFieldId = useId();
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values: Omit<Contact, 'id'>, actions: {resetForm: ()=>void}) => {
    const contactToAdd: Contact = {
      id: uuidv4(),
      ...values
    }
    
    dispatch(addContact(contactToAdd)).unwrap().then(() => {
      actions.resetForm()
      onClose()
    }).catch((err) =>
    console.error('Error', err));
    actions.resetForm();
    onClose();
  };

  return (
    <div className='modalContainer'>
      <Modal
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
          {({ errors, touched }) => (
            <Form className='formModal'>
              <div className='containerField'>
                <label htmlFor={nameFieldId} className='label'>
                  Name
                </label>
                <Field
                  id={nameFieldId}
                  type="text"
                  name="name"
                  className={clsx('input', {
                    'inputError': errors.name && touched.name,
                    'inputValid': !errors.name && touched.name,
                  })}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className='errorMessage'
                />
              </div>
              <div className='containerField'>
                <label htmlFor={usernameFieldId} className='label'>
                  Username
                </label>
                <Field
                  id={usernameFieldId}
                  type="text"
                  name="username"
                  className={clsx('input', {
                    'inputError': errors.username && touched.username,
                    'inputValid': !errors.username && touched.username,
                  })}
                />
                <ErrorMessage
                  name="username"
                  component="span"
                  className='errorMessage'
                />
              </div>
              <div className='containerField'>
                <label htmlFor={emailFieldId} className='label'>
                  Email
                </label>
                <Field
                  id={emailFieldId}
                  type="email"
                  name="email"
                  className={clsx('input', {
                    'inputError': errors.email && touched.email,
                    'inputValid': !errors.email && touched.email,
                  })}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className='errorMessage'
                />
              </div>
              <div className='containerField'>
                <label htmlFor={phoneFieldId} className='label'>
                  Phone
                </label>
                <Field
                  id={phoneFieldId}
                  type="text"
                  name="phone"
                  className={clsx('input', {
                    'inputError': errors.phone && touched.phone,
                    'inputValid': !errors.phone && touched.phone,
                  })}
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className={'errorMessage'}
                />
              </div>
              <div className='containerButton'>
                <button type="submit" className='button'>
                  Add Contact
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
