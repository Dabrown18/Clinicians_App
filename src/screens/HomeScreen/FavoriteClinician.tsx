import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Card from './Card';
import { Clinician } from '../../interfaces';

interface Props {
  onPressViewProfile: (clinician: Clinician) => void
  favoriteClinician: Clinician
}

const FavoriteClinician: React.FC<Props> = ({onPressViewProfile, favoriteClinician}) => {
  return (
    <>
      <View>
        <Text style={styles.favoriteText}>Favorite Clinician</Text>
        <Card
          data={favoriteClinician}
          onPressViewProfile={() => onPressViewProfile(favoriteClinician)}
        />
      </View>
      <View style={styles.divider} />
    </>
  );
};

export default FavoriteClinician;
