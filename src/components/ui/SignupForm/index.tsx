import React from 'react'

import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, FormLabel } from 'formik'

const schema = Yup.object().shape({
    name : Yup.string().required('User name is required'),
    email: Yup.string()
      .required("Email is  required ")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required ")
      .min(8, "Password must be at least 8 characters"),
  });

const index = () => {
    const styles = {
        label: 'block text-gray-700 text-sm font-semibold pt-2 pb-1',
        field:
          ' text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none',
        button:
          ' bg-white text-slate-700 border border-slate-500 font-semibold py-1 px-4 rounded-md hover:bg-blue-500 hover:text-white',
        errorMsg: 'text-red-500 text-sm',
      }
  return (
    <>
     <Formik
        validationSchema={schema}
        initialValues={{ 
            name: '',
            email: '',
            password: '',
         }}
        onSubmit={(values) => {
         
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="border border-slate-200 rounded-md p-2 ">
            <div className="form">

            <Form>
            <label className={styles.label} htmlFor='Name'>
          Full Name
        </label>
        <Field className={styles.field} id='name' name='name' />
        <ErrorMessage component='a' className={styles.errorMsg} name='name' />

        <label className={styles.label} htmlFor='Email'
       >
          Email
        </label>
        <Field className={styles.field} id='email' name='email' placeholder = "abc@gmail.com" />
        <ErrorMessage component='a' className={styles.errorMsg} name='email' />
        <label className={styles.label} htmlFor='Email' >
          Password
        </label>
        <Field className={styles.field} 
        id='password' 
        name='password' 
        placeholder='Password here' 
        type="password"
        />
        <ErrorMessage
          component='a'
          className={styles.errorMsg}
          name='password'
        />
        <div className='mt-8 flex justify-between items-center'>
          <button type='submit' className={styles.button}>
            Sign Up
          </button>
          <div>
          {/* <p className='text-sm text-slate-500 hover:cursor-pointer hover:underline '>Already have an account? Login</p> */}

          </div>
        </div>
      </Form>


          
            </div>
          </div>
        )}
      </Formik>


    </>
  )
}

export default index