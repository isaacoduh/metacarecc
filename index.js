const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const movieRouter = require('./routes/movies');
const commentRouter = require('./routes/comments');
const characterRouter = require('./routes/characters');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
});

app.use('/movies',movieRouter);
app.use('/comments', commentRouter);
app.use('/characters', characterRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});