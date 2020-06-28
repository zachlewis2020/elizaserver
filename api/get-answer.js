import { NowRequest, NowResponse } from '@vercel/node'
var data = require('./db.json');
export default (req: NowRequest, res: NowResponse) => {
  res.json(data)
}
