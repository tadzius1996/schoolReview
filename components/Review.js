import { urlFor } from "../sanity"

const Review = ({ review }) => {
console.log(review)
  return (
    <div className="review-box mt-7 ">
      <div className="flex items-center gap-3">
      <img
        src={urlFor(review.person.image)
          .width(50)
          .height(50)
          .crop("focalpoint")
          .auto("format")}
          className='rounded-full'
      />
      <h2>{review.person.name}</h2>
      </div>
      <h1 className="mt-2">{review.rating}</h1>
      <p className="mt-2 text-xl font-semibold">{review.reviewDescriptionTitle}</p>
      <p className="mt-2">{review.reviewDescription}</p>

    <hr className="mt-5 bg-slate-500 opacity-50"/>

    </div>
  )
}

export default Review