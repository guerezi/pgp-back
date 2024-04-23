const db = require("../config/db.config.js");
const User = db.User;

async function loginUser(params, callback) {
    try {
        const user = await User.findOne({
            where: {
                email: params.email,
                password: params.password
            }
        });

        console.log('New user Login');
        callback(null, user);
    } catch (error) {
        console.error('Error creating User:', error);
        callback(error);
    }
}

async function createUser(params, callback) {
    try {
        const newUser = await User.create({
            name: params.name,
            username: params.username,
            email: params.email,
            password: params.password
        });

        console.log('New user created:', newUser.toJSON());
        callback(null, newUser);
    } catch (error) {
        console.error('Error creating User:', error);
        callback(error);
    }
}


async function getUsers(params, callback) {
    try {
        const users = await Comment.findAll();
        callback(null, users);
    } catch (error) {
        console.error('Error getting users:', error);
        callback(error);
    }
}

async function getUserById(params, callback) {
    const user_id = params.user_id;

    try {
        const user = await User.findByPk(user_id);
        if (!user) throw new Error(`Not found User with id ${user_id}`);
        callback(null, user);
    } catch (error) {
        console.error('Error getting User by ID:', error);
        callback(error);
    }
}

async function updateUser(params, callback) {
    const user_id = params.user_id;

    try {
        const [updated] = await User.update(params, {
            where: { user_id: user_id }
        });

        if (!updated) throw new Error(`Cannot update user_id with id ${user_id}. Maybe comment was not found!`);
        callback(null, { message: "user_id updated successfully" });
    } catch (error) {
        console.error('Error updating comment:', error);
        callback(error);
    }
}

async function deleteUser(params) {
    const user_id = params.user_id;

    try {
        const deleted = await User.destroy({
            where: { user_id: user_id }
        });
        if (!deleted) throw new Error(`Cannot delete User with id ${commentId}. Maybe Comment was not found!`);

        callback(null, { message: "User deleted successfully" });
    } catch (error) {
        console.error('Error deleting User:', error);
        callback(error);
    }
}

module.exports = {
    loginUser,
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};

