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
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyDijmfrWT24xBXF56U5tK-ZtNu88yEIT3E');


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
    let userLocationByState = '';

    Geocoder.from(latitude, longitude)
      .then(json => {
        userLocationByState = json.results[0].address_components[5].long_name;
      })
      .catch(error => console.warn(error));

    data.map( async clinician => {
      let location = JSON.parse(clinician.location);
      let clinicianLocationByState = '';

      const pointIn = {
        latitude: parseFloat(location[0]),
        longitude: parseFloat(location[1]),
      };

      Geocoder.from(pointIn.latitude, pointIn.longitude)
        .then(json => {
          clinicianLocationByState = json.results[0].address_components[5].long_name;
        })
        .catch(error => console.warn(error));
      if (clinicianLocationByState === userLocationByState) {
        nearLocations.push(clinician);
      }
    });

    setClinicians(nearLocations);
    setModalVisible(!modalVisible);
  };

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
