function validateContato(req, res, next) {
    const { nome, telefone } = req.body;
    
    // Validação do nome (mínimo de duas palavras com pelo menos 3 letras cada)
    if (!nome) {
      return res.status(400).json({ error: 'O nome é obrigatório' });
    }
    
    const palavras = nome.trim().split(/\s+/);
    if (palavras.length < 2) {
      return res.status(400).json({ error: 'O nome deve conter pelo menos duas palavras' });
    }
    
    const palavrasValidas = palavras.every(palavra => palavra.length >= 3);
    if (!palavrasValidas) {
      return res.status(400).json({ error: 'Cada palavra do nome deve ter pelo menos 3 letras' });
    }
    
    // Validação do telefone
    if (!telefone) {
      return res.status(400).json({ error: 'O telefone é obrigatório' });
    }
    
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
      return res.status(400).json({ error: 'O telefone deve estar no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx' });
    }
    
    next();
  }
  
  module.exports = {
    validateContato
  };