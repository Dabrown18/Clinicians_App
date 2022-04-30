import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  View,
} from 'react-native';
import { GetCliniciansResponse, Clinician, UserLocation } from '../../interfaces';
import Card from './Card';
import styles from './styles';
import FavoriteClinician from './FavoriteClinician';

interface HomeViewProps {
  onPressViewProfile: (clinician: Clinician) => void
  setModalVisible: (val: boolean) => void
  modalVisible: boolean
  onPressShowAll: () => void
  onPressFilterByLocation: () => void
  userLocation?: UserLocation
  favoriteClinician: Clinician | undefined
}

type Props = HomeViewProps & GetCliniciansResponse;

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
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item: Clinician) => item.id}
          renderItem={({ item }: { item: Clinician }) => {
            return (
              <Card
                data={item}
                onPressViewProfile={() => onPressViewProfile(item)}
              />
            );
          }}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.button} onPress={onPressShowAll}>
              <Text style={styles.buttonText}>Show all</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!userLocation?.coords}
              style={styles.button}
              onPress={onPressFilterByLocation}
            >
              <Text style={styles.buttonText}>Filter by location</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
