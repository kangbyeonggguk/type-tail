// let data = {
//     name: "식당",
//     category: "western",
//     address: {
//       city: "ansung",
//       detail: "somewhere",
//     },
//     menu: [
//       { name: "pasta", price: 2000, category: "pasta" },
//       { name: "steak", price: 3000, category: "steak" },
//     ],
//   };
export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type Addresswithoutzip = Omit<Address, "detail">;
