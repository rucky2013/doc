import Sequelize from 'sequelize'
import config from 'config'
let db_cfg = config.get('db')
const dbStroage = new Sequelize(
  db_cfg.database, 
  db_cfg.user, 
  db_cfg.password, 
  db_cfg.option
  )
 
 export default dbStroage