import React from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

import Style from '../style';
import Data from '../data';


const List = () => {

  const ListItem = ({item}) => (
    <View style={Style.miniHeading}>
      <TouchableOpacity>
        <Text style={[Style.miniTitle, {color: item.color}]}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  
  return (
 
      <FlatList
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={ListItem}
      />
  
  );
};

export default List;
