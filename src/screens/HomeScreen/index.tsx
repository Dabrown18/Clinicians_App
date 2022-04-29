import React, {useEffect} from 'react';
import HomeView from './HomeView';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClinicians } from '../../redux/slices/cliniciansSlice';
import { Clinician } from "../../interfaces";

type NavigationProps = NavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const clinicians = useSelector<Clinician[]>(state => state.clinicians.data);
  const { navigate } = useNavigation<NavigationProps>();
  const onPressViewProfile = (clinicianID: string) => {

    return navigate('Detail', clinicianID);
  };

  useEffect(() => {
    dispatch(fetchClinicians());
  }, [clinicians]);

  return (
    <HomeView data={clinicians} onPressViewProfile={onPressViewProfile} />
  );
};

export default HomeScreen;
