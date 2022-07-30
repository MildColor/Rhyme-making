export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const feedback = (req, res) => {
  return res.render("feedback", { pageTitle: "Feedback" });
};
