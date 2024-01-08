import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRatedFilter, setTopRatedFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterdRes, setfilteredRes] = useState([]);

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
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

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
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button onClick={() => {
            setfilteredRes(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))

          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>Top Rated Restaurants</button>

      </div>
      <div className="res-container">
        {filterdRes.length == 0 ? <Shimmer /> : filterdRes.map((restaurant) => (
          <Link key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}>
            <RestaurentCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
