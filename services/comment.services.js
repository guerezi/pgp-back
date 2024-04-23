const db = require("../config/db.config.js");
const Comment = db.Comment;

async function createComment(params, callback) {
    try {
        const newComment = await Comment.create({
            user_id: params.user_id,
            dream_id: params.dream_id,
            content: params.dreamContent,
            image: params.image
        });

        console.log('New comment created:', newComment.toJSON());
        callback(null, newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        callback(error);
    }
}


async function getComments(params, callback) {
    const user_id = params.user_id;
    const condition = user_id ? { user_id: { [Sequelize.Op.iLike]: `%${user_id}%` } } : {};

    try {
        const comments = await Comment.findAll({ where: condition });
        callback(null, comments);
    } catch (error) {
        console.error('Error getting comments:', error);
        callback(error);
    }
}

async function getCommentById(params, callback) {
    const comment_id = params.comment_id;

    try {
        const comment = await Comment.findByPk(comment_id);
        if (!comment) throw new Error(`Not found comment with id ${comment_id}`);
        callback(null, comment);
    } catch (error) {
        console.error('Error getting comment by ID:', error);
        callback(error);
    }
}

async function updateComment(params, callback) {
    const comment_id = params.comment_id;

    try {
        const [updated] = await Comment.update(params, {
            where: { comment_id: comment_id }
        });

        if (!updated) throw new Error(`Cannot update comment_id with id ${comment_id}. Maybe comment was not found!`);
        callback(null, { message: "comment_id updated successfully" });
    } catch (error) {
        console.error('Error updating comment:', error);
        callback(error);
    }
}

async function deleteComment(params) {
    const commentId = params.comment_id;

    try {
        const deleted = await Comment.destroy({
            where: { comment_id: commentId }
        });
        if (!deleted) throw new Error(`Cannot delete Comment with id ${commentId}. Maybe Comment was not found!`);

        callback(null, { message: "Comment deleted successfully" });
    } catch (error) {
        console.error('Error deleting comment:', error);
        callback(error);
    }
}

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment
};

