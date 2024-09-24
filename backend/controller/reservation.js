import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

// export const sendReservation = async (req, res, next) => {
//   const { firstName, lastName, email, phone, date, time } = req.body;

//   // Check if any field is missing
//   if (!firstName || !lastName || !email || !phone || !date || !time) {
//     return next(new ErrorHandler("Please fill in the entire reservation form", 400));
//   }

//   try {
//     // Create the reservation
//     await Reservation.create({ firstName, lastName, email, phone, date, time });
    
//     res.status(200).json({
//       success: true,
//       message: "Reservation sent successfully",
//     });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       const validationErrors = Object.values(error.errors).map(
//         (err) => err.message
//       );
//       return next(new ErrorHandler(validationErrors.join(", "), 400));
//     }

//     // Handle any other errors
//     return next(new ErrorHandler("Server error", 500));
//   }
// };
export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Check if any field is missing
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill in the entire reservation form", 400));
  }

  try {
    // Create the reservation
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    console.error("Error in sendReservation:", error); // Log the error

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle any other errors
    return next(new ErrorHandler("Server error", 500));
  }
};

