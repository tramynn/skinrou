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

// Get age categories
async function age(req, res) {
  const db = req.app.get("db");
  const age = req.params.age;

  // console.log("hit", age, typeof age);
  if (age == "15") {
    const ageFiltered = await db.ageCategories.age15();
    if (db) {
      res.status(200).json(ageFiltered);
    }
  } else if (age == "20") {
    const ageFiltered = await db.ageCategories.age20();
    if (db) {
      res.status(200).json(ageFiltered);
    }
    console.log(ageFiltered);
  } else if (age == "30") {
    const ageFiltered = await db.ageCategories.age30();
    if (db) {
      res.status(200).json(ageFiltered);
    }
  } else if (age == "40") {
    const ageFiltered = await db.ageCategories.age40();
    if (db) {
      res.status(200).json(ageFiltered);
    }
  } else if (age == "50") {
    const ageFiltered = await db.ageCategories.age50();
    if (db) {
      res.status(200).json(ageFiltered);
    }
  } else {
    res.status(404).json("404 Not Found.");
  }
}
0;
// Get skintype categories
async function skintype(req, res) {
  const db = req.app.get("db");
  const { type } = req.params;

  if (type === "combination") {
    const skintypeFiltered = await db.skintypeCategories.combo();
    if (db) {
      res.status(200).json(skintypeFiltered);
    }
  } else if (type === "dry") {
    const skintypeFiltered = await db.skintypeCategories.dry();
    if (db) {
      res.status(200).json(skintypeFiltered);
    }
  } else if (type === "oily") {
    const skintypeFiltered = await db.skintypeCategories.oily();
    if (db) {
      res.status(200).json(skintypeFiltered);
    }
  } else if (type === "sensitive") {
    const skintypeFiltered = await db.skintypeCategories.sens();
    if (db) {
      res.status(200).json(skintypeFiltered);
    }
  } else if (type === "normal") {
    const skintypeFiltered = await db.skintypeCategories.normal();
    if (db) {
      res.status(200).json(skintypeFiltered);
    }
  } else {
    res.status(404).json("404 Not Found.");
  }
}

// Get user routines
async function userRoutines(req, res) {
  const db = req.app.get("db");
  const { userId } = req.params;
  const userRoutines = await db.routines.getUserRoutines(userId);
  if (db) {
    res.status(200).json(userRoutines);
  }
}
// User can add routines
async function addRoutine(req, res) {
  const db = req.app.get("db");

  const {
    userId,
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
  const routineId = +req.params.routineId;
  const userId = +req.session.user.user_id;
  const {
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
    faceMask,
    sunscreen,
    note
  } = req.body;

  const editedRoutine = await db.routines.editRoutine([
    userId,
    routineId,
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
    faceMask,
    sunscreen,
    note
  ]);

  if (db) {
    res.status(200).json(editedRoutine);
  }
}
// User can only delete their routine by the routineId and categoryId
async function deleteRoutine(req, res) {
  const db = req.app.get("db");
  const routine_id = +req.params.routine_id;
  const userId = +req.session.user.user_id;
  const deletedRoutine = await db.routines.deleteRoutine([userId, routine_id]);
  console.log(deletedRoutine);
  if (db) {
    res.status(200).json(deletedRoutine);
  }
}

async function userLiked(req, res) {
  const db = req.app.get("db");
  const userId = +req.session.user.user_id;
  const userLiked = await db.routines.getUserLiked(userId);
  if (db) {
    res.status(200).json(userLiked);
  }
}

async function likeRoutine(req, res) {
  const db = req.app.get("db");
  const userId = +req.session.user.user_id;
  const routineId = +req.params.routineId;
  const foundLiked = await db.routines.checkUserLikedRoutine([
    userId,
    routineId
  ]);

  if (!foundLiked[0]) {
    const likedRoutine = await db.routines.likeRoutine([userId, routineId]);
    console.log(likedRoutine);
    if (likedRoutine) {
      res.sendStatus(200);
    }
  }
}

async function unlikeRoutine(req, res) {
  const db = req.app.get("db");
  const userId = +req.session.user.user_id;
  const routineId = +req.params.routineId;
  const foundLiked = await db.routines.checkUserLikedRoutine([
    userId,
    routineId
  ]);

  if (foundLiked[0]) {
    const unlikedRoutine = await db.routines.unlikeRoutine([userId, routineId]);
    if (unlikedRoutine) {
      res.sendStatus(200);
    }
  }
}

module.exports = {
  categories,
  routines,
  routinesByCategory,
  age,
  skintype,
  userRoutines,
  addRoutine,
  editRoutine,
  deleteRoutine,
  likeRoutine,
  unlikeRoutine,
  userLiked
};
