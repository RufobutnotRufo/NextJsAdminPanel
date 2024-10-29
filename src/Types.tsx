export interface User {
  name: string;
  email: string;
  createdAdd: string;
  role: string;
  active: string;
  id: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  stock: number;
}

export interface UserStats {
  totalusers: string;
  totalUsersNum: number;
  percent: string;
}

export interface LastTransactions {
  totalusers: string;
  totalUsersNum: number;
  name: string;
  status: string;
  date: string;
  amount: number;
  percent: string;
}


export interface LogedUsers {
  email:string;
  password:string;
}