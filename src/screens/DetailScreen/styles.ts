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
  favoriteContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  favoriteButton: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderColor: colors.BLUE,
    borderWidth: 2,
    marginRight: 5,
  },
  favoriteText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
