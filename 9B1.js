const matches = [
  { date: "01/01/2023", opponent: "9B5", result: "1-5", goals: "Badr Barrage" },
  { date: "01/02/2023", opponent: "9B6", result: "3-0", goals: "Samer Ezzine , Samer Ezzine , Bayrem Mahjoub" }
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
