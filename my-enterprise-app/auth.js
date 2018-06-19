const passport = require('passport');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local');

module.exports = app => {
  passport.serializeUser((user, done) => done(null, user.username));
  passport.deserializeUser((id, done) => {
    const user = {
      username: 'sspringer',
      firstname: 'Sebastian',
      lastname: 'Springer',
    };
    done(null, user);
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      if (username === 'sspringer' && password === 'test') {
        done(null, {
          username: 'sspringer',
          firstname: 'Sebastian',
          lastname: 'Springer',
        });
      } else {
        done('Not allowed');
      }
    }),
  );

  app.use(
    expressSession({
      secret: 'top secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/login.html' }),
    (request, response) => {
      response.redirect('/todo');
    },
  );
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login.html');
  });
};
