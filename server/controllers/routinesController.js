async function categories(req, res) {
  const db = req.app.get("db");
  const categories = await db.categories.getCategories();

  if (db) {
    res.status(200).json(categories);
  }
}
async function routines(req, res) {
  const db = req.app.get("db");
  const routines = await db.routines.getAllRoutines();

  if (db) {
    res.status(200).json(routines);
  }
}
async function myRoutines(req, res) {
  const db = req.app.get("db");
  const { userId } = req.params;
  const userRoutines = await db.routines.getMyRoutines(userId);
  if (db) {
    res.status(200).json(userRoutines);
  }
}

async function addRoutine(req, res) {
  const db = req.app.get("db");
  const { user_id } = req.session.user;
  const {
    user_id,
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
    sunscreen
  } = req.body;

  const addedRoutine = await db.routines.addRoutine([
    user_id,
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
    sunscreen
  ]);
  if (db) {
    res.status(200).json(addedRoutine);
  }
}

async function editRoutine(req, res) {
  const db = req.app.get("db");
  const { routineId } = req.params;
  const editedRoutine = await db.routine.editRoutine(routineId);

  if (db) {
    res.status(200).json(editedRoutine);
  }
}
async function deleteRoutine(req, res) {
  const db = req.app.get("db");
  const { routineId } = req.params;
  const deletedRoutine = await db.route.deleteRoutine(routineId);

  if (db) {
    res.status(200).json(deletedRoutine);
  }
}

module.exports = {
  categories,
  routines,
  myRoutines,
  addRoutine,
  editRoutine,
  deleteRoutine
};
