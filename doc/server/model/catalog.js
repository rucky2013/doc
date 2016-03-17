import dbStroage from './db'
const Catalog = {
  getCatas(roleId) {
      return dbStroage.query('SELECT f.* from t_e4s_db_function f, t_e4s_db_role_function rf where f.ID = rf.FUNCTION_ID and rf.ROLE_ID = ${roleId} and f.PARENT_ID = "0"', { type: 'SELECT' })
  }
}
export default Catalog