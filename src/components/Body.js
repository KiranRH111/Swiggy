import { useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRatedFilter, setTopRatedFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterdRes, setfilteredRes] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      const actualData =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      // Update the state with the fetched data
      setListOfRestaurants(actualData);
      setfilteredRes(actualData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterClick = () => {
    if (topRatedFilter) {
    } else {
      const filteredRestaurants = listOfRestaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setListOfRestaurants(filteredRestaurants);
    }
    setTopRatedFilter(!topRatedFilter);
  };

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className=" ml-2 px-2 bg-pink-100 rounded-lg" onClick={() => {
            setfilteredRes(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))

          }}>Search</button>
        </div>
        <div className="m-2">
          <button className="px-2  bg-gray-200 rounded-lg" onClick={handleFilterClick}>Top Rated Restaurants</button>

        </div>

      </div>
      <div className="res-container flex flex-wrap">
        {filterdRes.length == 0 ? <Shimmer /> : filterdRes.map((restaurant) => (
          <Link key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}>
            {restaurant.info.isOpen ?
              <RestaurantCardPromoted
                resData={restaurant.info} /> :
              <RestaurentCard
                resData={restaurant.info}
              />}

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
