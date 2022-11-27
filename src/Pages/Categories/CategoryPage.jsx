import React,{ useContext,useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData,useLocation,useNavigate } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CatBanner from '../../Components/CatBanner/CatBanner';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Spinner/Spinner';
import { UserContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';


const CategoryPage = () => {
  
  const data = useLoaderData()
  const { products,category } = data;
  const { user } = useContext(UserContext);
  // const {userData}=useContext(DataContext)
  const [currentItem,setCurrentItem] = useState(null);
 const {
   register,
   formState: { errors },
   handleSubmit,
 } = useForm();
 const [loading, setLoading] = useState(false);
 //seting title
 UseTitle("Add Category");
  const navigate = useNavigate();
  const location = useLocation();
 if (loading) {
   return <Spinner></Spinner>;
 }
const handleBook = (item) => {
      if (user === null) {
        return (
         navigate('/login',{state: {from: location},replace: true})
        );
      }
   
   
      setCurrentItem(item);
    
    
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
   fetch("http://localhost:5000/booking", {
     method: "POST",
     headers: { "content-type": "application/json" },
     body: JSON.stringify(data),
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.acknowledged) {
          setLoading(false);
          setCurrentItem(null);
          toast.success("Product Booked Successfully");
         
          
        } else {
          setCurrentItem(null);
          setLoading(false);
          toast.error('this product is already booked');
        }
     })
     .catch((err) => {
       setLoading(false);
     });


  };
  const handleReport = (item) => {
const agree = window.confirm("Are you sure to report this product?");
    if (agree) {
    item.reporterEmail = user.email;
    item.reporterName = user.displayName;

    fetch("http://localhost:5000/report", {
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
  // console.log(category);

    // const [products,setProducts] = useState([]);

      // useEffect(() => {
      //   axios
      //     .get("http://localhost:5000/veloce")
      //       .then((data) => { setProducts(data.data); setLoading(false)})
      //     .catch((error) => {
      //       // handle error
      //         setLoading(false);
      //       console.log(error);
      //     });
      // },[]);
    
    //  if (loading) {
    //    return <Spinner></Spinner>;
    //  }
    
    return (
      <div>
        <CatBanner
          img={category.coverImg}
          title={category.categoryName}
        ></CatBanner>
        <section class="bg-white dark:bg-gray-900 my-20">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Best Sellers
            </h1>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
              {products.map((item) => (
                <ProductCard children item={item} key={item._id}>
                  <label
                    htmlFor="my-modal"
                    className="btn btn-success mt-5"
                    onClick={() => handleBook(item)}
                  >
                    {" "}
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
            </div>
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
      </div>
    );
};

export default CategoryPage;