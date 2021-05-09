import express, {  Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from 'axios';
import cors from 'cors';
import { rawgApiKey, baseUrl } from '../utils/constants';

dotenv.config();


const app = express();

app.use(cors({
  origin:true
}));

app.use(express.json());

// Background Header  -> providing a constant endpoint for a random top rated videogame
app.get('/', async (req: Request, res: Response) => {
  res.set('Cache-Control', 'no-cache');
  let url = `${baseUrl}?key=${rawgApiKey}&ordering=-added&page_size=10`
  const random = Math.floor(Math.random() * Math.floor(10)); 
  await axios.get(url)
  .then(response => {
    const RandomGames = response.data.results[random];
    return res.status(200).send(RandomGames)
  })
  .catch(err => {
      console.log(err.data);
      return res.status(400).send(err)
  })
});

// providing a constant endpoint for trending videogames
app.get('/trending', async (req: Request, res: Response) => {
  res.set('Cache-Control', 'no-cache');
  const { page } = req.query;
  let url = `${baseUrl}/lists/main?key=${rawgApiKey}&ordering=-relevance&page_size=10&page=${page}`
  await axios.get(url)
  
  .then(response => {
    return res.status(200).send(response.data)
  })
  .catch(err => {
      console.log(err.data);
      return res.status(400).send(err)
  })
  console.log(url)
});

 // providing a dynamic endpoint to videogame detail pages
 app.get('/:rawId', async (req: Request, res: Response) => {
  res.set('Cache-Control', 'no-cache');
  const { rawId } = req.params;
  let url = `${baseUrl}/${rawId}?key=${rawgApiKey}`
  await axios.get(url)
  
  .then(response => {
    return res.status(200).send(response.data)
  })
  .catch(err => {
      console.log(err.data);
      return res.status(400).send(err)
  })
  console.log(url)
});

if(process.env.NODE_ENV !== "serveless") {
  const server = app.listen(3333, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
}