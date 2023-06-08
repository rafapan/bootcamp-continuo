(function (App) {
  const users = App.getUsers(); //App. porque los esta recogiendo del espacio App en window ya que los hemos añadido anteriormente
  const nodes = [];
  for (let user of users) {
    const node = App.getUserNode(user);
    nodes.push(node);
  }
  window.onload = function () {
    for (let node of nodes) {
      document.getElementById("root").append(node);
    }
  };
})(window.App || (window.App = {}));
