import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import UseTitle from '../../../hooks/UseTitle';

const AddProducts = () => {
  
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [refresh, setRefresh] = useState(false);
  //seting title
  UseTitle("Add Products");

    if (refresh) {
        return <Spinner></Spinner>
    }
    
    const handleAddProduct = (data) => {
    setRefresh(true);
    // e.preventDefault();
    // const form = e.target;
    // const name = form.name.value;
    // const price = form.price.value;
    // const desc = form.desc.value;
    // const image = form.img.value;
    // const product = { name, price, desc, image };
        console.log(data);
    // inserting new Product
    fetch(
      "https://acsolutions-server-n403euqde-rafiqcoder.vercel.app/add-Product",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Product Added Successfully");
          setRefresh(false);
          
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto my-20">
      <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
        <div className=" text-center">
          <h2 className="text-2xl text-primary text-center outline outline-1">
            Add New Product
          </h2>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name & Modal</span>
            </label>
            <input
           
                 {...register("name", {
                required: "Product is required",
              })}
             
              placeholder="name"
              className="input input-bordered"
            />
                  </div>
                  {errors.name && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.name?.message}
            </p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "location is required",
              })}
              placeholder="Location"
              className="input input-bordered"
            />
          </div>
          {errors.location && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.location?.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            {...register("desc", {
              required: "Product Description is required",
            })}
            className="textarea h-24 textarea-bordered"
            placeholder="Short Description"
          />
        </div>
        {errors.desc && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.desc?.message}
          </p>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product image Link</span>
          </label>
          <input
            type="text"
            {...register("img", {
              required: "img is required",
            })}
            placeholder="Product image Link"
            className="input input-bordered"
          />
        </div>
        {errors.img && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.img?.message}
          </p>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            {...register("number", {
              required: "number is required",
            })}
            placeholder="Your Mobile Number"
            className="input input-bordered"
          />
        </div>
        {errors.number && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.number?.message}
          </p>
        )}
        <div className="flex gap-3 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Orginal price</span>
            </label>
            <input
              type="number"
              {...register("orginalPrice", {
                required: "Orginal Price is required",
              })}
              placeholder="orginal price"
              className="input input-bordered"
            />
          </div>
          {errors.orginalPrice && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.orginalPrice?.message}
            </p>
          )}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Selling price</span>
            </label>
            <input
              type="number"
              {...register("sellPrice", {
                required: "Selling Price is required",
              })}
              name="sellPrice"
              placeholder="Selling price"
              className="input input-bordered"
            />
          </div>
          {errors.sellPrice && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.sellPrice?.message}
            </p>
          )}
        </div>

        <div className="flex gap-3 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <input
              {...register("usedTime", { required: "Used Time is required" })}
              placeholder="Years of use"
              className="input input-bordered"
            />
          </div>
          {errors.usedTime && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.usedTime?.message}
            </p>
          )}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Condition</span>
            </label>
            <select
              {...register("condition", { required: "Condition is required" })}
              className="border p-3 rounded-lg"
            >
              <option value="">Select...</option>
              <option value="excelent">Excelent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>
          {errors.condition && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.condition?.message}
            </p>
          )}
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            add New
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProducts;