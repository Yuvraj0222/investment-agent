const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\btext-white\b/g, 'text-foreground');
  content = content.replace(/\btext-gray-100\b/g, 'text-foreground/90');
  content = content.replace(/\btext-gray-200\b/g, 'text-foreground/80');
  content = content.replace(/\btext-gray-300\b/g, 'text-foreground/80');
  content = content.replace(/\btext-gray-400\b/g, 'text-muted-foreground');
  fs.writeFileSync(filePath, content);
}

['src/pages/home.tsx', 'src/pages/research-detail.tsx'].forEach(f => {
  const full = path.join('c:/Users/yuv22/Downloads/investment-agent (3)/investment-agent (3)/artifacts/investment-agent', f);
  if (fs.existsSync(full)) {
    replaceInFile(full);
    console.log('Updated', f);
  }
});
