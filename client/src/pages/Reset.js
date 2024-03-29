import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { validatePassword } from '../helper/validate';
import { resetPassword } from '../helper/pwdHelper';
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      Password: '',
      confirmPassword: ""
    },
    validate: resetPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => { console.log(values) }
  })
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <span className="py-4 text-md w-2/3 text-center text-gray-500">
              Set New Password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="text-box flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('Password')} type="password" placeholder='set new password' className={styles.input} />
              <input {...formik.getFieldProps('confirmPassword')} type="password" placeholder='Repeat Password' className={styles.input} />

              <button type='submit' className={styles.btn}>Reset</button>
            </div>
            <div className="text-center py-">
              <span className='text-blue-500'>No account? <Link to="/reset" className='text-red-500'> Register here</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset
