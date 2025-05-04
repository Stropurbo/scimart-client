import ReviewCard from './ReviewCard'

const ReviewList = ({ reviews, user, editReview, setEditReview, editId, setEditId }) => {
	return (
		<div>
			{reviews.map((review) => (
				<ReviewCard
					key={review.id}
					review={review}
					user={user}
					editReview={editReview}
					setEditReview={setEditReview}
					isEditing={editId == review.id}
					onEditClick={() => {
						setEditId(review.id)
						setEditReview({
							id: review.id,
							rating: review.ratings,
							comment: review.comment,
						})
					}}
					onCancelEdit = {() => setEditId(null)}
				/>
			))}
		</div>
	)
}

export default ReviewList
