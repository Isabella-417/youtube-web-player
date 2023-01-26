export const escapeHtml = (unsafe) => {
  if (typeof unsafe === "undefined") {
    return "";
  }
  return unsafe
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'");
};
