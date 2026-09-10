// controllers/contactController.js — Contact page controller
export const contactPage = (req, res) => {
  res.render("contact", {
    title: "Contact Ivan",
    email: "carlalcantara22sh@gmail.com",
    github: "https://github.com/AybanThings",
  });
};