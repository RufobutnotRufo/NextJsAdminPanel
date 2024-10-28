'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "./Types";

type AppContextType = {
  user: User[];
  setUser: any;
};


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    
  const [user, setUser] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      createdAdd: "2024-10-01",
      role: "client",
      active: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      createdAdd: "2024-09-25",
      role: "client",
      active: "passive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      createdAdd: "2024-08-10",
      role: "client",
      active: "active",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bobbrown@example.com",
      createdAdd: "2024-07-15",
      role: "client",
      active: "passive",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charliedavis@example.com",
      createdAdd: "2024-06-18",
      role: "client",
      active: "active",
    },
    {
      id: 6,
      name: "Diana Evans",
      email: "dianaevans@example.com",
      createdAdd: "2024-05-12",
      role: "client",
      active: "passive",
    },
    {
      id: 7,
      name: "Frank Green",
      email: "frankgreen@example.com",
      createdAdd: "2024-04-05",
      role: "client",
      active: "active",
    },
    {
      id: 8,
      name: "Grace Hall",
      email: "gracehall@example.com",
      createdAdd: "2024-03-22",
      role: "client",
      active: "passive",
    },
    {
      id: 9,
      name: "Henry Lee",
      email: "henrylee@example.com",
      createdAdd: "2024-02-10",
      role: "client",
      active: "active",
    },
    {
      id: 10,
      name: "Ivy Martinez",
      email: "ivymartinez@example.com",
      createdAdd: "2024-01-30",
      role: "client",
      active: "passive",
    },
    // Добавленные пользователи
    {
      id: 11,
      name: "Jack Wilson",
      email: "jackwilson@example.com",
      createdAdd: "2024-10-15",
      role: "client",
      active: "active",
    },
    {
      id: 12,
      name: "Laura King",
      email: "lauraking@example.com",
      createdAdd: "2024-10-10",
      role: "client",
      active: "passive",
    },
    {
      id: 13,
      name: "Michael White",
      email: "michaelwhite@example.com",
      createdAdd: "2024-09-20",
      role: "client",
      active: "active",
    },
    {
      id: 14,
      name: "Nina Turner",
      email: "ninaturner@example.com",
      createdAdd: "2024-09-15",
      role: "client",
      active: "passive",
    },
    {
      id: 15,
      name: "Oscar Harris",
      email: "oscarharris@example.com",
      createdAdd: "2024-08-25",
      role: "client",
      active: "active",
    },
    {
      id: 16,
      name: "Paula Clark",
      email: "paulaclark@example.com",
      createdAdd: "2024-08-20",
      role: "client",
      active: "passive",
    },
    {
      id: 17,
      name: "Quincy Young",
      email: "quincyyoung@example.com",
      createdAdd: "2024-07-30",
      role: "client",
      active: "active",
    },
    {
      id: 18,
      name: "Rachel Scott",
      email: "racheljscott@example.com",
      createdAdd: "2024-07-25",
      role: "client",
      active: "passive",
    },
    {
      id: 19,
      name: "Steve Allen",
      email: "steveallen@example.com",
      createdAdd: "2024-06-30",
      role: "client",
      active: "active",
    },
    {
      id: 20,
      name: "Tina Hill",
      email: "tinahill@example.com",
      createdAdd: "2024-06-25",
      role: "client",
      active: "passive",
    },
  ]);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext");
  }
  return context;
};
