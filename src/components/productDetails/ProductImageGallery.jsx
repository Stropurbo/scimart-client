import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import defaultImage from '../../assets/default_product.jpg'
import { Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';


const ProductImageGallery = ({ images, productName }) => {

    const [thumbsSwiper] = useState(null)
    const displayImages = images.length > 0 ? images : [defaultImage]
                                                                                    
    return (
        <div className='rounded-lg  overflow-hidden'>
        <Swiper 
        modules={[Thumbs]} 
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        className='product-main-slider'
        > 
            {displayImages.map((imageObj, index) => (

                <SwiperSlide key={index}>
                    
                <div className='aspect-square bg-base-100'>
                <img src={imageObj.image} alt={productName} 
                className='h-full w-full object-center'
                />
                </div>

                </SwiperSlide>
            ))}
                
            </Swiper>
        </div>
    );
};

export default ProductImageGallery;