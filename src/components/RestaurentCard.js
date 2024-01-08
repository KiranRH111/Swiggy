import { img_URL, res_img_URL } from "../utils/constants"

const RestaurentCard = ({resData}) => {

    console.log('resData',resData);
    return (
      <div className='res-card'>
        <img className="res-logo" src={res_img_URL+resData.cloudinaryImageId} alt='res logo'/>
        <h3 style={{marginBottom:5}}>{resData?.name}</h3>
        <h4 className="res-cuisines" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{resData.cuisines.join(',')}</h4>
        <h4>{resData.avgRating} stars</h4>
        
      </div>
    )
   }


   export default RestaurentCard