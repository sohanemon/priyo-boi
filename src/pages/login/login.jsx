import axios from "axios";
import { useForm } from "react-hook-form";

const Login = ({ reg }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", data.image[0]);
    axios
      .post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imgbb_api}`,
        formData
      )
      .then((res) => console.log(res.data));
  };

  return (
    <section className='mx-auto w-full max-w-lg'>
      <div className='text-center lg:text-left'>
        <h1 className='text-5xl font-bold'>Login now!</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card flex-shrink-0 w-full shadow-2xl bg-base-100'
      >
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='email'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Location</span>
            </label>
            <input
              type='text'
              placeholder='eg. Faridpur'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered'
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>{" "}
          <input
            {...register("image")}
            type='file'
            className='file-input file-input-bordered file-input-primary w-full '
          />
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
