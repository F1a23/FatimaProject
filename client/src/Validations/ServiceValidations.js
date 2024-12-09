import * as yup from "yup"; //import all exports from the yup

export const ServiceSchemaValidation = yup.object().shape({
  serviceId: yup.string().required("Service Id is required"),
  serviceType: yup.string().required("Service Type required"),
  numberofWorker: yup
    .number()
    .min(1)
    .max(5)
    .required("Number Of Worker is required"),
  serviceInfo: yup.string().required("Service Information required"),
  price: yup.string().required("price required"),
});
