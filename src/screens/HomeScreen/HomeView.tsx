import React from 'react';
import { FlatList, SafeAreaView} from 'react-native';
import { GetCliniciansResponse, Clinician } from '../../interfaces';
import Card from './Card';
import styles from './styles';

interface HomeViewProps {
  onPressViewProfile: (clinician: Clinician) => void
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
            <Card
              data={item}
              onPressViewProfile={() => onPressViewProfile(item)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeView;
