import React, {useEffect, useState} from 'react';

// This is a mock function to simulate initiating the activity
// In a real app, this would be more complex, possibly involving API calls, navigation, etc.
const initiateActivity = () => {
    console.log('Activity has started!');
    // Add logic to initiate the actual activity here
};

function selectRandomItem(itemList) {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    return itemList[randomIndex];
}

const themes  = [
    "Famous Landmarks",
    "Favorite Movie Scenes",
    "Space Odyssey",
    "Underwater World",
    "Fantasy Lands",
    "Time Travel",
    "Wildlife Safari",
    "Tropical Paradise",
    "Winter Wonderland",
    "Artistic Masterpieces",
]

const ActivityStarter = ({ activity }) => {
    const [hasStarted, setHasStarted] = useState(false);
    const [time, setTime] = useState(60 * 5);
    const [currentTheme, setCurrentTheme] = useState(null);



    const handleStartClick = () => {
        initiateActivity();
        setHasStarted(true); // Update the state to reflect that the activity has started
    };

    useEffect(() => {
        if (hasStarted) {
            setCurrentTheme(selectRandomItem(themes));
            const interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [hasStarted]);


    return (
        <div>
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
            <div className={"card"} >
            <button onClick={handleStartClick} disabled={hasStarted} className={"start-button"}>
                START
            </button>
            </div>

            <h1>{currentTheme}</h1>
            <h2>{formatSeconds(time )}</h2>
        </div>
    );
};

function formatSeconds(seconds) {
    // Calculate minutes and remaining seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Format numbers to add leading zero if needed and return as "mm:ss"
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}


export default ActivityStarter;
