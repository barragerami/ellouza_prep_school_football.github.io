const scoresTable = document.getElementById("scores-table");

// Example data
const scoresData = [
  {date: "2023-01-20", homeTeam: "9B7", homeScore: 2, awayScore: 1, awayTeam: "9B6"},
  {date: "2023-01-27", homeTeam: "9B5", homeScore: 5, awayScore: 1, awayTeam: "9B1"},
  {date: "2023-02-03", homeTeam: "9B1", homeScore: 3, awayScore: 0, awayTeam: "9B6"},
  {date: "2023-02-03", homeTeam: "9B4", homeScore: 1, awayScore: 1, awayTeam: "9B7"},
  {date: "2023-02-24", homeTeam: "9B4", homeScore: 1, awayScore: 2, awayTeam: "9B5"},
  // Add more data here
];

// Create rows and cells for the scores table
scoresData.forEach(score => {
  const row = scoresTable.insertRow(-1);
  const dateCell = row.insertCell(0);
  const homeTeamCell = row.insertCell(1);
  const scoreCell = row.insertCell(2);
  const awayTeamCell = row.insertCell(3);
  
  // Set cell values
  dateCell.innerHTML = score.date;
  homeTeamCell.innerHTML = score.homeTeam;
  scoreCell.innerHTML = `${score.homeScore} - ${score.awayScore}`;
  scoreCell.classList.add("score");
  awayTeamCell.innerHTML = score.awayTeam;
});

