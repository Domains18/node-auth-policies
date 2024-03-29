import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { validatePassword } from '../helper/validate';

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      Password: ''
    },
    validate: validatePassword,
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
              Enter the 6 digit OTP to reset your password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="text-box flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('Password')} type="text" placeholder='enter the OTP' className={styles.input} />
              <button type='submit' className={styles.btn}>Recover</button>
            </div>
            <div className="text-center py-">
              <span className='text-blue-500'>Didn't recieve?<Link to="/reset" className='text-red-500'> Resend</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery
