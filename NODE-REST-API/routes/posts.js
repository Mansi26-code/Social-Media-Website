const router = require("express").Router();
const Post = require("../models/Post");
const User = require('../models/User');

// Create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post
router.put("/:id", async (req, res) => {
    console.log("Request received");
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated");
        } else {
            res.status(403).json("You can update only your post");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//delete a post

router.delete("/:id", async (req, res) => {
    console.log("Request received");
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        } else {
            res.status(403).json("You can delete only your post");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Like a post
// Like a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({ $push: { like: req.body.userId } });
            res.status(200).json({ message: "The post has been liked" });
        } else {
            await post.updateOne({ $pull: { like: req.body.userId } });
            res.status(200).json({ message: "The post has been unliked" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
    let currentUser=await User.findById(req.params.userId);
        let userPosts=await Post.find({userId: currentUser._id});
        const friendPosts=await Promise.all(
            currentUser.followings.map((friendId)=>{
               return Post.find({userId:friendId});
            })
        );
        // Add logic here to include friends' posts if needed
        res.json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err);
    }
});

//get users all posts 

router.get("/profile/:username", async (req, res) => {
    try {
    const user=await User.findOne({username:req.params.username});
    const posts=await Post.find({userId:user._id});
    res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
