import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../theme/globalColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
  listItemContainer: {
    flexDirection: 'row',
    padding: 10,
    width: Dimensions.get('window').width,
    marginTop: 5,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  priceStyle: {
    fontSize: 14,
    color: '#36994D',
  },
});
