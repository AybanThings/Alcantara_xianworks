// controllers/skillsController.js — Skills page controller
export const skillsPage = (req, res) => {
  res.render("skills", {
    title: "Ivan's Skills",
    skills: [
      { name: "JavaScript / Node.js", level: "Intermediate" },
      { name: "Express & XianFire", level: "Intermediate" },
      { name: "HTML & CSS / Tailwind", level: "Intermediate" },
      { name: "MySQL / Sequelize", level: "Beginner" },
      { name: "Git & GitHub", level: "Intermediate" },
    ],
  });
};