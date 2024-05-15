let score: number | string = 55;
score = 44;
score = "33";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ankush: User | Admin = {
  name: "ankush",
  id: 123,
};

ankush = {
  username: "bharti",
  id: 234,
};

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (id === "string") {
    id.toLowerCase();
  }
}

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = [1, "2", "3", "4", true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"
