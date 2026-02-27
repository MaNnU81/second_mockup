import { RequestStatus } from "./mock-request";



export interface RequestSearchParams {
  dateRequest?: Date | null;
  idRequest?: number | null;
  idPortfolio?: string;
  client?: string;
  debtor?: string;
  status?: RequestStatus | null;
}