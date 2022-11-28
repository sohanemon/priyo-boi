import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-provider";
import placeOrder from "../../utils/place-order";

const Modal = ({ _id, addedBy, resalePrice, setShowModal }) => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    placeOrder(
      _id,
      addedBy,
      resalePrice,
      user?.email,
      user?.typeOfUser,
      data.phoneNumber,
      data.location
    ).then(() => setShowModal(false));
  };

  return (
    <>
      <input type='checkbox' id='order-modal' className='modal-toggle' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='modal modal-bottom sm:modal-middle'
      >
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Congratulations random Internet user!
          </h3>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              defaultValue={user?.name}
              type='text'
              disabled
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              defaultValue={user?.email}
              disabled
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone number</span>
            </label>
            <input
              {...register("phoneNumber")}
              type='text'
              placeholder='01626...'
              required
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Meeting location</span>
            </label>
            <input
              {...register("location")}
              type='text'
              required
              placeholder='eg. Dhaka'
              className='input input-bordered'
            />
          </div>
          <div className='modal-action'>
            <label
              itemType='submit'
              htmlFor='order-modal'
              className='btn btn-error btn-sm'
            >
              cancel
            </label>
            <button className='btn btn-sm btn-success'>submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Modal;
