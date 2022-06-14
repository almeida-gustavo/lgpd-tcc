import app from './src/app.js';

const port = process.env.API_PORT || 3000;
app.listen(port, () => console.log(`Server Runing on port ${port}`));
