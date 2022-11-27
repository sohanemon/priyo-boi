const ProductTable = ({ i, bookData, seller, price, refetch }) => {
  const { bookName, image } = bookData;

  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <td>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-circle w-12 h-12'>
                <img src={image} alt='' />
              </div>
            </div>
            <div>
              <div className='font-bold'>{bookName}</div>
            </div>
          </div>
        </td>
        <td>
          <p className=''>{seller}</p>
        </td>
        <td>
          <p className=''>{price}</p>
        </td>
        <td>
          <button className='btn btn-xs btn-success'>Pay</button>
        </td>
      </tr>
    </>
  );
};

export default ProductTable;
