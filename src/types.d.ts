export type RootStackParamsList = {
  Home: undefined;
  Scanning: undefined;
  Transaction: undefined;
  Event: undefined;
  AllTransaction: {
    type: String;
  };
  AddEvent: undefined;
  Investment: undefined;
  FireCalculator: undefined;
  InvestmentDetails: {
    name: String;
  };
  GoalDetails: {
    name: String;
  };
};

export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  icon: any;
}
