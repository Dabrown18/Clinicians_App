import React, { useEffect, useState } from 'react';
import DetailView from './DetailView';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Clinician } from '../../interfaces';
import { cliniciansActions } from '../../redux/slices/cliniciansSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type ParamList = {
  params: {
    clinician: Clinician
  }
}

const DetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { params: { clinician } } = useRoute<RouteProp<ParamList>>();

  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteClinician = useSelector<RootState, Clinician | undefined>(state => {
    return state.clinicians.favoriteClinician ? state.clinicians.favoriteClinician : undefined;
  });

  useEffect(() => {
    if (favoriteClinician?.id === clinician.id) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteClinician]);

  const onPressSelectFavoriteClinician = () => {
    if (favoriteClinician?.id === clinician.id) {
      dispatch(cliniciansActions.selectFavoriteClinician(undefined));
    } else {
      dispatch(cliniciansActions.selectFavoriteClinician(clinician));
    }
  };

  return (
    <DetailView
      isFavorite={isFavorite}
      onPressSelectFavoriteClinician={onPressSelectFavoriteClinician}
      data={clinician}
    />
  );
};

export default DetailsScreen;
