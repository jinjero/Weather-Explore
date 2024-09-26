import axios from "axios";

export const TimeOffset = async (lat, lon) => {
  const time = Math.floor(Date.now() / 1000);
  const API = import.meta.env.VITE_GoogleMap_API;
  const URL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${time}&key=${API}`;

  try {
    const response = await axios.get(URL);
    const offset = response.data.rawOffset + response.data.dstOffset;

    return offset;
  } catch (error) {
    console.error(error);
  }
};
