import {StyleSheet, Dimensions, Platform} from 'react-native';

const style = StyleSheet.create({

    header: {
        paddingHorizontal: 20,
        paddingBottom: Platform.OS === 'ios' ? Dimensions.get('window').height / 90 :  Dimensions.get('window').height / 120 ,
        backgroundColor: "#fffefe"
    },
});

export default style;