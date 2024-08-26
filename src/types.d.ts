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
  name: string; // Corresponds to payeeName in Mongoose schema
  date: string; // Can represent the createdAt or updatedAt timestamps
  amount: number;
  type:
    | 'travel'
    | 'necessity'
    | 'food'
    | 'entertainment'
    | 'luxury'
    | 'comfort'; // Updated types from the Mongoose schema
  eventTypeId?: string | null; // Can be null or a string representing ObjectId
  description?: string; // Optional field
  transactionType: 'transaction' | 'monthly payment' | 'income'; // Updated types
}

export interface Events {
  id: string;
  name: string;
  description: string;
  eventDate: string;
}
