const express = require('express');
const router = express.Router();
const { blogValidation } = require('./../validations');
const validate = require('./../middlewares/validate');
const { blogController } = require('./../controllers');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.get('/blogs', authenticateToken, blogController.getBlogs);
router.post('/blog', authenticateToken, validate(blogValidation.createBlogSchema), blogController.createBlog);

module.exports = router;