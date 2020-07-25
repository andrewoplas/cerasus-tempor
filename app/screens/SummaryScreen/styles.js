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
    paddingRight: 20,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  itemImage: {
    height: 120,
    width: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
