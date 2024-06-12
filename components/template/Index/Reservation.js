import React, { useRef, useState } from "react";

function Reservation() {
  const [dataForm_reservation, setDataForm_reservation] = useState({});
  const inputs = useRef([]);

  console.log(inputs.current);

  const changeForm_Handler = (e) => {
    setDataForm_reservation({
      ...dataForm_reservation,
      [e.target.name]: e.target.value,
    });
  };
  const addReservation = async (e) => {
    e.preventDefault();

    if (
      dataForm_reservation.name &&
      dataForm_reservation.email &&
      dataForm_reservation.date &&
      dataForm_reservation.time &&
      dataForm_reservation.person
    ) {
      const response = await fetch("http://localhost:5000/reservations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: dataForm_reservation.name,
          email: dataForm_reservation.email,
          date: dataForm_reservation.date,
          time: dataForm_reservation.time,
          person: dataForm_reservation.person,
        }),
      });

      if (response.status === 201) {
        setDataForm_reservation({});
        inputs.current.map((input) => {
          input.value = "";
        });
        alert("reservation is Successfully !");
      }
    } else {
      alert("this all input requaired!");
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba('51, 33, 29, .8')" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                      name="name"
                      onChange={changeForm_Handler}
                      ref={(el) => (inputs.current[0] = el)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                      name="email"
                      onChange={changeForm_Handler}
                      ref={(el) => (inputs.current[1] = el)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        name="date"
                        onChange={changeForm_Handler}
                        ref={(el) => (inputs.current[2] = el)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        name="time"
                        onChange={changeForm_Handler}
                        ref={(el) => (inputs.current[3] = el)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      onChange={changeForm_Handler}
                      name="person"
                    >
                      <option selected={!dataForm_reservation?.person && true}>
                        Person
                      </option>
                      <option value="1" name="1">
                        Person 1
                      </option>
                      <option value="2" name="2">
                        Person 2
                      </option>
                      <option value="3" name="3">
                        Person 3
                      </option>
                      <option value="3" name="4">
                        Person 4
                      </option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                      onClick={addReservation}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
