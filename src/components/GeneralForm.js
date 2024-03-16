import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const GeneralForm = () => {
  return (
    <div>
      <h1>Kayıt Ol</h1>
      <Formik
        initialValues={{
          email: "",
          age: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Zorunlu alan";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Geçersiz email adres";
          }
          if (!values.password) {
            errors.password = "Zorunlu alan";
          }
          if (!values.password) {
            errors.password = "Zorunlu alan";
          } 
          else if (values.password != values.confirmPassword) {
            errors.confirmPassword = "Şifreler eşleşmiyor kardeş";
          }
          if (!values.age) {
            errors.age = "Zorunlu alan";
          } else if (values.age < 0) {
            errors.age = "Bu ne biçim yaş la";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email giriniz" />
            <ErrorMessage
              className="errormessage"
              name="email"
              component="div"
            />
            <Field type="text" name="age" placeholder="yaş giriniz" />
            <ErrorMessage className="errormessage" name="age" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="confirmPassword" />
            <ErrorMessage className="errormessage" name="confirmPassword" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
