import dbStroage from './db'
const Doc = {
  getDocs(userId, catalogId) {
    return [
      { code: 'user.get', id: 1 },
      { code: 'doc.get', id: 2 },
      { code: 'catalog.get', id: 3 }
    ]
  },
  getDoc(docId) {
    return dbStroage.query('select * from t_e4s_db_function_context where id = :docId', { replacements: { docId: docId }, row: true })
   }
}
export default Doc