export function setPageMetaData(title, description) {
  document.title = title;
  const el = document.querySelector("meta[name='description']");
  el.setAttribute("content", description);
}
