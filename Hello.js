export default function Hello(app) {
app.get('/hello', (req, res) => {
    res.send('Life is good!')
 });
 app.get('/', (req, res) => {
    res.send('<h1>Welcome to CS5610 24Fall WebDev Project!</h1>')
 });
}

