import marked from 'marked'
import doT from 'dot'
import fs from 'fs'

let [mdtxt, tmpl] = [
  '/dev/stdin', 'template.html'
].map(f => fs.readFileSync(f).toString())

let content = marked(mdtxt)
let tmplFn = doT.template(tmpl)
let output = tmplFn({content: content})

fs.writeFileSync('index.html', output)
