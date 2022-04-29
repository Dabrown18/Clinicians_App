import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
    paddingHorizontal: 15,
  },
  scrollView: {
    backgroundColor: colors.WHITE,
    marginVertical: 15,
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginBottom: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactInformation: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default styles;
