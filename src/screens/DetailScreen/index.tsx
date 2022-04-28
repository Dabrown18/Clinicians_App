import React from 'react';
import DetailView from './DetailView';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DetailsScreen: React.FC = () => {
  const { params: clinicianID } = useRoute();
  const data = useSelector(state => state.clinicians.data.find(clinician => {
    return clinician.id === clinicianID;
  }));

  return (
    <DetailView data={data} />
  );
};

export default DetailsScreen;
