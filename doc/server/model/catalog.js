import dbStroage from './db'
const Catalog = {
  getCatas(roleId) {
    let sql = `SELECT f.* from t_e4s_db_function f, t_e4s_db_role_function rf where f.ID = rf.FUNCTION_ID and rf.ROLE_ID = "${roleId}" and f.PARENT_ID = "0"`
    return dbStroage.query(sql, { type: 'SELECT' })
  }
}
export default Catalog