import { cp, copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
await mkdir(out, { recursive: true });

// Keep the original HTML pages and their referenced media available during migration.
for (const [source, destination] of [['index.html','portfolio-original.html'],['portfolio.html','portfolio.html'],['blog.html','blog.html']]) {
  try { await copyFile(path.join(root, source), path.join(out, destination)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
for (const directory of ['cert_images','achievements']) {
  try { if ((await stat(path.join(root,directory))).isDirectory()) await cp(path.join(root,directory),path.join(out,directory),{recursive:true}); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
const allowed = new Set(['.jpg','.jpeg','.png','.webp','.gif','.svg','.ico','.pdf','.mp4','.webm']);
for (const entry of await readdir(root,{withFileTypes:true})) {
  if (!entry.isFile() || !allowed.has(path.extname(entry.name).toLowerCase())) continue;
  await copyFile(path.join(root,entry.name),path.join(out,entry.name));
}
console.log('Copied legacy portfolio pages and media into dist/.');
