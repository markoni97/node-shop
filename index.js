const path = require('path');
const express = require('express');
const mongoClient = require('./util/database').mongoClient;
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.fetchUser('637244a3f7c5e7d02a944da6')
    .then((user) => {
      console.log(user);
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(error.notFound);

mongoClient(() => {
  app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
  });
});
