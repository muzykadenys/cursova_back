const express = require("express");
const routes = express.Router();

const { getAllTickets, addTicket, deleteTicket } = require("./controllers");

routes.get("/getAllTickets", getAllTickets);
routes.post("/addTicket", addTicket);
routes.delete("/deleteTicket", deleteTicket);

routes.get("/", async (req, res) => {
  res.status(201).json({ message: "success!🤩" });
});

module.exports = routes;
