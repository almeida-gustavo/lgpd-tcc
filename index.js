import app from './src/app';

const port = process.env.API_PORT;
app.listen(port, () => console.log(`Server Runing on port ${port}`));
