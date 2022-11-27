import { format } from "date-fns";
import moment from "moment";
import React,{ useContext,useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Spinner from '../../../Components/Spinner/Spinner';
import { DataContext,UserContext } from '../../../Context/Context';
import UseTitle from '../../../hooks/UseTitle';
const AddProducts = () => {
    const {user} = useContext(UserContext);
  const [date,setDate] = useState(new Date())
  const { currentUser } = useContext(DataContext);
  const navigate = useNavigate();
  const time = moment().format("MMM Do YYYY, h:mm:ss a");
  const year = format(date,"yyyy");

  // console.log(time);
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
    const sellerName = currentUser.name;
    // const price = form.price.value;
    const verified = currentUser.verified;
        const sellerImage = currentUser.img;
      const email = currentUser.email;
      
      const usedTime = year - data.purchaseYear;
    
    const product = {
      ...data,
      sellerName,
      verified,
      sellerImage,
      email,
      postingDate:time,
      usedTime,
    };
     
    // inserting new Product
    fetch("http://localhost:5000/add-Product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Successfully");
          setRefresh(false);
            navigate('/my-products')
        }
       
      })
      .catch((err) => {
         setRefresh(false);
        console.log(err)
      });
       setRefresh(false);
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
        <div className="flex gap-3 justify-between">
          <div className="form-control w-full">
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Category</span>
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="border p-3 rounded-lg"
            >
              <option value="">Select...</option>
              <option value="veloce">Veloce</option>
              <option value="phonix">Phonix</option>
              <option value="foxter">Foxter</option>
            </select>
          </div>
          {errors.category && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.category?.message}
            </p>
          )}
        </div>
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
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo quae non praesentium assumenda itaque deleniti reiciendis dolores sapiente eligendi repudiandae vel, dolor ducimus corrupti veniam natus nesciunt quas ea. */}
        <div className="flex gap-3 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Year of Purchase</span>
            </label>
            <select
              {...register("purchaseYear", { required: "Purchase Year is required" })}
              className="border p-3 rounded-lg"
            >
              <option value="">Select...</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
            </select>
          </div>
          {errors.purchaseYear && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.purchaseYear?.message}
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