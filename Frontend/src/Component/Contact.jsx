import React from 'react'
import { useForm } from 'react-hook-form';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm();

const onSubmit = (data) => {
    console.log(data);
    reset();
};

  return (
    <div>

  <h1 className='text-center mt-16 font-extrabold text-4xl  m-auto'>Feel Free To Contect Us</h1>
  <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958660434!2d75.69903442009262!3d22.724204998424973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1718906208377!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <br />
  <form  onSubmit={handleSubmit(onSubmit)} >
  <label className="input input-bordered w-1/2 m-auto flex items-center justify-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="email" className="grow w-1/2 m-auto" placeholder="Email" {...register("email", { required: "Email is required" })} />
</label>
{errors.email && <span className='text-red-600 text-sm flex justify-center'>{errors.email.message}</span>}
<br /><br />

<label className="input input-bordered w-1/2  m-auto flex justify-center items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" {...register("text", { required: "Username is required" })} />
</label>
{errors.text && <span className='text-red-600 text-sm flex justify-center'>{errors.email.message}</span>}
<br /><br />
<label className='m-auto flex justify-center items-center'>
<input type="submit" value="Submit" className="btn" />
</label>
    </form>

    </div>
  )
}

export default Contact