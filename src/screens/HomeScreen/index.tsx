import React, {useEffect, useState} from 'react';
import HomeView from './HomeView';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../navigation';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Clinician, UserLocation } from '../../interfaces';
import { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import Geolocation from '@react-native-community/geolocation';
import { cliniciansActions } from '../../redux/slices/cliniciansSlice';
import mockData from '../../mockData';

type NavigationProps = NavigationProp<StackParamList>;

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector<RootState, Clinician[]>(state => state.clinicians.data);
  const favoriteClinician = useSelector<RootState, Clinician | undefined>(state => {
    return state.clinicians.favoriteClinician ? state.clinicians.favoriteClinician : undefined;
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setUserLocation(info));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocation>(undefined);
  const [clinicians, setClinicians] = useState<Clinician[]>(data);

  const onPressViewProfile = (clinician: Clinician) => {
    return navigate('Detail', { clinician });
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(cliniciansActions.getClinicians(mockData));
  }, []);

  const onPressShowAll = () => {
    setClinicians(data);
    setModalVisible(!modalVisible);
  };

  const onPressFilterByLocation = () => {
    const longitude: number = userLocation?.coords.longitude;
    const latitude: number = userLocation?.coords.latitude;
    const nearLocations: Clinician[] = [];

    data.map( async clinician => {
      let location = JSON.parse(clinician.location);

      const pointIn = {
        latitude: parseFloat(location[0]),
        longitude: parseFloat(location[1]),
      };

      const distance = calculateDistance(
        latitude,
        longitude,
        pointIn.latitude,
        pointIn.longitude,
        'K'
      );

      if (distance < 3000) {
        nearLocations.push(clinician);
      }
    });

    setClinicians(nearLocations);
    setModalVisible(!modalVisible);
  };

  function calculateDistance(lat1, lon1, lat2, lon2, unit) {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') {
      dist = dist * 1.609344;
    }
    if (unit === 'N') {
      dist = dist * 0.8684;
    }
    return parseInt(dist + unit);
  }

  return (
    <HomeView
      favoriteClinician={favoriteClinician}
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
