import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MerryMixer from "./MerryMixer.tsx"; // Adjust the import to your file structure

describe('Activity Duration and Category Selection on MerryMixer', () => {
    test('Mary selects duration and category for her team\'s activity', () => {
        // Render the MerryMixer activity selection screen
        render(<MerryMixer />);

        // Given Mary is on the MerryMixer activity selection screen
        expect(screen.getByText('MerryMixer activity selection screen')).toBeInTheDocument();

        // And Mary sees "Games", "Relaxation", and "Chat" options
        expect(screen.getByLabelText('Games')).toBeInTheDocument();
        expect(screen.getByLabelText('Relaxation')).toBeInTheDocument();
        expect(screen.getByLabelText('Chat')).toBeInTheDocument();

        // When Mary selects the "Games" and "Relaxation" categories
        fireEvent.click(screen.getByLabelText('Games'));
        fireEvent.click(screen.getByLabelText('Relaxation'));

        // Then the "Games" and "Relaxation" categories should show as selected
        expect(screen.getByLabelText('Games')).toBeChecked();
        expect(screen.getByLabelText('Relaxation')).toBeChecked();

        // And the "RANDOMIZE!" button becomes clickable
        expect(screen.getByText('RANDOMIZE!')).toBeEnabled();
    });
});
