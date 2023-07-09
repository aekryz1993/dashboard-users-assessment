import { apiConfig } from "@/config";
import invoiceService from "./invoices.service";


const baseUrl = apiConfig.baseURL

const api = {
  ...invoiceService(baseUrl)
}

export default api;