import { config } from "dotenv";
import { connectDB } from "../libs/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

  {
    email: "sushma.jain@gmail.com",
    fullName: "Sushma Jain",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
  },
  {
    email: "pankajjain@gmail.com",
    fullName: "Pankaj Jain",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
  {
    email: "vinodjoshi@gmail.com",
    fullName: "Vinod Joshi",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
  },
  {
    email: "yuvrajjain@gmail.com",
    fullName: "Yuvraj Jain",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/15735/15735374.png",
  },
  {
    email: "ashutoshjha@gmail.com",
    fullName: "Ashutosh Jha",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
  },
  {
    email: "deveshjain@gmail.com",
    fullName: "Devesh Jain",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/560/560277.png",
  },
  {
    email: "adityaujjwal@gmail.com",
    fullName: "Aditya Ujjwal",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
  },
  {
    email: "kartiksharma@gmail.com",
    fullName: "Kartik Sharma",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png",
  },
  {
    email: "harshmittal@gmail.com",
    fullName: "Harsh Mittal",
    password: "123456",
    profilePic: "https://cdn-icons-png.flaticon.com/128/236/236832.png",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();