import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
import { ServiceSchemaValidation } from "../Validations/ServiceValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addService } from "../Features/ServiceSlice";
import {
  adddService,
  deleteService,
  updateService,
} from "../Features/ServiceSlice";

const AddServices = () => {
  //Retrieve the current value of the state and assign it to a variable.
  const serviceList = useSelector((state) => state.services.value);
  //Create the state variables
  const [serviceId, setserviceId] = useState();
  const [serviceType, setserviceType] = useState();
  const [numberofWorker, setnumberofWorker] = useState();
  const [serviceInfo, setserviceInfo] = useState();
  const [price, setprice] = useState();

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ServiceSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const dispatch = useDispatch(); //every time we want to call an action, make an action happen
  const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook

  // Handle form submission
  const onSubmit = (data) => {
    try {
      // You can handle the form submission here
      const serviceData = {
        serviceId: data.serviceId,
        serviceType: data.serviceType,
        numberofWorker: data.numberofWorker,
        serviceInfo: data.serviceInfo,
        price: data.price,
      };

      console.log("Form Data", data);
      alert("Validation all good.");
      dispatch(addService(serviceData)); // Dispatch an action to add a new user by passing the user data to the Redux store
      navigate("/"); //redirect to login component
    } catch (error) {
      console.log("Error.");
    }
  };

  return (
    <div className="img">
      <br></br>
      <div className="loginnn-container">
        <Form onSubmit={handleSubmit(onSubmit)} className="boxregister">
          <Row>
            <Col md={7}>
              <h1 className="h22">Add Services</h1>
              <FormGroup className="form-groupsn">
                <Label>Service Id</Label>
                <input
                  id="serviceId"
                  name="serviceId"
                  type="text"
                  {...register("serviceId", {
                    onChange: (e) => setserviceId(e.target.value),
                  })}
                ></input>
                <p className="error">{errors.serviceId?.message}</p>
              </FormGroup>

              <FormGroup className="form-groupsn">
                <Label>Service Type</Label>
                <input
                  id="serviceType"
                  name="serviceType"
                  type="text"
                  {...register("serviceType", {
                    onChange: (e) => setserviceType(e.target.value),
                  })}
                ></input>
                <p className="error">{errors.serviceType?.message}</p>
              </FormGroup>
              <FormGroup className="form-groupsn">
                <Label>Number Of Worker</Label>
                <input
                  id="numberofWorker"
                  name="numberofWorker"
                  type="number"
                  {...register("numberofWorker", {
                    onChange: (e) => setnumberofWorker(e.target.value),
                  })}
                ></input>
                <p className="error">{errors.numberofWorker?.message}</p>
              </FormGroup>
              <FormGroup className="form-groupsn">
                <Label>Service Information</Label>
                <input
                  id="serviceInfo"
                  name="serviceInfo"
                  type="text"
                  {...register("serviceInfo", {
                    onChange: (e) => setserviceInfo(e.target.value),
                  })}
                ></input>
                <p className="error">{errors.serviceInfo?.message}</p>
              </FormGroup>

              <FormGroup className="form-groupsn">
                <Label>Price</Label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  {...register("price", {
                    onChange: (e) => setprice(e.target.value),
                  })}
                ></input>
                <p className="error">{errors.price?.message}</p>
              </FormGroup>

              <Button className="loginbutton">Save</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddServices;
