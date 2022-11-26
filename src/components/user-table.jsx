import React from "react";
import { server } from "../lib/axios-client";
export function UserTable({ i, uid, thumbnail, name, email, refetch }) {
  const handleDeleteUser = () => {
    server.delete(`user/${uid}`).then(() => refetch());
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
      <td>
        <button onClick={handleDeleteUser} className='btn btn-xs btn-error'>
          Delete
        </button>
      </td>
    </tr>
  );
}
