class IndexController {
  static renderHome(req, res) {
    res.render("index", { title: "WCCI" });
  }
}

module.exports = IndexController;
