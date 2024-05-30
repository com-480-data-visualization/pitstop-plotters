import React from 'react';

const DriverProfile = ({ driver }) => {
    // Helper function to display data or a default message
    const displayOrFallback = (value, defaultValue = '') => {
        return value || defaultValue;
    };

    return (
        <div>
            <h1>{displayOrFallback(driver.name)}</h1>
            <p>Born: {displayOrFallback(driver.born)}</p>
            <p>Died: {displayOrFallback(driver.died)}</p>
            <p>Nation: {displayOrFallback(driver.nation)}</p>
            <p>Website: <a href={driver.website}>{displayOrFallback(driver.website, 'N/A')}</a></p>
            <p>First Grand Prix: {displayOrFallback(driver.firstGP)}</p>
            <p>Last Grand Prix: {displayOrFallback(driver.lastGP)}</p>
            <p>Best Result: {displayOrFallback(driver.bestResult)}</p>
            <p>Best Grid Position: {displayOrFallback(driver.bestGrid)}</p>
            <p>World Champion: {driver.championships ? driver.championships.join(', ') : 'N/A'}</p>
            <p>Total Points: {displayOrFallback(driver.totalPoints, '0')} points</p>
            <p>Points per GP: {displayOrFallback(driver.pointsPerGP, '0')}</p>
            <p>Total Seasons: {displayOrFallback(driver.totalSeasons, '0')}</p>
            <p>Total Laps Led: {displayOrFallback(driver.lapsLed, '0')}</p>
            <p>Total Kilometers Raced: {displayOrFallback(driver.kmRaced, '0')}</p>
            <p>Grand Prix Involvements: {displayOrFallback(driver.grandPrix, '0')}</p>
            <p>No Starts: {displayOrFallback(driver.noStarts, '0')}</p>
            <p>Wins: {displayOrFallback(driver.wins, '0')}</p>
            <p>Pole Positions: {displayOrFallback(driver.polePositions, '0')}</p>
            <p>Fastest Laps: {displayOrFallback(driver.fastestLaps, '0')}</p>
            <p>Podiums: {displayOrFallback(driver.podiums, '0')}</p>
            <p>Hat Tricks: {displayOrFallback(driver.hatTricks, '0')}</p>
            <p>Grand Slams: {displayOrFallback(driver.grandSlams, '0')}</p>
            <p>Retirements: {displayOrFallback(driver.retirements, '0')}</p>
            <p>Rank on Starting Grid Average: {displayOrFallback(driver.rankStartingGridAverage, 'N/A')}</p>
            <p>Rank on Finish Line Average: {displayOrFallback(driver.rankFinishLineAverage, 'N/A')}</p>
            <h3>Career Stats</h3>
            <ul>
                {driver.careerStats ? driver.careerStats.map((item, index) => (
                    <li key={index}>{item.year} - Rank: {displayOrFallback(item.rank, 'N/A')}, Wins: {displayOrFallback(item.wins, '0')}</li>
                )) : <li>No career stats available.</li>}
            </ul>
        </div>
    );
}

export default DriverProfile;
