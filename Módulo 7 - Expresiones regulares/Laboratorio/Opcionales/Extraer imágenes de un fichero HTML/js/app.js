const patterncase1 = /<img src="(.*)"/;

const valuescase1 = [
  '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>',
];

valuescase1.forEach((value) => {
  console.log("Caso 1 " + value + " -> ", value.match(patterncase1));
});

const patterncase2 = /<img\s? src="(.*)"/gm;
const valuescase2 =
  ['<html>\n<body>\n<img\nsrc="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"\n/>\n<h1>ejemplo</h1>\n<img\nsrc="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"\n/>\n</body>\n</html>'];

  valuescase2.forEach((value) => {
  console.log("Caso 2 " + value.match(patterncase2));
});
