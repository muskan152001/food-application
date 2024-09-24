import mongoose from "mongoose"; // Correct import

export const dbConnection = () => {
  console.log('Mongo URI:', process.env.MONGO_URI); // Debugging line

  mongoose.connect(process.env.MONGO_URI, {
    dbName: "Restaurant"
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(`Some error occurred while connecting to the database: ${err}`);
  });
};
