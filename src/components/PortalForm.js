import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const PortalForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "15 karakter veya daha az olmalıdır")
        .required("Zorunlu"),
      lastName: Yup.string()
        .max(20, "20 karakter veya daha az olmalıdır")
        .required("Zorunlu"),
      email: Yup.string().email("Geçersiz email adres").required("Zorunlu"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Ad</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="errormessage">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Soyad</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="errormessage">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Adres</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div className="errormessage">{formik.errors.email}</div>
      ) : null}

      <button type="submit">Gönder</button>
      <Link className="form-link" to="/">
        Anasayfa Git
      </Link>
    </form>
  );
};
