import moment from "moment";
import { DATE_FORMAT } from "./constants";

export const formatDate = (dataInput: any) => {
  return moment(dataInput).format(DATE_FORMAT);
};

export const getTimeStamps = () => {
  const today = new Date()
  const curTime = today.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit',second: "2-digit", hour12: true })

  return curTime
}

export const getFullDateTime = () => {
  const fullDateTime = new Date().toLocaleString()

  return fullDateTime
}