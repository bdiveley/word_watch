const fs = require("fs")
const { JSDOM } = require("jsdom")
const html = fs.readFileSync("index.html")
const dom = new JSDOM(html);

global.window = dom.window
document = global.document = window.document
global.navigator = {
  userAgent: "node.js"
}
