async function getProfPic(req, res) {
  const db = req.app.get("db");
  const userId = req.session.user.user_id;
  const pic = await db.profPic.getProfPic(userId);
  if (db) {
    res.status(200).json(pic);
  }
}

async function addProfPic(req, res) {
  const db = req.app.get("db");
  const { url, userId } = req.body;

  const pic = await db.profPic.addProfPic([userId, url]);
  if (db) {
    res.status(200).json(pic);
  }
}

module.exports = {
  getProfPic,
  addProfPic
};
