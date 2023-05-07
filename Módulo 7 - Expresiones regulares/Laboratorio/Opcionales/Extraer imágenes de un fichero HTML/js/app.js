const patterncase1 = /<img src="(.*)"/;

const valuescase1 = [
  '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>',
];

valuescase1.forEach((value) => {
  console.log("Caso 1 " + value + " -> ", value.match(patterncase1));
});

const patterncase2 = /<img\s?src="(.*)"\/>/gim;
const valuescase2 = `<html>
                    <body>
                        <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
                        <h1>ejemplo</h1>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                    </body>
                    </html>`;

console.log(valuescase2.match(patterncase2));
