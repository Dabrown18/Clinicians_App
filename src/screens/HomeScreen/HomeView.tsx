import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  View,
} from 'react-native';
import { GetCliniciansResponse, Clinician } from '../../interfaces';
import Card from './Card';
import styles from './styles';

interface HomeViewProps {
  onPressViewProfile: (clinician: Clinician) => void
  setModalVisible: (val: boolean) => void
  modalVisible: boolean
  onPressShowAll: () => void
  onPressFilterByLocation: () => void
}

type Props = HomeViewProps & GetCliniciansResponse;

const HomeView: React.FC<Props> = ({
  data,
  onPressViewProfile,
  modalVisible,
  setModalVisible,
  onPressShowAll,
  onPressFilterByLocation,
}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.filterButton}
      >
        <Text style={styles.filterText}>FILTER</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
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
          <TouchableOpacity style={styles.button} onPress={onPressFilterByLocation}>
            <Text style={styles.buttonText}>Filter by location</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeView;
