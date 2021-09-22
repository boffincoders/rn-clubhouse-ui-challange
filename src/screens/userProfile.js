import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const UserProFile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileText}>
        <Image
          source={{
            uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
          }}
          style={{height: 100, width: 100}}
        />
        <View>
          <Text style={{color: '#746E6E', fontSize: 24}}>Josh Hazelwood</Text>
          <Text style={{color: '#746E6E', fontSize: 20, marginLeft: 20}}>
            @joshHazelwood
          </Text>
          <View style={styles.line}></View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#746E6E', fontSize: 16}}>2.3k followers</Text>
            <Text style={{color: '#746E6E', fontSize: 16}}>56 following</Text>
          </View>
          <View style={styles.icons}>
            <Icon
              name="share"
              style={{fontSize: 25, color: '#395185', fontWeight: 'bold'}}
            />
            <Icon
              name="settings"
              style={{fontSize: 25, color: '#395185', fontWeight: 'bold'}}
            />
          </View>
        </View>
      </View>
      <Text style={styles.bioText}>
        A fellow javascript developer with a decent knowledge of designing and
        poetry.
      </Text>

      <Text
        style={{
          color: '#746E6E',
          fontSize: 18,
          paddingLeft: 26,
          marginTop: 25,
        }}>
        Interests
      </Text>
      <View style={styles.interets}>
        <View
          style={{
            backgroundColor: '#FF6060',
            borderRadius: 10,
            padding: 3,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Tech</Text>
        </View>
        <View
          style={{
            backgroundColor: '#ED43BD',
            borderRadius: 10,
            padding: 3,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Relationship
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#2717E8',
            borderRadius: 10,
            padding: 3,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Sports</Text>
        </View>
        <View
          style={{
            backgroundColor: '#D4951B',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Politics</Text>
        </View>
      </View>
      <View style={styles.interetsTwo}>
        <View
          style={{
            backgroundColor: '#7D2CAF',
            borderRadius: 10,
            padding: 3,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Poetry</Text>
        </View>
        <View
          style={{
            backgroundColor: '#43B0ED',
            borderRadius: 10,
            padding: 3,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Cooking</Text>
        </View>
      </View>
      <Text
        style={{
          color: '#746E6E',
          fontSize: 18,
          paddingLeft: 26,
          marginTop: 25,
        }}>
        Member of
      </Text>
      <View style={styles.images}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            }}
            style={styles.roundProfile}
          />
          <Text style={{textAlign: 'center'}}>Crptonic</Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            }}
            style={styles.roundProfile}
          />
          <Text style={{textAlign: 'center'}}>Foodie</Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            }}
            style={styles.roundProfile}
          />
          <Text style={{textAlign: 'center'}}>Techo</Text>
        </View>
        <View style={styles.roundIcon}>
          <Icon name="add" style={{fontSize: 40, color: '#666158'}} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF7E9',
  },
  profileText: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 50,
  },
  line: {
    width: 200,
    borderBottomColor: '#746E6E',
    borderBottomWidth: 1,
    marginTop: 10,
    marginRight: 10,
  },
  images: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 300,
    paddingLeft: 18,
    marginTop: 20,
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 70,
  },
  bioText: {
    marginTop: 30,
    fontSize: 16,
    color: '#746E6E',
    paddingLeft: 26,
    paddingRight: 20,
  },
  roundIcon: {
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
    borderRadius: 30,
  },
  interets: {
    display: 'flex',
    paddingLeft: 20,
    width: 300,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  roundProfile: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  interetsTwo: {
    display: 'flex',
    paddingLeft: 20,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
});
export default UserProFile;
