import dbStroage from './db'
const Doc = {
  getDocs(roleId, catalogId) {
    let sql = `SELECT f.* from t_e4s_db_function f, t_e4s_db_role_function rf where f.ID=rf.FUNCTION_ID and rf.ROLE_ID = "${roleId}" and f.PARENT_ID = ${catalogId}`
    return dbStroage.query(sql, {type: 'SELECT' })
  },
  getDoc(roleId, docId) {
    let sql = `select fc.* 
               from t_e4s_db_function_context fc, t_e4s_db_role_function rf, t_e4s_db_function f 
               where fc.id=rf.FUNCTION_ID
               and f.ID = fc.ID 
               and rf.ROLE_ID = "1"
               and f.PARENT_ID > 0 
               and fc.ID = 2586`
    return dbStroage.query(sql, { type: 'SELECT' })
  },
  getSearchDocs(roleId, docName) {
    let sql = `select fc.* 
               from t_e4s_db_function_context fc, t_e4s_db_role_function rf 
               where fc.id=rf.FUNCTION_ID 
               and rf.ROLE_ID = "${roleId}" 
               and fc.CONTEXT_NAME LIKE "%${docName}%"`
    return dbStroage.query(sql, {type: 'SELECT' })
  }
}
export default Doc