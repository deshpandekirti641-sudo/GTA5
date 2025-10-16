const express = require('express');
const router = express.Router();

const missions = [
  {
    id: 'heist001',
    name: 'Museum Mayhem',
    description: 'Steal the legendary painting without alerting security.',
    reward: 10000,
    tasks: [
      'Disable the security system',
      'Avoid guards',
      'Steal the painting',
      'Escape undetected'
    ]
  }
];

router.get('/', (req, res) => {
  res.json(missions);
});

router.get('/:id', (req, res) => {
  const mission = missions.find(m => m.id === req.params.id);
  if (!mission) return res.status(404).json({ error: 'Mission not found' });
  res.json(mission);
});

module.exports = router;