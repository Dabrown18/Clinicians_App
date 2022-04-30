import React, {useEffect, useState} from 'react';
import HomeView from './HomeView';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../navigation';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClinicians } from '../../redux/slices/cliniciansSlice';
import { Clinician } from '../../interfaces';
import { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';

type NavigationProps = NavigationProp<StackParamList>;

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const clinicians = useSelector<RootState, Clinician[]>(state => state.clinicians.data);
  const { navigate } = useNavigation<NavigationProps>();

  const onPressViewProfile = (clinician: Clinician) => {
    return navigate('Detail', { clinician });
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchClinicians());
  }, [clinicians]);

  const onPressShowAll = () => {
    setModalVisible(!modalVisible);
  };

  const onPressFilterByLocation = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <HomeView
      data={clinicians}
      onPressViewProfile={onPressViewProfile}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onPressShowAll={onPressShowAll}
      onPressFilterByLocation={onPressFilterByLocation}
    />
  );
};

export default HomeScreen;
