import axios from "axios";
import { MdEmail } from "react-icons/md";
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: "http://localhost:9000/api"
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    toast.error("Error while fetching the properties");
    throw error;
  }
};
export const getProperty = async(id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    toast.error("Error while fetching the properties");
    throw error;
  }
}


export const createUser = async(email) =>{
 try{
    await api.post(`/user/register`, {
      email , headers:{
        Authorization: `Bearer ${localStorage.getItem("acess_token")}`
      }
    });

 }catch(error){
  toast.error("Something went wrong , Please try again later");
  throw error;
 }
}
