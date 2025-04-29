import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const ResendActivation = () => {

    const { ResendActivationEmail } = useAuthContext();
    // const { uid, token } = useParams();
    const { register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        const result = await ResendActivationEmail(data) 
        if(result){
            alert(result.message)
        }else{
            alert("Activation Mail Send failed");
        }
    }

    return (
        <div className='flex justify-center p-8 '>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            >

           <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body relative">                    
                    <h2 className="card-title text-2xl">Welcome to SciMart</h2>
                    <a 
                    href='/login'
                    className="absolute top-0 right-0 mt-2 mr-2 text-sm text-primary cursor-pointer">
                        Login
                    </a>
                    <figure className="px-10">
                        <img
                        src="https://i.ibb.co.com/gLkC0wyC/gmail-icon-google-product-illustration-free-png.webp"
                        alt="Shoes"
                        className="rounded-xl p-5" />
                    </figure>
                    <p>Please check your <strong>E-Mail</strong> inbox or spam folder.
                        Click on the <strong>Link</strong> to activate your account.
                    </p>
                    <p>If you did't get any e-mail.</p>
                    
                    <input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="input input-bordered w-full"
                        {...register("email" , {required:true})}
                        /> 
                    
                    <div className="card-actions justify-end pt-4">
                    <button type='submit' className="btn btn-primary">Resend Activation Link</button>
                    </div>
                </div>
                </div>

            </form>
        </div>
    );
};

export default ResendActivation;