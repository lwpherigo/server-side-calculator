const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended}));
app.use(bodyParser.json());

const history = [];

app.get('/history', (req, res) => {
    res.send(history);
});

app.post('/equation', (req, res) => {
    const problem = req.body;
    problem.val1 = parseFloat(problem.val1);
    problem.val3 = parseFloat(problem.val3);
    let answer = 0;
    
    if (problem.val2 === '+') {
        answer = problem.val1 + problem.val3
    } else if(problem.val2 === '-') {
        answer = problem.val1 - problem.val3
    } else if(problem.val2 === '*') {
        answer = problem.val1 * problem.val3
    } else if(problem.val2 === '/') {
        answer = problem.val1 / problem.val3
    }

    history.push( {
        problem: problem,
        answer: answer,
    });
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})