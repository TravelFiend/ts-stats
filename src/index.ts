import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';


// create an object the satifies "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv')

// create instance of "MatchReader" and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++;
  };
}

console.log(`Manchester United won ${manUWins} games`);
