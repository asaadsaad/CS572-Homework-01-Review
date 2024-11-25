import { MyStorage } from "./storage";

// Test your implementation with the following code
const storage = new MyStorage<string>();
storage.addItem("firstname", "Asaad");
storage.addItem("lastname", "Saad");
console.log(storage.getData()); // [ { firstname: "Asaad" }, { lastname: "Saad" } ]

storage.removeItem("lastname");
console.log(storage.getData()); // [ { firstname: "Asaad" } ]

storage.updateItem("firstname", "Theo");
console.log(storage.getItem("firstname")); // Theo
console.log(storage.getData()); // [ { firstname: "Theo" } ]