import React,{ useContext,useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';
import { UserContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';



     
const AdvertiseSection = ({ products, refresh, setRefresh }) => {
  const { user } = useContext(UserContext);
  const [currentItem, setCurrentItem] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);
  //seting title
  UseTitle("Add Category");

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleAddBooking = (data) => {
    setLoading(true);
    data.buyerEmail = user.email;
    data.buyerName = user.displayName;
    data.itemName = currentItem.name;
    data.itemImg = currentItem.img;
    data.condition = currentItem.condition;
    data.sellerLocation = currentItem.location;
    data.sellerEmail = currentItem.email;
    data.sellerName = currentItem.sellerName;
    data.salePrice = currentItem.sellPrice;
    data.product_id = currentItem._id;
    data.status = "pending";

    fetch(`http://localhost:5000/booking?email=${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCurrentItem(null);
          toast.success("Product Booked Successfully");
          setRefresh(!refresh);
          setLoading(false);
        } else {
          setCurrentItem(null);
          setLoading(false);
          toast.error('this product is already booked');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleReport = (item) => {
    const agree = window.confirm("Are you sure to report this product?");
    if (agree) {
      item.reporterEmail = user.email;
      item.reporterName = user.displayName;

      fetch("http://localhost:5000/report",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Reported successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 my-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Advertised Products
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard children item={item}>
              <label
              
                htmlFor="my-modal"
                className="btn btn-success mt-5"
                onClick={() => setCurrentItem(item)}
              >
               
                Book Now
              </label>
              <div
                className="tooltip ml-2 "
                data-tip="Report to Admin"
                onClick={() => handleReport(item)}
              >
                <button className=" rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-red-600 flex-shrink-0 w-8 h-8 bg-white rounded-full p-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </ProductCard>
          ))}
        </div>{" "}
        {currentItem && (
          <BookingModal
            handleAddcategory={handleAddBooking}
            user={user}
            currentItem={currentItem}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AdvertiseSection;