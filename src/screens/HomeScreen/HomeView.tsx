import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { GetCliniciansResponse, Clinician } from '../../interfaces';
import Card from './Card';

interface HomeViewProps {
  onPressViewProfile: () => void
}

type Props = HomeViewProps & GetCliniciansResponse;

const HomeView: React.FC<Props> = ({data, onPressViewProfile}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        keyExtractor={(item: Clinician) => item.id}
        renderItem={({ item }: { item: Clinician }) => {
          return (
            <Card data={item} onPressViewProfile={onPressViewProfile} />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, backgroundColor: '#F2F2F7',
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
});

export default HomeView;
