import { writeFile } from 'fs/promises';
import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const agent = proxy ? new HttpsProxyAgent(proxy) : undefined;

const listUrl = 'https://api.github.com/repos/openauthcert/vendor-registry/contents/vendors';
const res = await fetch(listUrl, { agent });
if (!res.ok) {
  throw new Error('Failed to fetch vendor list');
}
const files = await res.json();
const vendors = [];
for (const file of files) {
  if (!file.name.endsWith('.json')) continue;
  const slug = file.name.replace(/\.json$/, '');
  const dataRes = await fetch(file.download_url, { agent });
  if (!dataRes.ok) continue;
  const data = await dataRes.json();
  const oidc = JSON.stringify(data).toLowerCase().includes('oidc');
  const saml = JSON.stringify(data).toLowerCase().includes('saml');
  const vendor = {
    slug,
    oidc,
    saml,
    license: data.license || 'Unknown',
    ...data,
  };
  vendors.push(vendor);
}
await writeFile('src/data/registry.json', JSON.stringify(vendors, null, 2));
console.log('Wrote src/data/registry.json');
