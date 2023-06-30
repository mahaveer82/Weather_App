import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const apiKey = "626e0c26b60239bdf266ddd092d1a909";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="col-mid-12">
      <div className="weatherbg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 pb-0 p-3 col-3 mt-5 form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City Name..."
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="tag_line">
          <h4>
            <strong>Hello!</strong> and Welcome The Forecast App
          </h4>
          <p className="slogan">
            "Where the people are old and the weather is warm!"
          </p>
        </div>
        <div className="col-md-12 text-center mt-5">
          <div className="rounded weather_detail_box">
            <h5 className="weathercity">{data?.name}</h5>
            <h6 className="weathertemp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      </div>
      <footer>
        <div class="container">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div class="contact-info">
            <p>123 Main Road, Bengaluru</p>
            <p>Phone: 9876-543-321</p>
            <p>Email: weather@app.com</p>
          </div>
          <div class="legal-info">
            <p>&copy; 2023 Your Website Name. All rights reserved.</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;