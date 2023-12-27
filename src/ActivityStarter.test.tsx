
import { render, fireEvent, screen } from '@testing-library/react';
import ActivityStarter from './ActivityStarter'; // Adjust the import to your file structure

describe('Viewing and Starting Selected Activity', () => {
    const activity = {
        name: 'Virtual Background Challenge',
        description: 'A fun challenge where participants change virtual backgrounds!',
    };

    test('Mary views and initiates the selected activity', () => {
        // Render the ActivityStarter with the virtual background challenge
        render(<ActivityStarter activity={activity} />);

        // Given Mary has been presented with a chosen activity
        expect(screen.getByText(activity.name)).toBeInTheDocument();
        expect(screen.getByText(activity.description)).toBeInTheDocument();

        // When she views the activity "Virtual Background Challenge" and its description
        // And she sees a "START" button
        const startButton = screen.getByRole('button', { name: 'START' });
        expect(startButton).toBeInTheDocument();

        // Then the "START" button should be enabled
        expect(startButton).toBeEnabled();

        // And Mary should be able to initiate the "Virtual Background Challenge" by clicking the "START" button
        fireEvent.click(startButton);
        // After clicking, the button might change state, disable or trigger a new view
        // Add assertions based on how your application should respond, e.g.,
        expect(startButton).toBeDisabled(); //if the button should disable after clicking
    });
});