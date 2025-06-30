import { Link } from 'react-router'
import default_image from '../../assets/default_product.jpg'
const ProductItem = ({ product }) => {
	return (
		<Link to={`/shop/${product.id}`}>
			<div className="card bg-base-100 w-96 shadow-sm">
				<figure className="px-10 pt-10">
					<img
						src={
							product.images.length > 0 ? product.images[0].image : default_image
						}
						alt="Shoes"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title"> {product.name} </h2>
					<p className="line-clamp-2"> {product.description} </p>
					<p className="font-bold"> {product.price} Tk </p>
					<div className="card-actions">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductItem
