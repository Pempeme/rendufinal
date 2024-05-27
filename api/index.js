import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true, // Pour permettre les cookies
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    console.log('CORS headers set');
    next();
  });
  
app.use((req, res, next) => {
    console.log('Request headers:', req.headers);
    next();
});

app.use(express.json());
app.use(cookieParser());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(8800, () => {
    console.log('Connected!');
});
