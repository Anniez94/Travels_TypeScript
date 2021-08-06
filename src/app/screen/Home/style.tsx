import {StyleSheet, Dimensions, Platform} from 'react-native';

const style = StyleSheet.create({
  navChildren: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  navChildrenText: {
    color: '#313030',
    fontFamily: 'Montserrat-Bold',
    width: 100,
    fontSize: 14
  },
  navChildrenModalText: {
    color: '#313030',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  navIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    width: Dimensions.get('window').width,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: '#fffefe'
  },
  locationIconHolder: {
    backgroundColor: 'yellow',
  },

  //   Input
  input: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    width: '80%',
    color: '#313030'
  },
  inputHolder: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
  },

  //   Image
  navImageHolder: {
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 17,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 52,
    height: 52,
    shadowColor: '#eee',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
    alignSelf: 'center'
  },

  //   Mini Heading

  miniHeading: {
    marginRight: Dimensions.get('window').width / 17,
    marginVertical: 15,
  },
  miniTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#313030',
    marginBottom: 5,
  },

  // Flight
  flight: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#ffdbe1',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3,
    shadowRadius: 30,
    elevation: 10,
    marginHorizontal: 25,
    marginBottom: 20
  },
  flightHolder: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  fb: {
    alignItems: 'flex-end',
  },
  directionText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#696969',
    marginBottom: 5,
  },
  submit: {
    backgroundColor: '#fd5371',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
  },
  submitText: {
    color: '#eee',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  divider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 10,
    borderColor: '#eee',
  },
  plane: {
    textAlign: 'center',
    marginTop: -13,
    marginBottom: -15
  },
  passengerHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  passenger: {
    marginRight: 10,
  },
  passengerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#313030'

  },

  // Result
 
  resultInnerContainer: {
    padding: 10,
    borderRadius: 10,
    shadowColor: '#ffdbe1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginHorizontal: 25,
  },
  resultHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  logo: {
    width: '80%',
    height: '10%',
  },
  logoHolder: {
    width: 90,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#eee',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: -30,
    alignItems: 'center'
  },
  book:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bookBtn: {
    backgroundColor: '#fd5371',
    paddingVertical: 5,
    width: '27%',
    borderRadius: 10,
    alignItems: 'center'
  },
  bookBtnText: {
    color: '#eee',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  class: {
    color: '#fd5371',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  classHolder: {
    paddingHorizontal: 7,
    backgroundColor: '#ffdbe1',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center'
  },
  cost: {
    marginTop: 15
  },
  costText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: '#313030'

  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#eee'
  },
  colouredCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fd5371',
    borderColor: '#fd5371',
    marginLeft: 2,
  },
  dash:{
    borderWidth: 1,
    borderColor: '#eee',
    marginLeft: 2,
    marginRight: 2,
    width: 10
  },

  // Picker
  picker:{
    backgroundColor: 'white',
    height: '100%'
  }
});

export default style;
