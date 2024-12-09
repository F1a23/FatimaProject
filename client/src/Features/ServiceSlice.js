import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as ENV from "../config";
//const initialState = { value: [] }; //list of Service is an object with empty array as initial value
//const initialState = { value: ServicesData }; //Assign the data from the exampleData

const initialState = {
  service: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addService = createAsyncThunk(
  "services/addService",
  async (serviceData) => {
    try {
      const response = await axios.post(`${ENV.SERVER_URL}/addService`, {
        serviceId: serviceData.serviceId,
        serviceType: serviceData.serviceType,
        numberofWorker: serviceData.numberofWorker,
        serviceInfo: serviceData.serviceInfo,
        price: serviceData.price,
      });
      console.log(response);
      const service = response.data.service; //retrieve the response from the server
      return service; //return the response from the server as payload to the thunk
    } catch (error) {
      console.log(error);
    }
  }
);

export const getServices = createAsyncThunk("service/getServices", async () => {
  try {
    const response = await axios.get(`${ENV.SERVER_URL}/getServices`);
    return response.data.services;
    //console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export const ServiceSlice = createSlice({
  name: "services", //name of the state
  initialState, // initial value of the state
  reducers: {
    adddService: (state, action) => {
      //state is the current value of the state, action is triggered outside the reducer and provides a value as payload
      state.value.push(action.payload); //the payload is the value coming from the component, add the payload to the state
    },
    deleteService: (state, action) => {
      //create a new array with the value that excludes the Service with the email value from the action payload, and assign the new array to the state.
      state.value = state.value.filter(
        (service) => service.serviceType !== action.payload
      );
    },
    updateService: (state, action) => {
      state.value.map((service) => {
        //iterate the  array and compare the email with the email from the payload
        if (service.serviceType === action.payload.serviceType) {
          service.serviceId = action.payload.serviceId;
          service.numberofWorker = action.payload.numberofWorker;
          service.serviceInfo = action.payload.serviceInfo;
          service.price = action.payload.price;
        }
      });
    },
  },

  extraReducers: (builder) => {
    //Asynchronous actions that update the state directly,
    builder
      .addCase(addService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addService.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.services = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { adddService, deleteService, updateService } =
  ServiceSlice.actions;

export default ServiceSlice.reducer;
