import React from 'react';
import DetailView from './DetailView';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Clinician } from '../../interfaces';

type ParamList = {
  params: {
    clinicianID: string
  }
}

const DetailsScreen: React.FC = () => {
  const { params: { clinicianID } } = useRoute<RouteProp<ParamList>>();
  const clinician = useSelector<RootState, Clinician | undefined>(state => state.clinicians.data.find(item => {
    return item.id === clinicianID || {};
  }));

  return (
    <DetailView data={clinician} />
  );
};

export default DetailsScreen;
