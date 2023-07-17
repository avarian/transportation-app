import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";

function Kai() {
  let date = new Date(Date.now());
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const dateQuery = query.get("date");
  const { trainSlug } = useParams();

  interface DataTrain {
    id: number;
    code: string;
    name: string;
  }
  
  interface GetTrains {
    data: DataTrain[];
    message: string;
  }

  const [trains, setTrains] = useState([]);

  // console.log(date);

  let train = trainSlug?.replace("-", " ").toUpperCase();

  if (dateQuery != null) {
    date = new Date(dateQuery);
  }

  console.log(dateQuery);
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
        <div className="container">
          <div className="col-auto float-start">
            <h1 className="h4">{train}</h1>
          </div>
          <div className="col-auto float-end">
            <div className="row g-2">
              <div className="col-auto">
                <div className="float-right">
                  <select className="form-select" aria-label="Kereta Api">
                    <option value={train}>{train}</option>
                    {trains.map((train) => (
                      <option key={train.id} value={train.id}>
                        {train.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-auto">
                <div className="float-right">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue={date.toISOString().slice(0, 10)}
                    // name="begin"
                    placeholder="yyyy-mm-dd"
                    // min="1997-01-01"
                    // max="2030-12-31"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="float-right">
                  <button type="submit" className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Summary</h6>
        <div className="text-body-secondary pt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="container my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Schedule</h6>
        <div className="row">
          <div className="col-md-3 text-center float-right">
            <h4>Serayu (104)</h4>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Station</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Departure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 text-center float-right">
            <h4>Serayu (104)</h4>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Station</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Departure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 text-center float-right">
            <h4>Serayu (104)</h4>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Station</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Departure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-3 text-center float-right">
            <h4>Serayu (104)</h4>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Station</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Departure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>19:00</td>
                  <td>19:08</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
