import React from 'react';

const BookingModal = ({
  handleAddcategory: handleAddBooking,
   user,
  currentItem,
    handleSubmit,
  register,
errors
}) => {

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex-shrink-0 w-full max-w-xl  bg-base-100 mx-auto">
            <form
              onSubmit={handleSubmit(handleAddBooking)}
              className="card-body"
            >
              <div className=" text-center">
                <h2 className="text-2xl text-primary text-center">Book</h2>
              </div>
              <div className=" text-center">
                <h2 className="text-2xl text-center">{currentItem.name}</h2>
                <p className="">
                  Resale:
                  <span className="text-warning font-semibold">
                    {currentItem.sellPrice}
                  </span>
                  TK
                </p>
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Buyer Name
                </label>
                <input
                  {...register("buyerName")}
                  disabled
                  defaultValue={user?.displayName}
                  className="border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                {errors.buyerName && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.buyerName?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Buyer Email
                </label>
                <input
                  {...register("buyerEmail")}
                  defaultValue={user?.email}
                  disabled
                  className="border rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-4 w-full pl-3 mt-2"
                />
                {errors.buyerEmail && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.buyerEmail?.message}
                  </p>
                )}
              </div>
              <div className="flex gap-3 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Location</span>
                  </label>
                  <input
                    {...register("    data.itemName = currentItem.name;")}
                    defaultValue={currentItem?.location}
                    disabled
                    className="input input-bordered"
                  />
                </div>
           
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Sale Price</span>
                  </label>
                  <input
                    type="number"
                    {...register("salePrice")}
                    defaultValue={currentItem?.sellPrice}
                    disabled
                    className="input input-bordered"
                  />
                </div>
                {errors.salePrice && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.salePrice?.message}
                  </p>
                )}
              </div>
              <div className="flex gap-3 justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="number"
                    {...register("mobile", {
                      required: "Mobile Number is required",
                    })}
                    placeholder="Mobile Number"
                    className="input input-bordered"
                  />
                </div>
                {errors.mobile && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.mobile?.message}
                  </p>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Meeting Location</span>
                  </label>
                  <input
                    type="text"
                    {...register("meetingLocation", {
                      required: "location is required",
                    })}
                    placeholder="Location"
                    className="input input-bordered"
                  />
                </div>
                {errors.meetingLocation && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.meetingLocation?.message}
                  </p>
                )}
              </div>

              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo quae non praesentium assumenda itaque deleniti reiciendis dolores sapiente eligendi repudiandae vel, dolor ducimus corrupti veniam natus nesciunt quas ea. */}

            
                <button
                  
                  type="submit"
                  className="btn btn-primary"
                >
                  Book
                </button>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;