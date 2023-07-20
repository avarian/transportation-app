import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";

function Kai() {
  interface DataTrain {
    id: number;
    code: string;
    name: string;
  }

  interface Station {
    id: number;
    code: string;
    name: string;
    city: string;
    timezone: string;
    description: string;
  }

  interface Schedule {
    id: number;
    code: string;
    trip_date: string;
    train_code: string;
    station_code: string;
    arrival: string;
    departure: string;
    station: Station;
  }

  interface DataTrainSchedule {
    id: number;
    code: string;
    name: string;
    description: string;
    schedule: Schedule[];
  }

  let date = new Date(Date.now());
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const dateQuery = query.get("date");
  const { trainSlug } = useParams();

  const [trains, setTrains] = useState<Array<DataTrain>>([]);

  const [trainsSchedules, setTrainsSchedules] = useState<
    Array<DataTrainSchedule>
  >([]);

  let train = trainSlug?.replace("-", " ").toLowerCase();

  if (dateQuery != null) {
    date = new Date(dateQuery);
  }

  const [trainForm, setTrainForm] = useState(train);

  const handleTrainFormChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTrainForm(event.target.value);
  };

  const [dateForm, setDateForm] = useState(date.toISOString().slice(0, 10));
  const handleDateFormChange = (event: React.BaseSyntheticEvent) => {
    setDateForm(event.target.value);
  };

  let navigate = useNavigate();
  const handleSubmit = () => {
    let path =
      "/kai/" +
      trainForm?.replace(" ", "-").toLowerCase() +
      "?date=" +
      dateForm;
    navigate(path);
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(API_URL + "/kai/train")
      .then((response) => {
        setTrains(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        API_URL +
          "/kai/train-schedule" +
          "?train=" +
          trainForm?.replace(" ", "-").toLowerCase() +
          "&date=" +
          dateForm
      )
      .then((response) => {
        setTrainsSchedules(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container">
      <div className="d-flex align-items-center p-3 my-3 bg-red rounded shadow-sm">
        <div className="container">
          <div className="col-auto float-start">
            <h1 style={{ textTransform: "capitalize" }} className="h4">
              {train}
            </h1>
          </div>
          <div className="col-auto float-end">
            <div className="row g-2">
              <div className="col-auto">
                <div className="float-right">
                  <select
                    onChange={handleTrainFormChange}
                    className="form-select"
                    aria-label="Kereta Api"
                  >
                    <option
                      style={{ textTransform: "capitalize" }}
                      value={trainForm}
                    >
                      {train}
                    </option>
                    {trains.map((train) => (
                      <option key={train.id} value={train.name}>
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
                    onChange={handleDateFormChange}
                    // min="1997-01-01"
                    // max="2030-12-31"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="float-right">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
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
        <h6 className="border-bottom pb-2 mb-0">Ikhtisar</h6>
        <div className="text-body-secondary pt-3">
          {trainsSchedules[0]?.description != "" ? (
            <div>
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: trainsSchedules[0]?.description,
                  }}
                />
              }
            </div>
          ) : (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="container my-3 p-3 bg-body rounded shadow-sm">
        <h6
          style={{ textTransform: "capitalize" }}
          className="border-bottom pb-2 mb-0"
        >
          Jadwal Kereta Api {train}
        </h6>
        <div className="row">
          {trainsSchedules.map((trainsSchedule) => (
            <div
              key={trainsSchedule.code}
              className="col-md-4 text-center float-right"
            >
              <h4>
                {trainsSchedule.name} ({trainsSchedule.code})
              </h4>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Station</th>
                    <th scope="col">Arrival</th>
                    <th scope="col">Departure</th>
                  </tr>
                </thead>
                {trainsSchedule.schedule != null ? (
                  trainsSchedule.schedule.map((schedule) => (
                    <tbody key={schedule.id}>
                      <tr>
                        <td className="text-start">{schedule.station.name}</td>
                        <td>{schedule.arrival.substring(11, 19)}</td>
                        <td>{schedule.departure.substring(11, 19)}</td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <tbody>
                    <tr>
                      <td>Not Found</td>
                      <td>Not Found</td>
                      <td>Not Found</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Kai;
