import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCategory from "../../hooks/useCategory";
import { server } from "../../lib/axios-client";

const AddProduct = () => {
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
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api}`,
        formData
      )
      .then((res) => {
        server
          .post("books", { ...data, image: res.data.data.url })
          .then((res) => console.log(res));
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ----------------------------- first row ----------------------------- */}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Book name</span>{" "}
              <span className='text-error'>{errors?.bookName?.message}</span>
            </label>
            <input
              {...register("bookName", {
                required: "bookName is required",
              })}
              type='text'
              placeholder='Padma Nodir Majhi'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Author/Publication</span>{" "}
              <span className='text-error'>{errors?.bookAuthor?.message}</span>
            </label>
            <input
              {...register("bookAuthor", {
                required: "bookAuthor is required",
              })}
              type='text'
              placeholder='Manik Bandapaddhaya'
              className='input input-bordered'
            />
          </div>
        </div>
        {/* ----------------------------- second row ---------------------------- */}{" "}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Category</span>{" "}
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
              <span className='label-text'>Condition</span>{" "}
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
              <span className='label-text'>Cover Image</span>
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
              <span className='label-text'>Phone Number</span>{" "}
              <span className='text-error'>{errors?.number?.message}</span>
            </label>
            <input
              {...register("number", {
                required: "Number is required",
              })}
              type='number'
              placeholder='01626420807'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Location</span>{" "}
              <span className='text-error'>{errors?.location?.message}</span>
            </label>
            <input
              {...register("location", {
                required: "Location is required",
              })}
              type='text'
              placeholder='Jhenaidaha'
              className='input input-bordered'
            />
          </div>
        </div>
        {/* ---------------------------- forth row ---------------------------- */}{" "}
        <div className='flex [&>*]:grow gap-5'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Resale Price</span>{" "}
              <span className='text-error'>{errors?.resalePrice?.message}</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "resalePrice is required",
              })}
              type='number'
              placeholder='123'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Original Price</span>{" "}
              <span className='text-error'>
                {errors?.originalPrice?.message}
              </span>
            </label>
            <input
              {...register("originalPrice", {
                required: "originalPrice is required",
              })}
              type='number'
              placeholder='123'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Purchase year</span>{" "}
              <span className='text-error'>
                {errors?.yearOfPurchase?.message}
              </span>
            </label>
            <input
              {...register("yearOfPurchase", {
                required: "yearOfPurchase is required",
              })}
              type='number'
              placeholder='2016'
              className='input input-bordered'
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Description</span>{" "}
            <span className='text-error'>{errors?.description?.message}</span>
          </label>
          <textarea
            {...register("description")}
            className='textarea textarea-bordered w-full'
            placeholder='Something relevant to your book.'
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
