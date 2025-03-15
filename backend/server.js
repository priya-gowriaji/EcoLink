import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
