import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useGeoLocation = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //console.log(position);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (error && !alert) {
      const redirect = window.confirm(error + " 검색창으로 이동할까요?");
      if (redirect) {
        setAlert(true);
        navigate("/search");
      }
    }
  }, [error, alert, navigate]);

  return location;
};
