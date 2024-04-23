const db = require("../config/db.config.js");
const Dream = db.Dream;

async function createDream(params, callback) {
  try {
    const newDream = await Dream.create({
      user_id: params.userId,
      dream_content: params.dreamContent,
      image: params.image
    });

    console.log('New dream created:', newDream.toJSON());
    callback(null, newDream);
  } catch (error) {
    console.error('Error creating dream:', error);
    callback(error);
  }
}


async function getDreams(params, callback) {
  const dreamContent = params.dreamContent;
  const condition = dreamContent ? { dream_content: { [Sequelize.Op.iLike]: `%${dreamContent}%` } } : {};

  try {
    console.log(Dream);

    const dreams = await Dream.findAll({ where: condition });
    callback(null, dreams);
  } catch (error) {
    console.error('Error getting dream:', error);
    callback(error);
  }
}

// Function to get dream by ID
async function getDreamById(params, callback) {
  const dreamId = params.dreamId;

  try {
    const dream = await Dream.findByPk(dreamId);
    if (!dream) throw new Error(`Not found Dream with id ${dreamId}`);
    callback(null, dream);
  } catch (error) {
    console.error('Error getting dream by ID:', error);
    callback(error);
  }
}

// Function to update dream
async function updateDream(params, callback) {
  const dreamId = params.dreamId;

  try {
    // TODO: Rever esse update params
    const [updated] = await Dream.update(params, {
      where: { dream_id: dreamId }
    });

    if (!updated) throw new Error(`Cannot update Dream with id ${dreamId}. Maybe Dream was not found!`);

    callback(null, { message: "Dream updated successfully" });
  } catch (error) {
    console.error('Error updating dream:', error);
    callback(error);
  }
}

// Function to delete dream
async function deleteDream(params) {
  const dreamId = params.dreamId;

  try {
    const deleted = await Dream.destroy({
      where: { dream_id: dreamId }
    });
    if (!deleted) throw new Error(`Cannot delete Dream with id ${dreamId}. Maybe Dream was not found!`);

    callback(null, { message: "Dream deleted successfully" });
  } catch (error) {
    console.error('Error deleting dream:', error);
    callback(error);
  }
}

module.exports = {
  createDream,
  getDreams,
  getDreamById,
  updateDream,
  deleteDream
};

