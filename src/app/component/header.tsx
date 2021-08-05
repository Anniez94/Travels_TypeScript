import React, {FC} from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import Style from './style';

type Props = {
  children: string;
};

const Header: FC<Props> = ({children}) => {
  return (
    <View style={Style.header}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <SafeAreaView>
        <View>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
