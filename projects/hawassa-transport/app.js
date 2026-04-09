const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3005;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const read = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
const save = (d) => fs.writeFileSync(DB_PATH, JSON.stringify(d, null, 2));

app.post('/api/auth/login', (req, res) => {
    const db = read();
    const u = db.users.find(x => x.username === req.body.username && x.password === req.body.password);
    if (!u) return res.status(401).json({ error: 'Auth failed' });
    res.json({ user: u });
});

app.post('/api/auth/register', (req, res) => {
    const db = read();
    if (db.users.find(u => u.username === req.body.username)) return res.status(400).json({ error: 'Existed' });
    const newUser = { id: Date.now(), ...req.body, role: 'user', balance: 200 };
    db.users.push(newUser);
    save(db);
    res.json({ user: newUser });
});

app.get('/api/fleet', (req, res) => {
    const db = read();
    res.json(db.buses.map(b => ({
        ...b,
        route: db.routes.find(r => r.id === b.routeId)
    })));
});

app.get('/api/routes', (req, res) => res.json(read().routes));

app.post('/api/tickets', (req, res) => {
    const db = read();
    const { userId, routeId } = req.body;
    const user = db.users.find(u => u.id === userId);
    const route = db.routes.find(r => r.id === routeId);
    if (user.balance < route.price) return res.status(400).json({ error: 'Low balance' });
    user.balance -= route.price;
    const ticket = { id: `HW-${Date.now()}`, userId, routeId, price: route.price, used: false, date: new Date().toISOString() };
    db.tickets.unshift(ticket);
    save(db);
    res.json({ ticket, balance: user.balance });
});

app.get('/api/tickets/:userId', (req, res) => {
    const db = read();
    res.json(db.tickets.filter(t => t.userId === parseInt(req.params.userId)).map(t => ({
        ...t, routeName: (db.routes.find(r => r.id === t.routeId) || {}).name
    })));
});

app.get('/api/alerts', (req, res) => res.json(read().alerts));

app.listen(PORT, () => console.log(`Transport Core: http://localhost:${PORT}`));
