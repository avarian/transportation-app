import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";

function Kai() {
  const { search } = useLocation();
  const { trainSlug } = useParams();
  const [trains, setTrains] = useState([]);

  let train = trainSlug?.replace("-", " ").toUpperCase();
  console.log(search);
  console.log(train);
  // the search result
  // const [foundTrains, setFoundTrains] = useState(TRAINS);

  useEffect(() => {
    axios
      .get(API_URL + "/kai/train")
      .then((response) => {
        setTrains(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(trains);

  return (
    <main className="container">
      <div className="d-flex align-items-center p-3 my-3 bg-red rounded shadow-sm">
        <div className="lh-1">
          <h1 className="h6 mb-0 lh-1">Bootstrap</h1>
        </div>
      </div>

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some representative placeholder content, with some information about
            this user. Imagine this being some sort of status update, perhaps?
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#e83e8c" />
            <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some more representative placeholder content, related to this other
            user. Another status update, perhaps.
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#6f42c1" />
            <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            This user also gets some representative placeholder content. Maybe
            they did something interesting, and you really want to highlight
            this in the recent updates.
          </p>
        </div>
        <small className="d-block text-end mt-3">
          <a href="#">All updates</a>
        </small>
      </div>

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div className="d-flex justify-content-between">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div className="d-flex justify-content-between">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div className="d-flex justify-content-between">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <small className="d-block text-end mt-3">
          <a href="#">All suggestions</a>
        </small>
      </div>
      <div>
        {/* {trains.map((train) => (
        <div key={train.id}>
          <p>{train.id}</p>
          <p>{train.code}</p>
          <p>{train.name}</p>
        </div>
      ))} */}
      </div>
    </main>
  );
}

export default Kai;
