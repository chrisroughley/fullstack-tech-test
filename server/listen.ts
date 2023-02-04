import app from './app';

const { PORT = 8080 } = process.env;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port :${PORT}`);
});
