const fs = require("fs")
const path = require("path")

const distDir = path.join(__dirname, "dist")
const oldNextDir = path.join(distDir, "_next")
const newNextDir = path.join(distDir, "next-assets")

// Rename _next to next-assets for browser extension compatibility
if (fs.existsSync(oldNextDir)) {
  fs.renameSync(oldNextDir, newNextDir)
  console.log("Renamed _next to next-assets")
}

// Copy fonts from public/fonts/ to dist/fonts/
const fontsDir = path.join(distDir, "fonts")
const publicFontsDir = path.join(__dirname, "public", "fonts")
if (fs.existsSync(publicFontsDir)) {
  fs.cpSync(publicFontsDir, fontsDir, { recursive: true })
  console.log("Copied fonts to dist/fonts")
} else {
  console.log("No fonts found in public/fonts/ - skipping font copy")
}

// Function to find all HTML files in a directory recursively
function findHtmlFiles(dir) {
  const htmlFiles = []
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Recursively search subdirectories
      htmlFiles.push(...findHtmlFiles(filePath))
    } else if (file.endsWith(".html")) {
      // Add HTML files to the list
      htmlFiles.push(filePath)
    }
  })

  return htmlFiles
}

// Process each HTML file
function processHtmlFile(htmlFilePath) {
  let htmlContent = fs.readFileSync(htmlFilePath, "utf8")

  // Extract inline scripts to comply with CSP
  const inlineScriptRegex = /<script>([\s\S]*?)<\/script>/g
  let scriptContent = ""
  let match
  while ((match = inlineScriptRegex.exec(htmlContent)) !== null) {
    scriptContent += match[1] + "\n"
  }

  if (scriptContent) {
    const scriptFilePath = path.join(
      distDir,
      "next-assets",
      "inline-scripts.js"
    )
    fs.mkdirSync(path.dirname(scriptFilePath), { recursive: true })
    // Append to shared inline-scripts.js (or create if it doesn't exist)
    if (fs.existsSync(scriptFilePath)) {
      const existingScripts = fs.readFileSync(scriptFilePath, "utf8")
      fs.writeFileSync(scriptFilePath, existingScripts + "\n" + scriptContent)
    } else {
      fs.writeFileSync(scriptFilePath, scriptContent)
    }
    htmlContent = htmlContent.replace(
      inlineScriptRegex,
      '<script src="./next-assets/inline-scripts.js"></script>'
    )
  }

  // Remove font preloads and direct font links for .woff2 and .ttf
  htmlContent = htmlContent.replace(
    /<link rel="preload"[^>]*\.(woff2|ttf)"[^>]*>/g,
    ""
  )
  htmlContent = htmlContent.replace(/<link[^>]*\.(woff2|ttf)"[^>]*>/g, "")

  // Fix asset paths from /_next/ to ./next-assets/
  htmlContent = htmlContent.replace(/"\/_next\//g, '"./next-assets/')

  // Fix font paths in inline <style> tags (e.g., from /fonts/ to ./fonts/)
  htmlContent = htmlContent.replace(/url\(\/fonts\//g, "url(./fonts/")

  // Write updated HTML back
  fs.writeFileSync(htmlFilePath, htmlContent)
  console.log(`Processed: ${htmlFilePath}`)
}

// Find and process all HTML files in dist/
const htmlFiles = findHtmlFiles(distDir)

if (htmlFiles.length === 0) {
  console.error("No HTML files found in dist folder")
  process.exit(1)
}

htmlFiles.forEach((htmlFile) => {
  processHtmlFile(htmlFile)
})

// Log font files in dist/fonts/ for debugging
const distFontsDir = path.join(distDir, "fonts")
if (fs.existsSync(distFontsDir)) {
  console.log("Font files in dist/fonts:", fs.readdirSync(distFontsDir))
} else {
  console.log("No fonts directory found in dist/")
}

// Log assets in dist/next-assets/static/ for debugging
const staticDir = path.join(distDir, "next-assets", "static")
if (fs.existsSync(staticDir)) {
  console.log(
    "Static assets in dist/next-assets/static:",
    fs.readdirSync(staticDir)
  )
} else {
  console.log("No static directory found in dist/next-assets/")
}

console.log("Post-build processing complete")
