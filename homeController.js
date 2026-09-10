// controllers/homeController.js — Home page controller
export const homePage = (req, res) => {
  res.render("home", {
    title: "Ivan XianFire App | Home",
    name: "Carl Ivan Alcantara",
    message: "Welcome to my XianFire application!",
  });
};