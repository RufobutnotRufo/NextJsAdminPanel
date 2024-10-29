"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, Product, LogedUsers } from "./Types";

type AppContextType = {
  user: User[];
  setUser: any;
  products: Product[];
  setProducts: any;
  setViewUser: any;
  viewUser: any;
  usersLog: LogedUsers[];
  isLoggedIn: boolean | null;
  setIsLoggedIn:any;
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

  const [products, setProducts] = useState<any[]>([
    {
      id: 1,
      title: "Зловещие мертвецы",
      description: "Ужасный фильм о проклятом лесу и его жителях.",
      price: 499.99,
      createdAt: "2023-01-01",
      stock: 10,
    },
    {
      id: 2,
      title: "Блэйд",
      description: "Полувампир, полудемон сражается с другими вампирами.",
      price: 299.99,
      createdAt: "2023-02-01",
      stock: 5,
    },
    {
      id: 3,
      title: "Сверхъестественное",
      description:
        "Истории о двух братьях, охотящихся на сверхъестественные существа.",
      price: 199.99,
      createdAt: "2023-03-01",
      stock: 20,
    },
    {
      id: 4,
      title: "Терминатор",
      description: "Классический sci-fi фильм о борьбе человека с машинами.",
      price: 399.99,
      createdAt: "2023-04-01",
      stock: 7,
    },
    {
      id: 5,
      title: "Темный рыцарь",
      description: "Фильм о Бэтмене и его борьбе с Джокером.",
      price: 450.0,
      createdAt: "2023-05-01",
      stock: 3,
    },
    {
      id: 6,
      title: "Исполнитель желаний",
      description:
        "Фантастическая история о том, как мечты могут стать реальностью.",
      price: 250.0,
      createdAt: "2023-06-01",
      stock: 12,
    },
    {
      id: 7,
      title: "Пацаны",
      description: "Сатирический взгляд на супергероев и их недостатки.",
      price: 320.0,
      createdAt: "2023-07-01",
      stock: 15,
    },
    {
      id: 8,
      title: "Матрица",
      description: "Фильм о том, что реальность может быть иллюзией.",
      price: 450.0,
      createdAt: "2023-08-01",
      stock: 6,
    },
    {
      id: 9,
      title: "Крик",
      description: "Слэшер о маньяке, терроризирующем молодежь.",
      price: 350.0,
      createdAt: "2023-09-01",
      stock: 8,
    },
    {
      id: 10,
      title: "Кобра Кай",
      description: "Современное продолжение классической истории о карате.",
      price: 300.0,
      createdAt: "2023-10-01",
      stock: 10,
    },
    {
      id: 11,
      title: "Миссия невыполнима",
      description: "Серия фильмов о шпионе Итане Ханте и его приключениях.",
      price: 500.0,
      createdAt: "2023-11-01",
      stock: 5,
    },
    {
      id: 12,
      title: "Ранго",
      description: "Анимационный фильм о ящерице, ставшей героем.",
      price: 250.0,
      createdAt: "2023-12-01",
      stock: 10,
    },
    {
      id: 13,
      title: "Джанго освобожденный",
      description:
        "Фильм о свободном чернокожем рабе, стремящемся спасти свою жену.",
      price: 400.0,
      createdAt: "2024-01-01",
      stock: 4,
    },
    {
      id: 14,
      title: "Бесславные ублюдки",
      description:
        "История о группе еврейских солдат, пытающихся уничтожить нацистов.",
      price: 450.0,
      createdAt: "2024-02-01",
      stock: 9,
    },
    {
      id: 15,
      title: "Счастливое число Слевина",
      description:
        "Триллер о мужчине, оказавшемся в ловушке между преступными группировками.",
      price: 350.0,
      createdAt: "2024-03-01",
      stock: 8,
    },
    {
      id: 16,
      title: "Оппенгеймер",
      description: "Биографический фильм о создателе атомной бомбы.",
      price: 550.0,
      createdAt: "2024-04-01",
      stock: 6,
    },
    {
      id: 17,
      title: "Безумный Макс: Дорога ярости",
      description:
        "Экшн-фильм о постапокалиптическом мире и борьбе за выживание.",
      price: 399.99,
      createdAt: "2024-05-01",
      stock: 5,
    },
    {
      id: 18,
      title: "Звёздные войны: Эпизод 3 – Месть ситхов",
      description:
        "Кульминация саги о Звёздных войнах и падении Anakin Skywalker.",
      price: 450.0,
      createdAt: "2024-06-01",
      stock: 12,
    },
    {
      id: 19,
      title: "Человек-паук",
      description: "История о подростке, получившем суперспособности.",
      price: 300.0,
      createdAt: "2024-07-01",
      stock: 20,
    },
    {
      id: 20,
      title: "Бегущий по лезвию 2049",
      description:
        "Сиквел классического фильма о репликантах и человеческой природе.",
      price: 550.0,
      createdAt: "2024-08-01",
      stock: 7,
    },
  ]);

  const [viewUser, setViewUser] = useState<any>({});

  const [usersLog, setUsersLog] = useState<LogedUsers[]>([
    { email: "girildaaa@gmail.com", password: "5660770m" },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        viewUser,
        setViewUser,
        usersLog,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
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
