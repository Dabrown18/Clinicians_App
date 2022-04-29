import React from 'react';
import DetailView from './DetailView';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Clinician } from '../../interfaces';

type ParamList = {
  params: {
    clinician: Clinician
  }
}

const DetailsScreen: React.FC = () => {
  const { params: { clinician } } = useRoute<RouteProp<ParamList>>();

  return (
    <DetailView data={clinician} />
  );
};

export default DetailsScreen;
