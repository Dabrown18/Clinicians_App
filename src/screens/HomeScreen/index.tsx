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
import Geolocation from '@react-native-community/geolocation';
import { UserLocation } from '../../interfaces';

type NavigationProps = NavigationProp<StackParamList>;

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocation | undefined>(undefined);
  const dispatch: AppDispatch = useDispatch();
  const clinicians = useSelector<RootState, Clinician[]>(state => state.clinicians.data);
  const { navigate } = useNavigation<NavigationProps>();
  Geolocation.getCurrentPosition(info => setUserLocation(info));

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
    const longitude = userLocation?.coords.longitude;
    const latitude = userLocation?.coords.latitude;
    console.log('user location: ', userLocation);

    clinicians.filter(clinician => {
      clinician.location.search('', {
        aroundLatLng: `${latitude}, ${longitude}`,
        aroundRadius: 1000000 // 1000 km
      }).then(({ hits }) => {
        console.log(hits);
      });
    })

    setModalVisible(!modalVisible);
  };

  return (
    <HomeView
      userLocation={userLocation}
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
