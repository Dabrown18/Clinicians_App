import React from 'react';
import HomeView from './HomeView';
import mockData from '../../mockData';

const HomeScreen: React.FC = () => {

  const onPressViewProfile = () => {

  };

  return (
    <HomeView data={mockData} onPressViewProfile={onPressViewProfile} />
  );
};

export default HomeScreen;
