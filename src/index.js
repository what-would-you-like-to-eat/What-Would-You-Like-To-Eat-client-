const { Sequelize } = require('sequelize');
const { server } = require

require('dotenv').config();

const port = process.env.PORT||3000;
server.listen(port, async()=>{
    await sequelize.sync();
    console.log(`Listening on ${port}`);
});
