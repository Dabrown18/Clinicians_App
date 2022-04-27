import React from 'react';
import { View, Text, Image } from 'react-native';
import { Clinician } from "../../interfaces";

interface Props {
  data: Clinician
}
const DetailView: React.FC<Props> = ({data}) => {
  return (
    <View>
      {/*<Image source={{ uri: data.imageUrl }} style={{width: 50, height: 50}} />*/}
      <Text>DetailsView</Text>
    </View>
  );
};

export default DetailView;
