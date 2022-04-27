import React from 'react';
import HomeView from './HomeView';
import mockData from '../../mockData';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { NavigationProp } from '@react-navigation/native';

type NavigationProps = NavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>();

  const onPressViewProfile = (clinicianID: string) => {
    return navigate('Detail', {clinicianID});
  };

  return (
    <HomeView data={mockData} onPressViewProfile={onPressViewProfile} />
  );
};

export default HomeScreen;
