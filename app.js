import express, { json } from 'express'; // require -> commonJS
import { corsMiddleware } from './middlewares/cors';
import { moviesRouter } from './routes/movies';

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// Todos los recursos que sean Movies se identifican con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})