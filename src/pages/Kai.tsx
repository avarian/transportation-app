import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../utils/constant";

function Kai() {
  // const [trains, setTrains] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "/kai/train").then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div>asd</div>;
}

export default Kai;
