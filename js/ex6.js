const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];


const contentDiv = document.getElementById('content');

const createDictionary = () => {
  const definitionList = document.createElement('dl');
  words.forEach(word => {
      const newTerm = document.createElement('dt');
      newTerm.innerHTML = `<strong>${word.term}</strong>`;
      
      const newDef = document.createElement('dd');
      newDef.textContent = word.definition;
      
      definitionList.appendChild(newTerm);
      definitionList.appendChild(newDef);
  });
  contentDiv.appendChild(definitionList);
};

createDictionary();