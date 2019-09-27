// Get all categories
async function categories(req, res) {
  const db = req.app.get("db");
  const categories = await db.categories.getCategories();

  if (db) {
    res.status(200).json(categories);
  }
}
// Get all routines
async function routines(req, res) {
  const db = req.app.get("db");
  const routines = await db.routines.getAllRoutines();

  if (db) {
    res.status(200).json(routines);
  }
}
// Get routines by category
async function routinesByCategory(req, res) {
  const db = req.app.get("db");
  const categoryId = +req.params.categoryId;
  const routines = await db.routines.getRoutinesByCategory(categoryId);

  if (db) {
    res.status(200).json(routines);
  }
}
// Get user routines
async function myRoutines(req, res) {
  const db = req.app.get("db");
  const { categoryId, userId } = req.params;
  const userRoutines = await db.routines.getMyRoutines([categoryId, userId]);
  if (db) {
    res.status(200).json(userRoutines);
  }
}
// User can add routines
async function addRoutine(req, res) {
  const db = req.app.get("db");

  const {
    userId,
    categoryId,
    skinType,
    time,
    firstCleanser,
    secondCleanser,
    exfoliator,
    toner,
    essence,
    eyeSerum,
    eyeMoisturizer,
    faceSerum,
    faceMoisturizer,
    neckSerum,
    neckMoisturizer,
    mask,
    sunscreen,
    note
  } = req.body;
  console.log(req.body);

  const addedRoutine = await db.routines.addRoutine([
    userId,
    categoryId,
    skinType,
    time,
    firstCleanser,
    secondCleanser,
    exfoliator,
    toner,
    essence,
    eyeSerum,
    eyeMoisturizer,
    faceSerum,
    faceMoisturizer,
    neckSerum,
    neckMoisturizer,
    mask,
    sunscreen,
    note
  ]);
  if (db) {
    res.status(200).json(addedRoutine);
  }
}
// User can only edit their routine by the routineId and categoryId
async function editRoutine(req, res) {
  const db = req.app.get("db");
  const { routineId, categoryId } = req.params;
  const {
    userId,
    time,
    skinType,
    firstCleanser,
    secondCleanser,
    exfoliator,
    toner,
    essence,
    eyeSerum,
    eyeMoisturizer,
    faceSerum,
    faceMoisturizer,
    neckSerum,
    neckMoisturizer,
    mask,
    sunscreen,
    note
  } = req.body;

  const editedRoutine = await db.routines.editRoutine([
    userId,
    routineId,
    categoryId,
    time,
    skinType,
    firstCleanser,
    secondCleanser,
    exfoliator,
    toner,
    essence,
    eyeSerum,
    eyeMoisturizer,
    faceSerum,
    faceMoisturizer,
    neckSerum,
    neckMoisturizer,
    mask,
    sunscreen,
    note
  ]);
  console.log(editedRoutine);
  if (db) {
    res.status(200).json(editedRoutine);
  }
}
// User can only delete their routine by the routineId and categoryId
async function deleteRoutine(req, res) {
  const db = req.app.get("db");
  const { routineId, categoryId } = req.params;
  const { userId } = req.body;
  const deletedRoutine = await db.routines.deleteRoutine([
    userId,
    routineId,
    categoryId
  ]);

  if (db) {
    res.status(200).json(deletedRoutine);
  }
}

module.exports = {
  categories,
  routines,
  routinesByCategory,
  myRoutines,
  addRoutine,
  editRoutine,
  deleteRoutine
};
