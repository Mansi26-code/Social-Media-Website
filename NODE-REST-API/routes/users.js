const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = require("express").Router();

// Middleware to simulate user authentication for testing purposes
// Replace with real authentication middleware
router.use((req, res, next) => {
    req.user = { id: "sampleUserId", isAdmin: true }; // Simulate a logged-in user
    next();
});

router.get("/", (req, res) => {
    res.send("Hello, it's user routes");
});

// Update user
router.put("/:id", async (req, res) => {
    console.log("Update user route hit"); // Debug logging
    const userId = req.body.userId;
    const paramsId = req.params.id;

    if (userId === paramsId || req.body.isAdmin) {
        console.log("Authorized user"); // Debug logging
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                console.error("Error hashing password:", err); // Debug logging
                return res.status(500).json({ error: 'Error hashing password', details: err });
            }
        }
        try {
            const user = await User.findByIdAndUpdate(paramsId, { $set: req.body }, { new: true });
            if (!user) {
                return res.status(404).json("User not found");
            }
            console.log("User updated successfully"); // Debug logging
            res.status(200).json("Account has been updated");
        } catch (err) {
            console.error("Error updating user:", err); // Debug logging
            return res.status(500).json({ error: 'Error updating user', details: err });
        }
    } else {
        console.log("Unauthorized user"); // Debug logging
        return res.status(403).json("You can update only your account");
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    console.log("Delete user route hit"); // Debug logging
    const userId = req.body.userId;
    const paramsId = req.params.id;

    if (userId === paramsId || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(paramsId);
            if (!user) {
                return res.status(404).json("User not found");
            }
            console.log("User deleted successfully"); // Debug logging
            res.status(200).json("Account has been deleted successfully");
        } catch (err) {
            console.error("Error deleting user:", err); // Debug logging
            return res.status(500).json({ error: 'Error deleting user', details: err });
        }
    } else {
        console.log("Unauthorized user"); // Debug logging
        return res.status(403).json("You can delete only your account");
    }
});

// Get a user
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId ? await User.findById(userId) : await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json("User not found");
        }
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        console.error("Error fetching user:", err); // Debug logging
        res.status(500).json(err);
    }
});

// Follow a user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (!user || !currentUser) {
                return res.status(404).json("User not found");
            }

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                return res.status(200).json("User has been followed");
            } else {
                return res.status(403).json("You already follow this user");
            }
        } catch (err) {
            console.error("Error following user:", err); // Debug logging
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can't follow yourself");
    }
});

// Unfollow a user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (!user || !currentUser) {
                return res.status(404).json("User not found");
            }

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                return res.status(200).json("User has been unfollowed");
            } else {
                return res.status(403).json("You don't follow this user");
            }
        } catch (err) {
            console.error("Error unfollowing user:", err); // Debug logging
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can't unfollow yourself");
    }
});

module.exports = router;
