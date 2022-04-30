import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Clinician } from '../../interfaces';
import styles from './styles';
import colors from '../../theme';

interface Props {
  data: Clinician,
  onPressSelectFavoriteClinician: () => void
  isFavorite: boolean
}
const DetailView: React.FC<Props> = ({data, onPressSelectFavoriteClinician, isFavorite}) => {
  const backgroundColor = isFavorite ? colors.BLUE : 'transparent';
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.favoriteContainer}>
          <TouchableOpacity
            style={[styles.favoriteButton, {backgroundColor}]}
            onPress={onPressSelectFavoriteClinician}
          />
          <Text style={styles.favoriteText}>Favorite Clinician</Text>
        </View>
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
