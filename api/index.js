const { routes, express } = require('./controller')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
const cors = require('cors')
const cookieParse = require('cookie-parser')

app.use(express.static('./static'), express.urlencoded({ extended: false }), express.json(), cookieParse(), cors(), routes)

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  });

// Admin Page
routes.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})

app.listen(port, ()=>{
    console.log(`You are using port http://localhost:${port}`);
})
