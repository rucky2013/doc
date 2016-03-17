import dbStroage from './db'

const User = {
  getUserByName: (userName) => {
    let sql = `select * from t_e4s_db_user where login_name = "${userName}"`

    return dbStroage.query(sql, {type: 'SELECT'})
  },
  getUserRoleId: userId => {
    let sql = `select role_id from t_e4s_db_user_role where user_id = "${userId}"`

    return dbStroage.query(sql, {type: 'SELECT'})
  }
}

export default User