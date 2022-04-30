import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { UserLocation } from '../../interfaces';

interface Props {
  userLocation?: UserLocation
  setModalVisible: (val: boolean) => void
  modalVisible: boolean
  onPressShowAll: () => void
  onPressFilterByLocation: () => void
}

const FilterModel: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  onPressShowAll,
  onPressFilterByLocation,
  userLocation,
}) => {
  return (
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
  );
};

export default FilterModel;
