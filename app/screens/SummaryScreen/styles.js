import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '$paddingHorizontal',
  },

  header: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: RFValue(22),
    color: '#fff',
  },

  itemContainer: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  itemImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },

  itemImageLeft: {
    marginRight: 15,
  },

  itemImageRight: {
    marginLeft: 15,
  },

  itemHeader: {
    marginBottom: 5,
    color: '$themeYellow',
    fontSize: RFValue(15),
  },
});
