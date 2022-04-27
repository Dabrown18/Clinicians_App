import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Clinician } from '../../interfaces';
import styles from './styles';

interface Props {
  data: Clinician
  onPressViewProfile: () => void
}
const Card: React.FC<Props> = ({data, onPressViewProfile}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPressViewProfile}>
      <Image source={{ uri: data.imageUrl }} style={styles.avatar} />
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{data.firstName} {data.lastName}</Text>
        <Text style={styles.title}>Clinician</Text>
      </View>
      <Text style={styles.linkText}>View Profile</Text>
    </TouchableOpacity>
  );
};

export default Card;
