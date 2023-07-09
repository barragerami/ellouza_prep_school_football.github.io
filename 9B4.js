const teams = [
  {
    name: 'Team 1',
    matches: [
      {
        score: '2-1',
        scorer: 'John Doe',
        opponent: 'Team 2'
      },
      {
        score: '0-0',
        scorer: 'N/A',
        opponent: 'Team 3'
      }
    ]
  },
  {
    name: 'Team 2',
    matches: [
      {
        score: '1-2',
        scorer: 'Jane Doe',
        opponent: 'Team 1'
      },
      {
        score: '1-1',
        scorer: 'John Doe',
        opponent: 'Team 3'
      }
    ]
  },
  {
    name: 'Team 3',
    matches: [
      {
        score: '0-0',
        scorer: 'N/A',
        opponent: 'Team 1'
      },
      {
        score: '1-1',
        scorer: 'Jane Doe',
        opponent: 'Team 2'
      }
    ]
  }
];

const teamButtons = document.querySelectorAll('#teams button');
const matchDetails = document.querySelector('#match-details');
const score = document.querySelector('#score');
const scorer = document.querySelector('#scorer');
const opponent = document.querySelector('#opponent');

teamButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const team = teams[index];
    matchDetails.style.display = 'block';
    score.textContent = `Score: ${team.matches[0].score}`;
    scorer.textContent = `Scorer: ${team.matches[0].scorer}`;
    opponent.textContent = `Opponent: ${team.matches[0].opponent}
