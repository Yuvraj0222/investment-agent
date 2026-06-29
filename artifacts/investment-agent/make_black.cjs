const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // replace text-foreground introduced in the last step with text-black
  content = content.replace(/\btext-foreground(?!\/|-)\b/g, 'text-black');
  
  // replace text-foreground/90, text-foreground/80 with text-slate-800, text-slate-700
  content = content.replace(/\btext-foreground\/90\b/g, 'text-slate-800');
  content = content.replace(/\btext-foreground\/80\b/g, 'text-slate-700');
  
  fs.writeFileSync(filePath, content);
}

['src/pages/home.tsx', 'src/pages/research-detail.tsx', 'src/components/layout.tsx'].forEach(f => {
  const full = path.join('c:/Users/yuv22/Downloads/investment-agent (3)/investment-agent (3)/artifacts/investment-agent', f);
  if (fs.existsSync(full)) {
    replaceInFile(full);
    console.log('Updated to text-black', f);
  }
});
