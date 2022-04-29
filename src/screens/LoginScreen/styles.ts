import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  input: {
    backgroundColor: colors.WHITE,
    width: '50%',
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
