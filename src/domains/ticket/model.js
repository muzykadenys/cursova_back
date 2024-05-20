const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: [true, "Please enter an ticket id"],
  },
  destination: {
    type: String,
    required: [true, "Please enter an destination"],
  },
  flightNumber: {
    type: String,
    required: [true, "Please enter an flight number"],
  },
  name: String,
  departureDate: {
    type: String,
    required: [true, "Please enter an departure date"],
  },
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
