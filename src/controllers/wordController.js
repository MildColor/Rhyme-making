import Dict from "../models/Dict";

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  try {
    const { spell, mean } = req.body;
    await Dict.create({
      spell,
      mean,
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload Word",
      errorMessage: error._message,
    });
  }
};

export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: "edit" });
};
export const postEdit = (req, res) => {};
