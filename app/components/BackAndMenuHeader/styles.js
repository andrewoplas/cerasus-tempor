import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const BackAndMenuHeaderStyles = EStyleSheet.create({
  icon: {
    fontSize: RFValue(28),
  },

  backButtonIcon: {
    marginRight: 20,
  },

  button: {
    paddingVertical: 10,
  },
});

export const MenuModalStyles = EStyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: '$paddingHorizontal',
    paddingVertical: 35,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  header: {
    marginBottom: 25,
  },

  buttonSpacing: {
    marginBottom: 20,
  },

  buttonText: {
    fontSize: RFValue(15),
    color: '#fff',
    fontFamily: '$fontBold',
  },

  divider: {
    marginBottom: 20,
  },
});
