document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('click', () => {
    img.src = img.src === "estro.gif" ? "sky_top_left.gif" : "estro.gif";
  });
});
