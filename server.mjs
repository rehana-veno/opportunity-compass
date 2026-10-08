import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'data', 'opportunities.json');
const PORT = process.env.PORT || 4173;
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.txt':'text/plain; charset=utf-8', '.md':'text/plain; charset=utf-8' };

function send(res, status, body, type='text/plain; charset=utf-8', extra={}) {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store', ...extra });
  res.end(body);
}
function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const resolved = path.resolve(root, '.' + (clean === '/' ? '/index.html' : clean));
  return resolved.startsWith(root) ? resolved : null;
}

const server = http.createServer((req, res) => {
  if (req.url?.startsWith('/api/health')) return send(res, 200, JSON.stringify({ok:true, opportunities:data.length}), 'application/json; charset=utf-8');
  if (req.url?.startsWith('/api/opportunities')) return send(res, 200, JSON.stringify({count:data.length, data}), 'application/json; charset=utf-8');
  const file = safePath(req.url || '/');
  if (!file || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return send(res, 404, 'Not found');
  send(res, 200, fs.readFileSync(file), mime[path.extname(file).toLowerCase()] || 'application/octet-stream');
});
server.listen(PORT, () => console.log(`Opportunity Compass running at http://localhost:${PORT}`));
