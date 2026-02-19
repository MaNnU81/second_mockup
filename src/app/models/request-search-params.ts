import { RequestStatus } from "./mock-request";



export interface RequestSearchParams {
  dateRequest?: Date;
  idRequest?: number;
  idPortfolio?: string;
  client?: string;
  debtor?: string;
  status?: RequestStatus;
}