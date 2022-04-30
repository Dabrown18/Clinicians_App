import Geocoder from 'react-native-geocoding';

export const getLocationByState = async (latitude: number, longitude: number): Promise<string> => {
  await Geocoder.from(latitude, longitude)
    .then(json => {
      return json.results[0].address_components[5].long_name;
    })
    .catch(() => '');
};
