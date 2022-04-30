import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  contentContainerStyle: {
    padding: 15,
  },
  cardContainer: {
    padding: 15,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 16
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
  },
  linkText: {
    color: colors.LINK,
    fontWeight: '500',
  },
  filterButton: {
    backgroundColor: colors.BLUE,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    letterSpacing: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,225,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.DARK_BLUE,
    width: '50%',
    height: 40,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    shadowColor: colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.WHITE,
  },
});

export default styles;
