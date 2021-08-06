import React, {useState, useRef} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

import Style from '../style';

const Flight = (props) => {

  const [passenger, setPassenger] = useState(0);
  const [from, setFrom] = useState('LON');
  const [to, setTo] = useState('DXB');
  const [showPicker, setShowPicker] = useState(false)

  // Increase/Decrease number of Passengers
  const selectNoPassengers = (id) => {
    if(id === 1) return setPassenger(passenger + 1);
    if (passenger === 0) return null;
    if(id === 2)return setPassenger(passenger - 1);
   
  };

// Get Parameters to search flight by
  const useSearchParameters = () => {
    const param = {to, from, passenger};
    return param
   
  }

  return (
    <View>
      {!showPicker ?
      <View style={Style.flight}>
        <View style={Style.flightHolder}>
          <View>
            <Text style={Style.directionText}>From</Text>
            <Text style={Style.miniTitle}>{from}</Text>
            
            <Text style={Style.directionText}>London Airport</Text>
          </View>

          <View style={Style.fb}>
            <Text style={Style.directionText}>To</Text>
            <Text style={Style.miniTitle} onPress={() => setShowPicker(true)}>{to}</Text>
            <Text style={Style.directionText}>Dubai Airport</Text>
          </View>
        </View>

        <View style={Style.divider} />
        <Icon name="plane" color="#fd5371" size={30} style={Style.plane} />

        <View style={Style.flightHolder}>
          <View>
            <Text style={Style.directionText}>Date of departure</Text>
            <Text style={Style.miniTitle}>Thu, 18 Oct 2021</Text>
          </View>
          <View style={Style.fb}>
            <Text style={Style.directionText}>Passenger</Text>
            <View style={Style.passengerHolder}>
              <TouchableOpacity style={Style.passenger} onPress={() => selectNoPassengers(2)} activeOpacity={passenger === 0 ? 1: 0.2 }>
                <Icon name="minus" color={passenger === 0 ? "#ccc": "#313030"} size={16} />
              </TouchableOpacity>

              <Text style={[Style.passenger, Style.passengerTitle]} >{passenger}</Text>
              <TouchableOpacity onPress={() => selectNoPassengers(1)} >
              <Icon name="plus" color="#313030" size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Style.flightHolder}>
          <TouchableOpacity style={Style.submit} onPress={ () => passenger !== 0 ? props.search(useSearchParameters()): alert("Invalid Passenger Value")}>
            <Text style={Style.submitText}>Search Flight</Text>
          </TouchableOpacity>
        </View>
      </View>
    :

      <View style={Style.picker}>
            <Picker
  selectedValue={to}
  onValueChange={(itemValue, itemIndex) => {
    setTo(itemValue);
    setShowPicker(false)
     }}
    >
  <Picker.Item label="DXB" value="DXB" />
  <Picker.Item label="FRN" value="FRN" />
    <Picker.Item label="NGR" value="NGR" />
</Picker>
</View>
}
      </View>
  );
};

export default Flight;
