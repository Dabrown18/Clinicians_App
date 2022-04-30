import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { GetCliniciansResponse, Clinician, UserLocation } from '../../interfaces';
import Card from './Card';
import styles from './styles';
import FavoriteClinician from './FavoriteClinician';
import FilterModel from './FilterModel';

interface Props {
  data: Clinician[]
  onPressViewProfile: (clinician: Clinician) => void
  setModalVisible: (val: boolean) => void
  modalVisible: boolean
  onPressShowAll: () => void
  onPressFilterByLocation: () => void
  userLocation?: UserLocation
  favoriteClinician: Clinician | undefined
}

const HomeView: React.FC<Props> = ({
  data,
  onPressViewProfile,
  modalVisible,
  setModalVisible,
  onPressShowAll,
  onPressFilterByLocation,
  userLocation,
  favoriteClinician,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.filterButton}
        >
          <Text style={styles.filterText}>FILTER</Text>
        </TouchableOpacity>
        {favoriteClinician !== undefined && (
          <FavoriteClinician
            favoriteClinician={favoriteClinician}
            onPressViewProfile={() => onPressViewProfile(favoriteClinician)}
          />
        )}
        <FlatList
          testID={'clinicians'}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item: Clinician) => item.id}
          renderItem={({ item }: { item: Clinician }) => {
            return (
              <Card
                testID={`clinician-${item.id}`}
                data={item}
                onPressViewProfile={() => onPressViewProfile(item)}
              />
            );
          }}
        />
        <FilterModel
          userLocation={userLocation}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          onPressShowAll={onPressShowAll}
          onPressFilterByLocation={onPressFilterByLocation}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
