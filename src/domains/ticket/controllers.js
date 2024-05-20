const Ticket = require("./model");

module.exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).send("Error retrieving tickets from MongoDB");
  }
};

module.exports.addTicket = async (req, res) => {
  const ticketData = req.body;

  try {
    const ticket = await Ticket.create(ticketData);

    await ticket.save();
    res.send("Ticket added successfully!");
  } catch (err) {
    res.status(500).send("Error adding ticket to MongoDB");
  }
};

module.exports.deleteTicket = async (req, res) => {
  const { ticketId } = req.query;

  try {
    const result = await Ticket.deleteOne({ ticketId });
    if (result.deletedCount > 0) {
      res.send("Ticket deleted successfully!");
    } else {
      res.send(`Ticket with id ${ticketId} not found.`);
    }
  } catch (err) {
    res.status(500).send("Error deleting ticket from MongoDB");
  }
};
