import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/globalColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
  formContainer: {
    padding: 20,
  },
  textError: {
    fontSize: 14,
    color: COLORS.ERROR,
  },
});
