import React, {useState, useEffect, Fragment} from 'react';
import {TouchableOpacity, View, Text, FlatList, Image} from 'react-native';

import Style from '../style';
import Data from '../flightsData';
import Flight from "../flight/index"

const ListItem = ({item}) => (
  <View style={Style.resultInnerContainer}>
    <Text style={[Style.miniTitle]} numberOfLines={1}>{item.airport} Airport - {item.flight}</Text>
    <View style={Style.resultHolder}>
      <View>
        <Text style={Style.directionText}>{item.departure}</Text>
        <Text style={Style.directionText}>{item.departureTime}</Text>
        <View style={Style.cost}>
          <Text style={Style.costText}>{item.cost}</Text>
        </View>
      </View>
      <View>
        <View style={[Style.cost, Style.book]}>
          <View style={Style.circle} />
          <View style={Style.dash} />
          <View style={Style.dash} />
          <View style={Style.dash} />
          <View style={Style.dash} />
          <View style={Style.colouredCircle} />
        </View>
      </View>
      <View>
        <Text style={Style.directionText}>{item.arrival}</Text>
        <Text style={Style.directionText}>{item.arrivalTime}</Text>
        <View style={Style.cost}>
          <Text style={Style.class}>{item.noOfSeatsLeft} Remains</Text>
        </View>
      </View>
      <View style={Style.logoHolder}>
        <Image source={item.logo} style={Style.logo} />
      </View>
    </View>

    <View style={Style.book}>
      <View style={Style.classHolder}>
        <Text style={Style.class}>{item.class} Class</Text>
      </View>
      <Text style={Style.directionText}>{item.travelLength}</Text>
      <TouchableOpacity style={Style.bookBtn}>
        <Text style={Style.bookBtnText}>Book</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ListEmptyComponent = () => (
  <View>
    <Text style={[Style.miniTitle, {textAlign: 'center'}]}>
      No Data Available
    </Text>
  </View>
);

const FilteredList = props => {
  const [datas, setData] = useState([]);

 const searchFlight = (flightSearch) => {

     let flightSearchMapping = Data.filter(obj => {
       if(obj.arrival === flightSearch.to && obj.departure === flightSearch.from && obj.noOfSeatsLeft > flightSearch.passenger){
        return obj
       }
     });

     return setData(flightSearchMapping)
  }

  useEffect(() => {

    // Get Length of Search and Filter through the Data Array to display Airways based on the search value
    if (props.search.length) {
      let data = Data.filter(val => {
        if (val.flight.toLowerCase().includes(props.search.toLowerCase()))
          return val;

        return null;

      });
      return setData(data);
    } 
      return setData(Data);
    
  }, [props.search]);
  return (
    <Fragment>
     <Flight search={searchFlight}/>
    <FlatList
      data={datas}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={ListItem}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={<View style={{height: 50}} />}
    />
    </Fragment>
  );
};

export default FilteredList;
