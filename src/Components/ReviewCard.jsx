import PropTypes from 'prop-types'
import { star } from '../assets/icons'

function ReviewCard( {imgURL, customerName, rating, feedback} ) {
    const image = document.getElementById('img');
    console.log(image);

  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt={customerName} className='rounded-full w-[120px] h-[120px]'/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center gap-2.\'>
            <img id='img' src={star} alt="Rating" width={24} height={24} className='object-contain m-0' /> 
            <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

ReviewCard.propTypes = {
    customerName: PropTypes.string,
    rating: PropTypes.number,
    feedback: PropTypes.string,
}

export default ReviewCard
