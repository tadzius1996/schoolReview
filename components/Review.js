import { urlFor } from "../sanity"
import Image from "next/image"

const Review = ({ review }) => {
  console.log(review)
  const imageUrl = urlFor(review.person.image)
    .width(100)
    .height(100)
    .url()

  return (
    <div className="review-box mt-7 ">
      <div className="flex items-center gap-3">
        <Image
          src={imageUrl}
          alt='review-image'
          width={50}
          height={50}
          className="rounded-full"
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