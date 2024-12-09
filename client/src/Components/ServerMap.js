import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { addService, getServices } from "../Features/ServiceSlice";
import { Table } from "reactstrap";

const ServerMap = () => {
  const services = useSelector((state) => state.services.services);
  const service = useSelector((state) => state.services.service);

  return (
    <div>
      <br></br>
      <Table className="h11">
        <thead>
          <th>Services</th>
          <th>serviceId</th>
          <th>serviceType</th>
          <th>numberofWorker</th>
          <th>serviceInfo</th>
          <th>price</th>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.serviceId}>
              <td>{service.serviceType}</td>
              <td>{service.numberofWorker}</td>
              <td>{service.serviceInfo}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ServerMap;
