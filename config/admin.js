module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7fb2b2030455c24b5d10d69f115709f1'),
  },
});
