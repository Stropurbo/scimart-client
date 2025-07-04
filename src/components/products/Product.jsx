import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ErrorAlert from '../ErrorAlert';
import { Link } from 'react-router';
import apiClient from '../../services/api-client';

const Product = () => {

    const [product, setProduct] = useState([])
    const [isloading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        apiClient.get("/products/")
        .then(res => setProduct(res.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));        
    }, [])
    
    return (
        <section className='mx-auto py-15'>
            <div className='flex justify-between px-5 md:px-8 items-center'>
            <h1 className='font-bold text-xl md:text-4xl'>Trending Product</h1>
            <Link to="/all-product">View All</Link>
            </div>

            
           {isloading && (
             <div className='flex justify-center items-center'>
             <span className="loading loading-spinner loading-lg text-center m-5 "></span>
             </div>
           )}

           {error && (
            <ErrorAlert errormessage={"Product Load Failed!"} />
           )}
        
        
        {!isloading && !error && product.length > 0 && (
            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={2}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={false}
            navigation={false}
            slidesPerView={1}
            
            breakpoints={{
                640: {slidesPerView: 2},
                1024: {slidesPerView: 3}
    
            }}        
            >
                {product.map((product) =>  (
    
                    <SwiperSlide key={product.id} className='flex justify-center'>
                        {/* <ProductItem key={product.id} product={product} />    */}
                        <ProductItem product={product} />                   
                    </SwiperSlide>
    
                ))}    
            </Swiper>
            

            
        )}
        {!isloading && !error && product.length === 0 && (
            <p className='text-center text-gray-500 font-bold '>Product Not Available</p>
        )}
    
 </section>
);
};

export default Product;