import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e)
  }
};

start();
