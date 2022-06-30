import { app } from './main';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
