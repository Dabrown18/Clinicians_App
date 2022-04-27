import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Clinician } from '../../interfaces';

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

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 16
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
  },
  linkText: {
    color: '#005EB8',
    fontWeight: '500',
  },
});

export default Card;
