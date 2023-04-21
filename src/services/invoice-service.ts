import axios from "axios";

const baseUrl = "https://8jlty1ba6f.execute-api.sa-east-1.amazonaws.com/prod";

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
    console.error("Error creating invoice:", error.response);
    return null;
  }
};

export const getInvoice = async (paymentHash: string) => {
  try {
    const response = await axios.get(baseUrl + "/get-invoice/" + paymentHash);

    return response.data;
  } catch (error) {
    console.error("Error getting invoice:", error.response);
    return null;
  }
};
