import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import { useForm } from 'react-hook-form';

const ResetPasswordConfirmPage = () => {

    const { uid, token } = useParams();
    const { passwordResetConfirm, errMsg } = useAuthContext();
    const navigate = useNavigate()
  
    const { register, handleSubmit, watch } = useForm();
  
    const onSubmit = async (data) => {
        const Passwordpayload = {
          uid: uid,
          token: token,
          new_password: data.new_password
        };
      
        const result = await passwordResetConfirm(Passwordpayload);
        if (result?.success) {
          alert(result.message); 
          navigate('/login')
        } else {
          alert("Password reset failed");
        }
      };
      

    return (
        <div className="p-5 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Set New Password</h2>

      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4">
        <input
          type="password"
          id='password'
          placeholder="New Password"
          className="input input-bordered w-full"
          {...register("new_password", { required:true })}
        />

        <input
          type="password"
          id='password2'
          placeholder="Confirm New Password"
          className="input input-bordered w-full"
          {...register("re_new_password" , {required:true, 
            validate: (value) => value === watch('new_password') || "Password do not match."},                
          )}

        />

        <button type="submit" className="btn btn-primary w-full">
          Reset Password
        </button>
      </form>

      {errMsg && <p className="text-error mt-4">{errMsg}</p>}
    </div>
    );
};

export default ResetPasswordConfirmPage;