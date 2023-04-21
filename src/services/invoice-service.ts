import axios from "axios";

const apiKey = "63cc278077454f4ea45d91617f027821";

const baseUrl = "https://9f4d02dceb.d.voltageapp.io/api/v1";

type Invoice = {
  amount: number;
  memo: string;
};

export const createInvoice = async ({ amount, memo }: Invoice) => {
  try {
    const response = await axios.post(
      baseUrl + "/payments",
      {
        out: false,
        amount: amount,
        memo: memo,
        unit: "sat",
        webhook: "https://webhook.site/4b650eaf-22c7-4f32-9094-64009b132a80",
      },
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error.response);
    return null;
  }
};
