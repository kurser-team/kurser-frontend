/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs")
const path = require("path")

const distDir = path.join(__dirname, "dist")

if (fs.existsSync(path.join(distDir, "_next"))) {
  fs.renameSync(path.join(distDir, "_next"), path.join(distDir, "next"))
} else {
  console.log("_next directory not found")
}

const renameImports = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8")
  const updatedData = data.replace(/\/_next\//g, "/next/")
  fs.writeFileSync(filePath, updatedData)
}

const removeInlineScripts = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8")
  const updatedData = data.replace(
    /<script>([\s\S]*?)<\/script>/g,
    (_, scriptContent) => {
      const scriptFileName = `script_${Date.now() + Math.random()}.js`
      const scriptDir = path.join(distDir, "scripts")
      if (!fs.existsSync(scriptDir)) {
        fs.mkdirSync(scriptDir)
      }
      fs.writeFileSync(path.join(scriptDir, scriptFileName), scriptContent)
      return `<script src="scripts/${scriptFileName}"></script>`
    }
  )
  fs.writeFileSync(filePath, updatedData)
}

const readDirRecursively = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const splitted = file.split(".")
    if (splitted.length > 1) {
      const extension = splitted.at(-1)
      if (["txt", "html", "css", "js"].includes(extension)) {
        renameImports(filePath)
        removeInlineScripts(filePath)
      }
    } else {
      readDirRecursively(filePath)
    }
  })
}

readDirRecursively(distDir)

console.log("Removed inline scripts")
console.log("Renamed _next imports")
console.log("Done")
