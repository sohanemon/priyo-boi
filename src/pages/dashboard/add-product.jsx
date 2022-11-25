import { async } from "@firebase/util";
import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";
import useCategory from "../../hooks/useCategory";
import { server } from "../../lib/axios-client";

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const categories = useCategory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data?.condition === "default" || data?.category_id === "default") {
      toast.error("Check the categories/conditions");
      return;
    }
    const formData = new FormData();
    formData.append("image", data.image[0]);
    toast
      .promise(
        axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api}`,
          formData
        ),
        {
          error: "error",
          success: "success",
          loading: "loading",
        }
      )
      .then((res) => {
        server
          .post("books", {
            ...data,
            image: res.data.data.url,
            addedBy: user?.email,
            available: true,
            date: format(new Date(), "PP"),
          })
          .then(() => navigate("/dashboard/my-products"));
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ----------------------------- first row ----------------------------- */}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.bookName?.message}</span>
            </label>
            <input
              {...register("bookName", {
                required: "bookName is required",
              })}
              type='text'
              placeholder='Book name'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.bookAuthor?.message}</span>
            </label>
            <input
              {...register("bookAuthor", {
                required: "bookAuthor is required",
              })}
              type='text'
              placeholder='Author'
              className='input input-bordered'
            />
          </div>
        </div>
        {/* ----------------------------- second row ---------------------------- */}{" "}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.category_id?.message}</span>
            </label>
            <select
              defaultValue={"default"}
              {...register("category_id", {
                required: "Category is required",
              })}
              className='select w-full select-bordered'
            >
              <option disabled value={"default"}>
                Select a category
              </option>
              {categories?.map((_) => (
                <option key={_._id} value={_._id}>
                  {_.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-control '>
            <label className='label'>
              <span className='text-error'>{errors?.condition?.message}</span>
            </label>
            <select
              defaultValue={"default"}
              {...register("condition", {
                required: "Condition is required",
              })}
              className='select w-full select-bordered'
            >
              <option disabled value={"default"}>
                Select a condition
              </option>
              <option value={"excellent"}>Excellent</option>
              <option value={"good"}>Good</option>
              <option value={"fair"}>Fair</option>
            </select>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.image?.message}</span>
            </label>
            <input
              {...register("image", {
                required: "Cover picture is required",
              })}
              type='file'
              className='file-input file-input-bordered w-full '
            />
          </div>
        </div>
        {/* ----------------------------- third row ----------------------------- */}{" "}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.number?.message}</span>
            </label>
            <input
              {...register("number", {
                required: "Number is required",
              })}
              type='number'
              placeholder='Phone number'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.location?.message}</span>
            </label>
            <input
              {...register("location", {
                required: "Location is required",
              })}
              type='text'
              placeholder='Location'
              className='input input-bordered'
            />
          </div>
        </div>
        {/* ---------------------------- forth row ---------------------------- */}{" "}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>{errors?.resalePrice?.message}</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "resalePrice is required",
              })}
              type='number'
              placeholder='Resale Price'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>
                {errors?.originalPrice?.message}
              </span>
            </label>
            <input
              {...register("originalPrice", {
                required: "originalPrice is required",
              })}
              type='number'
              placeholder='Original Price'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='text-error'>
                {errors?.yearOfPurchase?.message}
              </span>
            </label>
            <input
              {...register("yearOfPurchase", {
                required: "yearOfPurchase is required",
              })}
              type='number'
              placeholder='Purchase year'
              className='input input-bordered'
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='text-error'>{errors?.description?.message}</span>
          </label>
          <textarea
            {...register("description")}
            className='textarea textarea-bordered w-full'
            placeholder='Description'
          ></textarea>
        </div>
        <button className='btn btn-primary  w-full mt-10 rounded-lg'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
