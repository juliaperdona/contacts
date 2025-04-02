const db = require('../config/database');

class ContatoModel {
  async create(contato) {
    const [result] = await db.query(
      'INSERT INTO contatos (nome, telefone) VALUES (?, ?)',
      [contato.nome, contato.telefone]
    );
    
    const id = result.insertId;
    return { id, ...contato };
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
    await db.query(
      'UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?',
      [contato.nome, contato.telefone, id]
    );
    
    return { id, ...contato };
  }

  async delete(id) {
    await db.query('DELETE FROM contatos WHERE id = ?', [id]);
    return true;
  }
}

module.exports = new ContatoModel();