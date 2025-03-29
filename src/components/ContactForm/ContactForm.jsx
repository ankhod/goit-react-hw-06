import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required'),
});

export default function ContactForm({ onAddContact }) {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
