import Dict from "../models/Dict";

export const home = async (req, res) => {
  const { keyword } = req.query;
  let words = [];
  if (keyword) {
    words = await Dict.find({
      spell: { $regex: new RegExp(keyword, "i") },
    });
  }
  return res.render("home", { pageTitle: "RHYMER", words });
};

export const getLogin = (req, res) => {
  return res.render("login");
};
export const postLogin = (req, res) => {
  return res.render("login");
};

export const feedback = (req, res) => {
  return res.render("feedback", { pageTitle: "Feedback" });
};
