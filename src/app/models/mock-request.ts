export type RequestStatus = 
  | 'approved'
  | 'for approval'
  | 'not approved';



export interface MockRequest {
  dateRequest: Date;
  idRequest: number;
  idPortfolio: string;
  client: string;
  debtor: string;
  status: RequestStatus;
}


