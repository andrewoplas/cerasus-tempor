import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  title: {
    marginVertical: 10,
  },

  description: {
    marginTop: 10,
    color: '$primaryDarkGray',
  },

  actionButton: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginRight: 20,
    marginTop: 30,
    borderRadius: 4,
  },

  'actionButton:last-child': {
    marginRight: 0,
  },

  loadingContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },

  spinner: {
    marginRight: 5,
  },
});

export const LoadingModalStyles = EStyleSheet.create({
  loadingContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  spinner: {
    marginRight: 10,
  },
});

export const SelectModal = EStyleSheet.create({
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

  scrollViewContainer: {
    maxHeight: 300,
  },

  scrollViewContent: {
    paddingBottom: 0,
  },

  textContainer: {
    paddingVertical: 15,
  },

  textContainerBorder: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },

  'textContainerBorder:last-child': {
    borderBottomWidth: 0,
  },
});
