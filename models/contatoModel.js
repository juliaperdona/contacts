import db from '../config/database.js'

class ContatoModel {
  async create(contato) {
    const [result] = await db.query(
      'INSERT INTO contatos (nome, telefone) VALUES (?, ?)',
      [contato.nome, contato.telefone]
    );

    const id = result.insertId;
    const { nome, telefone } = contato;
    return { id, nome, telefone };
  }

  async findAll() {
    const [rows] = await db.query('SELECT * FROM contatos ORDER BY nome');
    return rows;
  }

   async findById(id) {
    const [rows] = await db.query('SELECT * FROM contatos WHERE id = ?', [id]);
    return rows[0];
  }

  async update(id, contato) {
    const { nome, telefone } = contato; 
    const [result] = await db.query( 
      'UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?',
      [nome, telefone, id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return { id, nome, telefone };
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM contatos WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

export default new ContatoModel();
