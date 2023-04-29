import axios from "axios";

// @ts-ignore
const baseUrl = import.meta.env.VITE_API_BASE_URL;

type Invoice = {
  amount: number;
  memo: string;
};

export const createInvoice = async ({ amount, memo }: Invoice) => {
  try {
    const response = await axios.post(baseUrl + "/create-invoice", {
      amount: amount,
      memo: memo,
    });

    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error);
    return null;
  }
};

export const getInvoice = async (paymentHash: string) => {
  try {
    const response = await axios.get(baseUrl + "/get-invoice/" + paymentHash);

    return response.data;
  } catch (error) {
    console.error("Error getting invoice:", error);
    return null;
  }
};
