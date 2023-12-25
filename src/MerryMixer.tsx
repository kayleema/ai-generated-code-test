import React, { useState } from 'react';
import ActivityStarter from "./ActivityStarter.tsx";

const MerryMixer = () => {
  // State to manage selected categories
  const [selectedCategories, setSelectedCategories] = useState({
    Games: false,
    Relaxation: false,
    Chat: false,
  });

  // Function to handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Check if any categories are selected to enable the RANDOMIZE! button
  const isAnyCategorySelected = Object.values(selectedCategories).some(status => status);

    const [selectedActivity, setSelectedActivity] = useState(null);

    // Mock function to simulate getting a random activity
    const getRandomActivity = () => {
        return {
            name: 'Virtual Background Challenge',
            description: 'A fun challenge where participants change virtual backgrounds!'
        };
    };

    const handleRandomizeClick = () => {
        const activity = getRandomActivity();
        setSelectedActivity(activity);
    };

  return (
      <div>
        <h1>MerryMixer activity selection screen</h1>
        <label>
          Games
          <input
              type="checkbox"
              checked={selectedCategories.Games}
              onChange={() => handleSelectCategory('Games')}
          />
        </label>
        <label>
          Relaxation
          <input
              type="checkbox"
              checked={selectedCategories.Relaxation}
              onChange={() => handleSelectCategory('Relaxation')}
          />
        </label>
        <label>
          Chat
          <input
              type="checkbox"
              checked={selectedCategories.Chat}
              onChange={() => handleSelectCategory('Chat')}
          />
        </label>
          {selectedActivity ? (
              <ActivityStarter activity={selectedActivity} />
          ) : (
              <button
                  disabled={!isAnyCategorySelected}
                  onClick={handleRandomizeClick}
              >
                  RANDOMIZE!
              </button>
          )}
      </div>
  );
};

export default MerryMixer;
