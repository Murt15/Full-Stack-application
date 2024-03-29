//importing useState and useNavigate hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//importing the search css file
import "./Search.css";
//importing axios
import axios from "axios";

const Search = () => {
  //setting all the dependencies
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");
  //seacrh handler for searching data
  const searchHandler = async () => {
    try {
      const res = await axios.get("http://52.198.200.5:5000/searchData", {
        headers: { heading: searchText },
      });

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="home-img-div">
        <img
          src="https://icon-library.com/images/home-icon-transparent-background/home-icon-transparent-background-20.jpg"
          alt="home"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div>
        <div className="input-div">
          <label>Type here to search</label>
          <br />
          <input type="text" onChange={(e) => setSearchText(e.target.value)} />
          <button className="search-btn" onClick={searchHandler} type="submit">
            Search
          </button>
          <br />
          {data.length > 0 && <label>Showing {data.length} results...</label>}
        </div>
        {data.length > 0 && (
          <div className="search-div">
            <ul className="search-ul">
              {data &&
                data.map((index) => (
                  <li className="search-li">
                    <div className="search-li_img_div">
                      <img src={index.imageUrl} alt="photos" />
                    </div>
                    <div className="search-li_text_div">
                      <p className="search-li_text_div_heading">
                        {index.heading}
                      </p>
                      <p className="search-li_text_div_para">{index.para}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="background4-div"></div>
    </>
  );
};
export default Search;
