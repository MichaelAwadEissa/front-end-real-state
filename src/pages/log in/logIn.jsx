import React from 'react'
import {useFormik} from 'formik'
import crat2 from '../../assets/logo-no-background.png'
import * as Yup from 'yup'
import axios from 'axios'
export default function Register() {

    let { handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            "user_name":"",
            "password":"",
        },
        onSubmit: register,
        validationSchema:Yup.object({
            user_name:Yup.string().required("User_Name is required").min(5,"User_Name must be more than 5 character").max(25,"Name must be less than 25 character"),
            password:Yup.string().required("password is required").matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,50}$/,"At least one uppercase letter,least one special character,length is between 8 and 50 characters"),
        })
    })

    async function register(){
        let {data} = await axios.post("http://127.0.0.1:8000/user/login/",values)
        console.log(data)
    }
return <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="name" value={values.user_name} name="user_name" type="name" autoComplete="name" placeholder='User_Name' className="block w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.user_name && errors.user_name && <p className='text-red-500'>{errors.user_name}</p>}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
                </div>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="password" value={values.password} name="password" type="password" placeholder='Password' className="block w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm "/>
                    {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="#" className="font-semibold leading-6 text-[#398378] hover:text-[#31C48D]">Sign up</a>
        </p>
    </div>
</div>
    </>
}

