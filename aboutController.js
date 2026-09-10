// controllers/aboutController.js — About page controller
export const aboutPage = (req, res) => {
  res.render("about", {
    title: "About Ivan",
    name: "Carl Ivan Alcantara",
    description:
      "A student developer exploring modern JavaScript, web development, and the XianFire framework.",
  });
};