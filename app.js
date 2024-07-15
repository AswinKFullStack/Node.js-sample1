const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

app.engine('handlebars', exphbs.engine(
    {defaultLayout: 'index'}
));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// assume the data from back-end
const items = [
    { name: 'ASWIN K', branch: 'ECE', image: '/images/1.jpg',college :"CUSAT"},
    { name: 'ANANDHU K', branch: 'CS', image: '/images/3.jpg',college :"CET" },
    { name: 'POLLARD', branch: 'IT', image: '/images/6.jpg',college :"IIT" },
    { name: 'KILI', branch: 'MECH', image: '/images/7.jpg',college :"NIT" },
    { name: 'SULAIMAN', branch: 'EEE', image: '/images/PHOTO.jpg',college :"GET" }
  ];

  app.get('/cards', (req, res) => {
    res.render('index', { items });
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT,()=>{console.log("the server is running")});
