const ContatoModel = require('../models/contatoModel');

class ContatoController {
  async create(req, res) {
    try {
      const contato = await ContatoModel.create(req.body);
      return res.status(201).json(contato);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar contato' });
    }
  }

  async findAll(req, res) {
    try {
      const contatos = await ContatoModel.findAll();
      return res.status(200).json(contatos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar contatos' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const contatoExistente = await ContatoModel.findById(id);
      
      if (!contatoExistente) {
        return res.status(404).json({ error: 'Contato não encontrado' });
      }
      
      const contatoAtualizado = await ContatoModel.update(id, req.body);
      return res.status(200).json(contatoAtualizado);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar contato' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const contatoExistente = await ContatoModel.findById(id);
      
      if (!contatoExistente) {
        return res.status(404).json({ error: 'Contato não encontrado' });
      }
      
      await ContatoModel.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir contato' });
    }
  }
}

module.exports = new ContatoController();