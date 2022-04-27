import React from 'react';
import DetailView from './DetailView';
import { useRoute } from '@react-navigation/native';

const DetailsScreen: React.FC = () => {
  const { params: clinicianID } = useRoute();

  return (
    <DetailView />
  );
};

export default DetailsScreen;
