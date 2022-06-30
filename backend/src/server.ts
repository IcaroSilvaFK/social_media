import 'dotenv/config';
import { app } from './main';
import {config} from 'dotenv'

config()



app.listen(process.env.BACKEND_PORT, () => {
  console.log(`server running in http://localhost:${process.env.BACKEND_PORT}`);
});
