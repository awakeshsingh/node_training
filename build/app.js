/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _express = _interopRequireDefault(require('express'));

const _bodyParser = _interopRequireDefault(require('body-parser'));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false,
}));
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'I am using babel in NodeJS',
    status: 'success',
  });
});
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log('Server is running on port '.concat(PORT));
});
// # sourceMappingURL=app.js.map
