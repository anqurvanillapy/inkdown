import marked from 'marked'
import fs from 'fs'

const text = fs.readFileSync('README.md', 'utf-8')
const css = fs.readFileSync('style.css', 'utf-8')
const payload = marked(text)
let output =
`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="initial-scale=1">
  <meta name="description" content="Markdown for handwriting">
  <meta name="author" content="AnqurVanillapy">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Nothing+You+Could+Do">
  <title>Inkdown</title>
  <style>${css}</style>
</head>
<body>
  <section>
    <pre class="text">${text}</pre>
  </section>
  <section>
    ${payload}
  </section>
  </body>
</html>`

fs.writeFileSync('index.html', output)
