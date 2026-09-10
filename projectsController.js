// controllers/projectsController.js — Projects page controller
export const projectsPage = (req, res) => {
  res.render("projects", {
    title: "Ivan's Projects",
    projects: [
      { name: "XianFire Activity App", description: "Modular routing demo built with XianFire." },
      { name: "Student Management System", description: "CRUD system using OOP concepts." },
      { name: "Portfolio Website", description: "Personal portfolio showcasing school projects." },
    ],
  });
};