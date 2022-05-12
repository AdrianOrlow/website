interface EntityMap {
  [key: string]: string;
}

const entityMap: EntityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
};

const escapeHtml = (string: string) =>
  string.replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);

export default escapeHtml;
