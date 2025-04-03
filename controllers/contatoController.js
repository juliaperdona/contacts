import ContatoModel from '../models/contatoModel.js';

class ContatoController {
  async create(req, res) {
    try {
      const contato = await ContatoModel.create(req.body);
      return res.status(201).json(contato);
    } catch (error) {
      console.error("Erro em ContatoController.create:", error);
      return res.status(500).json({ error: 'Erro interno ao criar contato' });
    }
  }

  async findAll(req, res) {
    try {
      const contatos = await ContatoModel.findAll();
      return res.status(200).json(contatos);
    } catch (error) {
      console.error("Erro em ContatoController.findAll:", error);
      return res.status(500).json({ error: 'Erro interno ao listar contatos' });
    }
  }

  async update(req, res) {
    const { id } = req.params; 
    try {
      const contatoExistente = await ContatoModel.findById(id);

      if (!contatoExistente) {
        return res.status(404).json({ error: 'Contato não encontrado' });
      }

      const contatoAtualizado = await ContatoModel.update(id, req.body);
      if (contatoAtualizado === null) { // Checagem adicional se o model retornar null
         return res.status(404).json({ error: 'Contato não encontrado para atualização (concorrência?)' });
      }

      return res.status(200).json(contatoAtualizado);
    } catch (error) {
      console.error(`Erro em ContatoController.update (ID: ${id}):`, error);
      return res.status(500).json({ error: 'Erro interno ao atualizar contato' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      
      const deletadoComSucesso = await ContatoModel.delete(id);
      if (!deletadoComSucesso) {
           return res.status(404).json({ error: 'Contato não encontrado para exclusão' });
      }

      return res.status(204).send(); // 204 No Content
    } catch (error) {
      console.error(`Erro em ContatoController.delete (ID: ${id}):`, error);
      return res.status(500).json({ error: 'Erro interno ao excluir contato' });
    }
  }
}

export default new ContatoController();