import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Room = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Text style={{fontSize: 25, color: '#746E6E'}}>News 24 x 7</Text>

          <Text style={styles.menu}>...</Text>
        </View>
        <Text
          style={{
            borderBottomColor: '#746E6E',
            borderBottomWidth: 2,
            width: 300,
            marginLeft: 10,
            marginTop: -30,
          }}></Text>
        <Text style={{padding: 16, color: '#949494', fontSize: 18}}>
          News from around the world
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            padding: 20,
          }}>
          <Text style={{marginBottom: 10, color: '#6D6D6D'}}>Organisers</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.organisers}>
              <View>
                <Image
                  source={{
                    uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Chris</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Chris</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Becca</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Adam</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Clark</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Clark</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Text style={styles.orgName}>Clark</Text>
              </View>
            </View>
          </ScrollView>
          <Text style={{marginTop: 20, color: '#6D6D6D'}}>
            Followed by the Speakers
          </Text>
          <View style={styles.speakers}>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA3S7SNYcK_ocojtrn9HPyh88HOfXPjSVAIdosuofIlp-fuqa_P-yiwZH7hxCDeill78&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Chris</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Becca</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Adam</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Clark</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            padding: 20,
          }}>
          <Text style={{color: '#6D6D6D'}}>Others in the room</Text>
          <View style={styles.speakers}>
            <View>
              <Image
                source={{
                  uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Chris</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Becca</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Adam</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                }}
                style={styles.roundProfile}
              />
              <Text style={styles.orgName}>Clark</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <View
            style={{backgroundColor: 'white', width: 150, borderRadius: 20}}>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: 17,
                textAlign: 'center',
                padding: 10,
              }}>
              Leave the room
            </Text>
          </View>
        </TouchableOpacity>
        <Icon
          name="add"
          size={20}
          color="#FBA720"
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 22,
          }}
        />
        <Icon
          name="stop"
          size={20}
          color="#FBA720"
          style={{
            padding: 10,
            backgroundColor: 'white',
            width: 40,
            borderRadius: 18,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFF7E9',
  },
  input: {
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  menu: {
    fontWeight: '900',
    fontSize: 23,
  },
  roundProfile: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  organisers: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 50,
  },
  speakers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 100,
    marginTop: 20,
  },
  orgName: {
    color: '#746E6E',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'white',
    color: 'red',
  },
});
export default Room;
