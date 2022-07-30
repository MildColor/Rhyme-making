import app from "./server";

const PORT = 4000;

const hadleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, hadleListening);
