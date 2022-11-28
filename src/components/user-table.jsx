import React from "react";
import toast from "react-hot-toast";
import { server } from "../lib/axios-client";
export function UserTable({
  i,
  uid,
  thumbnail,
  name,
  email,
  refetch,
  seller,
  verified,
}) {
  const handleDeleteUser = () => {
    toast
      .promise(server.delete(`user/${uid}`), {
        loading: "Deleting",
        success: "Successfully deleted",
        error: "try again",
      })
      .then(() => refetch());
  };
  const handleVerifyUser = () => {
    toast
      .promise(server.put(`user/${uid}`), {
        loading: "Verifying",
        success: "Successfully verified",
        error: "try again",
      })
      .then((_) => refetch());
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-circle w-12 h-12'>
              <img src={thumbnail} alt='' />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
          </div>
        </div>
      </td>
      <td>
        <p className=''>{email}</p>
      </td>
      {seller && (
        <td>
          <button
            onClick={handleVerifyUser}
            disabled={verified}
            className='btn btn-xs btn-success'
          >
            {verified ? "Verified" : "Verify"}
          </button>
        </td>
      )}
      <td>
        <button onClick={handleDeleteUser} className='btn btn-xs btn-error'>
          Delete
        </button>
      </td>
    </tr>
  );
}
