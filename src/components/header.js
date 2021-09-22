import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

const HeaderComp = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('userProfile')}>
          <Image
            source={{
              uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
            }}
            style={styles.roundProfile}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 10,
            fontWeight: 'bold',
            fontFamily: 'Poppins',
          }}>
          hey Josh
        </Text>
      </View>
      <View style={styles.icons}>
        <Icon name="search" size={25} color="black" />
        <Icon name="message" size={25} color="black" />
        <Icon name="calendar-today" size={25} color="black" />
        <Icon name="notifications-none" size={25} color="black" />
      </View>
    </View>
  );
};

export default HeaderComp;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  roundProfile: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },

  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 170,
    flexDirection: 'row',
    padding: 10,
    marginTop: 7,
  },
});
