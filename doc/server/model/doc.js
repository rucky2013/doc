import dbStroage from './db'
const Doc = {
  getDocs(roleId, catalogId) {
    let sql = `SELECT f.* from t_e4s_db_function f, t_e4s_db_role_function rf where f.ID=rf.FUNCTION_ID and rf.ROLE_ID = "${roleId}" and f.PARENT_ID = ${catalogId}`
    return dbStroage.query(sql, {type: 'SELECT' })
  },
  getDoc(roleId, docId) {
    let sql = `select f.* from t_e4s_db_function f, t_e4s_db_role_function rf where f.id=rf.FUNCTION_ID and rf.ROLE_ID = "${roleId}" f.PARENT_ID <> "0"`
    return dbStroage.query(sql, { type: 'SELECT' })
   }
}
export default Doc