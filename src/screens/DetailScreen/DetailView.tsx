import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Clinician } from '../../interfaces';
import styles from './styles';

interface Props {
  data: Clinician
}
const DetailView: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <Image source={{ uri: data.imageUrl }} style={styles.avatar} />
        <Text style={styles.name}>{data.fullName}</Text>
        <Text style={styles.contactInformation}>{data.phone}</Text>
        <Text style={styles.contactInformation}>{data.email}</Text>
        <Text>{`\n ${data.bio}`}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailView;
