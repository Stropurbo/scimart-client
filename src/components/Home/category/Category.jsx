import React, { useEffect, useState } from 'react'
import apiClient from '../../../services/api-client'
import CategoryItem from './CategoryItem'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



const Category = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		apiClient
			.get('/category')
			.then((res) => setCategories(res.data.results))
			.finally(() => setLoading(false))
	}, [])

	return (
		<div>
			<div className="flex justify-between px-5 md:px-8 items-center mb-5">
				<h1 className="font-bold text-xl md:text-4xl">View Categories</h1>
				<a href='shop'>Explore</a>
			</div>

			<div className="flex flex-wrap w-full px-5 justify-around items-center">
				{!loading && categories.length > 0 && (
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={10}
						centeredSlides={false}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={false}
						navigation={false}
						slidesPerView={1}
						breakpoints={{
							320: { slidesPerView: 1 },
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 4 },
							1280: { slidesPerView: 5 },
						}}
					>
						{categories.map((category, index) => (
							<SwiperSlide key={category.id}>
								<CategoryItem
									index={index}
									category={category}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	)
}

export default Category
