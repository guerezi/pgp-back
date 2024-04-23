const db = require("../config/db.config.js");
const Notification = db.Notification;

async function createNotification(params, callback) {
    try {
        const newNotification = await Notification.create({
            readed: params.readed,
            content: params.content,
            dream_id: params.dream_id,
            user_id: params.user_id
        });

        console.log('New notification created:', newNotification.toJSON());
        callback(null, newNotification);
    } catch (error) {
        console.error('Error creating comment:', error);
        callback(error);
    }
}


async function getNotifications(params, callback) {
    const user_id = params.user_id;
    const condition = user_id ? { user_id: { [Sequelize.Op.iLike]: `%${user_id}%` } } : {};

    try {
        const notification = await Notification.findAll({ where: condition });
        callback(null, notification);
    } catch (error) {
        console.error('Error getting notification:', error);
        callback(error);
    }
}

async function getNotificationById(params, callback) {
    const notification_id = params.notification_id;
    const user_id = params.user_id;

    try {
        const notification = await Notification.findByPk(notification_id).where({ user_id: user_id });
        if (!notification) throw new Error(`Not found notification with id ${notification_id}`);
        callback(null, notification);
    } catch (error) {
        console.error('Error getting notification by ID:', error);
        callback(error);
    }
}

async function updateNotification(params, callback) {
    const notification_id = params.notification_id;

    try {
        const [updated] = await Notification.update(params, {
            where: { notification_id: notification_id }
        });

        if (!updated) throw new Error(`Cannot update notification_id with id ${notification_id}. Maybe notification was not found!`);
        callback(null, { message: "notification_id updated successfully" });
    } catch (error) {
        console.error('Error updating notification:', error);
        callback(error);
    }
}

async function deleteNotification(params) {
    try {
        const deleted = await Notification.destroy({
            where: { notification_id: params.notification_id, user_id: params.user_id }
        });
        if (!deleted) throw new Error(`Cannot delete Notification with id ${params.notification_id}. Maybe Notification was not found!`);

        callback(null, { message: "Notification deleted successfully" });
    } catch (error) {
        console.error('Error deleting notification:', error);
        callback(error);
    }
}

module.exports = {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    deleteNotification
};

