import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
    unique: true,
  },
  numberofWorker: {
    type: Number,
    required: true,
  },
  serviceInfo: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const ServiceModel = mongoose.model("services", ServiceSchema);

export default ServiceModel;
