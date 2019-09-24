async function categories(req, res) {
  const db = req.app.get("db");

  const categories = await db.categories.getCategories();

  res.status(200).json(categories);
}
async function routines(req, res) {
  const db = req.app.get("db");

  const routines = await db.routines.getAllRoutines();

  res.status(200).json(routines);
}
async function myRoutines(req, res) {
  const db = req.app.get("db");

  const { userId } = req.params;

  const userRoutines = await db.routines.getMyRoutines(userId);

  res.status(200).json(userRoutines);
}

async function addRoutine(req, res) {
  const db = req.app.get("db");

  const {
    userId,
    categoryId,
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
    time,
    skinType
  } = req.body;

  const routine = await db.routines.addRoutine([
    userId,
    categoryId,
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
    time,
    skinType
  ]);

  res.status(200).json(routine);
}

async function editRoutine(req, res) {
  const db = req.app.get("db");

  const { routineId } = req.params;
}
async function deleteRoutine(req, res) {
  const db = req.app.get("db");
}

module.exports = {
  categories,
  routines,
  myRoutines,
  addRoutine,
  editRoutine,
  deleteRoutine
};
