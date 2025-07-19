const express = require('express')
//const app = express() - this kind of used as a global root
//but we need something local so we use router
const router = express.Router();

// Get all users (JSON)
router.get('/api/users', async (req, res) => {
    const users = await User.find({});
    return res.json(users);
});

// Get all users (HTML)
router.get('/users', async (req, res) => {
    const users = await User.find({});
    const html = `
        <ul>
            ${users.map(user => `<li>${user.firtName} ${user.lastName}</li>`).join('')}
        </ul>
    `;
    res.send(html);
});

// Get a user by ID
router.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: "Invalid ID" });
    }
});

// Create a new user
router.post('/api/users', async (req, res) => {
    const body = req.body;
    try {
        const newUser = await User.create({
            firtName: body.firstt_name,
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title,
            gender: body.gender
        });
        return res.status(201).json({ status: "User created", userId: newUser._id });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

// Update a user (PATCH)
router.patch('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: "User not found" });
        return res.json({ status: "User updated", user: updatedUser });
    } catch (err) {
        return res.status(500).json({ error: "Invalid ID or request" });
    }
});

// Delete a user
router.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });
        return res.json({ status: "User deleted" });
    } catch (err) {
        return res.status(500).json({ error: "Invalid ID" });
    }
});

module.export = router;