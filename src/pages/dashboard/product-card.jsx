import toast from "react-hot-toast";
import { server } from "../../lib/axios-client";

export const ProductCard = ({ bookName, image, available, _id, refetch }) => {
  const handleAd = () => {
    toast.promise(server.put(`/ad/${_id}`), {
      loading: "sending",
      success: "added to homepage",
      error: "try again",
    });
  };
  const handleRemove = () => {
    const confirmation = window.confirm("are you sure?");
    if (confirmation) server.delete(`book/${_id}`).then((res) => refetch());
  };

  return (
    <>
      <div className='card card-side h-36 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='Movie' className='w-56 h-full object-cover' />
        </figure>
        <div className='card-body justify-between'>
          <div>
            <h2 className='card-title text-sm'>
              {bookName}
              <span>
                <div className='badge badge-accent'>
                  {available ? "unsold" : "sold"}
                </div>
              </span>
            </h2>
          </div>
          <div className='card-actions justify-between items-center'>
            <button
              onClick={handleAd}
              className='btn btn-success btn-outline btn-xs'
            >
              Show in homepage
            </button>
            <button onClick={handleRemove} className='btn btn-error btn-xs'>
              Remove this book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
