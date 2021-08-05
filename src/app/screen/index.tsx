import React, {useEffect, useState, Fragment, FC} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
// import {Header} from '@Component';
import opencage from 'opencage-api-client';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import Style from './style';
// import List from './options/index';
// import FilteredList from './filtered_mappedFlights/index.js';

const Home: FC = () => {
  const [location, setLocation] = useState('Sydney Airport');
  const [showLocationDetails, setShowLocationDetails] = useState(false);
  const [search, setSearch] = useState('');
  let result;

  const getGeolocation = () => {
    // Get User's current position

    Geolocation.getCurrentPosition(
      position => {
        // alert(position.coords.latitude);
        if (position.coords.latitude) {
          const key = '6a494632f9714d37b3d6092f19b250f3';
          opencage.geocode({ key, q: `${6.515620}, ${3.344695}` }).then(response => {
            result = response.results[0];

          // Check if Device is an emulator. If it is use default location, else update "setLocation" to the User's location
          if(DeviceInfo.useIsEmulator().result === true){
            setLocation(result.formatted)
          }
          
          });
        }
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getGeolocation();
  }, []);

 

  return (
    <Fragment>
      <Header>
        <View style={Style.navChildren}>
          <View style={Style.navIcon}>
            <EvilIcon
              name="location"
              color="#fd5371"
              size={28}
              onPress={() => setShowLocationDetails(!showLocationDetails)}
            />

            {showLocationDetails ? (
              <Text style={Style.navChildrenModalText}>{location}</Text>
            ) : (
              <Text style={Style.navChildrenText} numberOfLines={1}>
                {location}
              </Text>
            )}
          </View>

          <View style={Style.navImageHolder}>
            <Image
              source={require('@Asset/images/profile.jpg')}
              style={Style.image}
            />
          </View>
        </View>
      </Header>

      <View style={Style.body}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <View style={Style.inputHolder}>
              <TextInput
                style={Style.input}
                placeholder="Search Flights...."
                onChangeText={text => setSearch(text)}
              />
              <Icon name="search" size={16} color="#a5a5a8" />
            </View>
            <List />
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* <Flight /> */}
      <FilteredList search={search} />
    </Fragment>
  );
};

export default Home;
