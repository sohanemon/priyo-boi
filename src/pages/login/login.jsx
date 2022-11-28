import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";
import useJwt from "../../hooks/use-Jwt";
import { server } from "../../lib/axios-client";
import sliceFirebaseError from "../../utils/slice-error";

const Login = ({ reg }) => {
  const { emailSignUp, emailLogin, googleLogin } = useAuth();
  const [firebaseError, setFirebaseError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const token = useJwt(email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    setFirebaseError("");
    if (!reg) {
      emailLogin(data)
        .then((res) => {
          setEmail(res.user.email);
          setLoading(false);
        })
        .catch((err) => {
          setFirebaseError(sliceFirebaseError(err));
          setLoading(false);
        });
      return;
    }
    emailSignUp(data)
      .then(({ user }) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api}`,
            formData
          )
          .then((res) => {
            server
              .post("user", {
                name: data.name,
                email: data.email,
                thumbnail: res.data.data.thumb.url,
                uid: user.uid,
                typeOfUser: data.typeOfUser,
                location: data.location,
              })
              .then((res) => {
                setLoading(false);
                setEmail(res.user.email);
                window.location.pathname = "/";
              });
          });
      })
      .catch((err) => {
        setFirebaseError(sliceFirebaseError(err));
        setLoading(false);
      });
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setFirebaseError("");
    googleLogin()
      .then(({ user }) => {
        server
          .post("user", {
            name: user.displayName,
            email: user.email,
            thumbnail: user.photoURL,
            uid: user.uid,
            typeOfUser: "buyer",
          })
          .then((res) => {
            setLoading(false);
          });
      })
      .catch((err) => setFirebaseError(sliceFirebaseError(err)));
  };

  return (
    <section className='mx-auto w-full max-w-lg'>
      <div className='text-center lg:text-left'>
        <h1 className='text-3xl mb-3 font-bold'>
          {reg ? "Register" : "Login"} now!
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card flex-shrink-0 w-full shadow-2xl bg-base-100'
      >
        <div className='card-body'>
          {reg && (
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
                <span className='text-error'>{errors?.name?.message}</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type='text'
                placeholder='Your name'
                className='input input-bordered'
              />
            </div>
          )}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>{" "}
              <span className='text-error'>{errors?.email?.message}</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type='text'
              placeholder='email'
              className='input input-bordered'
            />
          </div>
          {reg && (
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Location</span>{" "}
                <span className='text-error'>{errors?.location?.message}</span>
              </label>
              <input
                {...register("location", { required: "Location is required" })}
                type='text'
                placeholder='eg. Faridpur'
                className='input input-bordered'
              />
            </div>
          )}
          {reg && (
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Express yourself as</span>{" "}
                <span className='text-error'>{errors?.location?.message}</span>
              </label>
              <select
                defaultValue={"buyer"}
                {...register("typeOfUser")}
                className='select w-full'
              >
                <option disabled>Express yourself as</option>
                <option value={"buyer"}>Buyer</option>
                <option value={"seller"}>Seller</option>
              </select>
            </div>
          )}
          {reg && (
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Profile Image</span>
                <span className='text-error'>{errors?.image?.message}</span>
              </label>
              <input
                {...register("image", {
                  required: "Profile picture is required",
                })}
                type='file'
                className='file-input file-input-bordered file-input-primary w-full '
              />
            </div>
          )}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>{" "}
              <span className='text-error'>{errors?.password?.message}</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type='password'
              placeholder='password'
              className='input input-bordered'
            />

            <div className='flex justify-between items-center'>
              <span className='text-error text-sm'>{firebaseError}</span>
              {!reg && (
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              )}
            </div>
          </div>

          <div className='form-control mt-6'>
            <button className='btn btn-primary'>
              {loading ? "Loading..." : reg ? "Register" : "Login"}
            </button>
            {!reg && (
              <button
                onClick={handleGoogleLogin}
                className='btn bg-blue-600 hover:bg-blue-700 mt-4'
              >
                Continue with Google
              </button>
            )}
          </div>
          <p className='text-sm'>
            {reg ? "Already have an " : "No "}account?{" "}
            <Link className='link' to={reg ? "/login" : "/register"}>
              {reg ? "Sign in" : "Sign Up"}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
