const matches = [
  { date: "2023-01-20", opponent: "9B6", result: "2-1", goals: "Aziz Larif , Aziz Larif"},
  { date: "2023-02-03", opponent: "9B4", result: "1-1", goals: "Azer Ben Ahmed" }
];

const table = document.getElementById("matches");

matches.forEach(match => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="date">${match.date}</td>
    <td class="opponent">${match.opponent}</td>
    <td class="result">${match.result}</td>
    <td class="goals">${match.goals}</td>
  `;
  table.appendChild(tr);
});


