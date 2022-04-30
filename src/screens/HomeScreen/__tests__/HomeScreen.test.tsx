import React from 'react';
import { render } from '@testing-library/react-native';
import HomeView from '../HomeView';
import { createClinician } from '../../../../testFixtures';
import { Clinician } from '../../../interfaces';

describe(HomeView, () => {
  const data = [
    createClinician({ id: 'foo' }),
    createClinician({ id: 'bar', fullName: 'Darron Brown' }),
  ];

  const defaultProps = {
    data,
    onPressViewProfile: (clinician: Clinician) => undefined,
    setModalVisible: (val: boolean) => undefined,
    modalVisible: false,
    onPressShowAll: () => undefined,
    onPressFilterByLocation: () => undefined,
    userLocation: {
      coords: {
        accuracy: 1,
        altitude: 2,
        altitudeAccuracy: 3,
        heading: 4,
        latitude: 5,
        longitude: 6,
        speed: 7,
      },
      timestamp: 8,
    },
    favoriteClinician: createClinician(),
  };

  it('should render the home screen', () => {
    const { getByText } = render(<HomeView {...defaultProps} />);

    const titleText = getByText('FILTER');
    expect(titleText).toBeTruthy();
  });

  it('renders the prep stations', () => {
    const { getByTestId } = render(<HomeView {...defaultProps} />);

    expect(getByTestId('clinicians')).toBeTruthy();
    expect(getByTestId('clinician-foo')).toBeTruthy();
  });

});
