import React,{ useContext,useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import CatBanner from '../../Components/CatBanner/CatBanner';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Spinner/Spinner';
import { DataContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';
const CategoryPage = () => {
  const data = useLoaderData()
  const { products,category } = data;
  const {userData}=useContext(DataContext)
  const [currentItem,setCurrentItem] = useState([]);
 const {
   register,
   formState: { errors },
   handleSubmit,
 } = useForm();
 const [refresh, setRefresh] = useState(false);
 //seting title
 UseTitle("Add Category");

 if (refresh) {
   return <Spinner></Spinner>;
 }

 const handleAddcategory = (data) => {
   setRefresh(true);

   // inserting new Category
   fetch("http://localhost:5000/add-category", {
     method: "POST",
     headers: { "content-type": "application/json" },
     body: JSON.stringify(data),
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.acknowledged) {
         toast.success("Category Added Successfully");
         setRefresh(false);
       }
     })
     .catch((err) => {
       setRefresh(false);
     });
   setRefresh(false);
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
                <ProductCard children item={item}>
                  <label
                    htmlFor="my-modal"
                    className="btn btn-success mt-5"
                    onClick={() => setCurrentItem(item)}
                  >
                    Book Now
                  </label>
                </ProductCard>
              ))}
            </div>
            <BookingModal
              handleAddcategory={handleAddcategory}
              userData={userData}
              currentItem={currentItem}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            ></BookingModal>
          </div>
        </section>
      </div>
    );
};

export default CategoryPage;