async function isWinner(country) {
    try {
        const winner = await db.getWinner(country);
        if (winner === 'Country Not Found') {
            return `${country} never was a winner`;
        }
        if (winner.continent !== 'Europe') {
            return `${country} is not what we are looking for because of the continent`;
        }
        const results = await db.getResults(winner.id);
        if (results === 'Results Not Found') {
            return `${country} never was a winner`;
        }
        if (results.length < 3) {
            return `${country} is not what we are looking for because of the number of times it was champion`;
        }
        const years = results.map((result) => result.year).join(', ');
        const scores = results.map((result) => result.score).join(', ');
        return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
    } catch (e) {
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}