const express = require('express');
const router = express.Router();

const characters = [
  {
    id: 'char001',
    name: 'Nova Blaze',
    role: 'Hacker',
    special: 'Disables security systems faster',
    avatar: '/assets/characters/nova-blaze.png'
  },
  {
    id: 'char002',
    name: 'Max Torque',
    role: 'Driver',
    special: 'Escapes police chases easier',
    avatar: '/assets/characters/max-torque.png'
  }
];

router.get('/', (req, res) => {
  res.json(characters);
});

router.get('/:id', (req, res) => {
  const char = characters.find(c => c.id === req.params.id);
  if (!char) return res.status(404).json({ error: 'Character not found' });
  res.json(char);
});

module.exports = router;