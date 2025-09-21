// barrera.js
document.addEventListener("DOMContentLoaded", () => {
  const refs = [
    { id: 15, link: "https://pubmed.ncbi.nlm.nih.gov/xxxxx" },
    { id: 16, link: "https://pubmed.ncbi.nlm.nih.gov/yyyyy" },
    { id: 17, link: "https://doi.org/10.5281/zenodo.17070288" },
    { id: 20, link: "https://uk.wikipedia.org/wiki/Ароматерапія" }
  ];

  refs.forEach(ref => {
    console.log(`Referencia [${ref.id}] validada: ${ref.link}`);
  });
});
