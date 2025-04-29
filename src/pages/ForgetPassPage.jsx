import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';

const ForgetPassPage = () => {
    const [successMsg, setSuccessMsg] = useState("")
    const navigate = useNavigate()

    const { passwordReset } = useAuthContext()

    const { handleSubmit, register } = useForm()

    const onSubmit = async(data) => {
        try {
          const result= await passwordReset(data);
          if(result.success){
            setSuccessMsg(result.message);            
            setTimeout(() => {
              navigate('/login');
            }, 2000);
          }
        } catch (error) {
          console.log(error);
        }
        
    }


    return (
        <div className='p-5'>

          {successMsg && (
              <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span> {successMsg} </span>
            </div>
            )}

            <h1 className='flex justify-center text-2xl'>Account Password Reset</h1>

            <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
            >
            <div className="form-control flex justify-center">              
              <input
                id="email"
                type="email"
                placeholder="Your-mail@example.com"
                className="input input-bordered w-full md:w-1/4 items-center"
                {...register("email" , {required:true})}               
              />              
            </div>           

            <div className='flex justify-center'>
            <button
              type="submit"
              className="btn btn-primary"             
                >Submit            
            </button>
            </div>

          </form>

           
            
            
        </div>
    );
};

export default ForgetPassPage;