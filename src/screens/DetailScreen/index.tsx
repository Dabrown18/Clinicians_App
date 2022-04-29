import React from 'react';
import DetailView from './DetailView';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DetailsScreen: React.FC = () => {
  const { params: clinicianID } = useRoute();
  const clinician = useSelector(state => state.clinicians.data.find(item => {
    return item.id === clinicianID;
  }));

  return (
    <DetailView data={clinician} />
  );
};

export default DetailsScreen;
