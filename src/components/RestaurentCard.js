import { img_URL, res_img_URL } from "../utils/constants"

const RestaurentCard = ({ resData }) => {

  console.log('resData', resData);
  return (
    <div className='res-card m-4 p-4 w-52 bg-gray-100 rounded-lg hover:bg-gray-200 '>
      <img className="res-logo w-52 h-24 rounded-lg" src={res_img_URL + resData?.cloudinaryImageId} alt='res logo' />
      <h3 className="font-bold py-2 text-lg" style={{ marginBottom: 5 }}>{resData?.name}</h3>
      <h4 className="res-cuisines" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{resData?.cuisines.join(',')}</h4>
      <h4>{resData?.avgRating} stars</h4>

    </div>
  )
}


 export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white px-1 ml-6 mt-1 rounded-lg">Open</label>
        <RestaurentCard {...props}/>
      </div>)
  }
}


export default RestaurentCard