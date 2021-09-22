import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComp from '../components/header';
const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation}/>
      <StatusBar backgroundColor="#0000FF" />
      <ScrollView>
        <View style={styles.newsFeed}>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('room')}>
              <View style={styles.content}>
                <View style={{width: 200}}>
                  <Text style={{fontSize: 20, color: 'gray'}}>News 24 x 7</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#FF6060',
                    padding: 3,
                    borderRadius: 6,
                  }}>
                  <Text style={{color: 'white'}}>Tech</Text>
                </View>
              </View>

              <View style={styles.content}>
                <View style={{width: 140}}>
                  <Text style={{fontSize: 15, color: 'gray'}}>
                    News from around the world
                  </Text>
                </View>
                <View style={styles.iconList}>
                  <Icon name="person" color="#C4C4C4"></Icon>
                  <Text style={{color: '#C4C4C4'}}>84</Text>
                  <Icon name="comment" color="#C4C4C4"></Icon>
                  <Text style={{color: '#C4C4C4'}}>4</Text>
                </View>
              </View>

              <View style={styles.content}>
                <View style={{width: 150}}>
                  <Image
                    source={{
                      uri: 'https://library.kissclipart.com/20180918/jee/kissclipart-business-person-icon-clipart-businessperson-comput-1e6e33a370493970.png',
                    }}
                    style={styles.roundProfile}
                  />
                  <View style={styles.roundIcon}>
                    <Text style={{color: '#6D6D6D'}}>+2</Text>
                  </View>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    }}
                    style={styles.leftImage}
                  />
                </View>
                <View style={{width: 100}}>
                  <Text style={{color: 'gray', fontSize: 14, marginBottom: 10}}>
                    Becca James Chris Jr Adam Levis Clark Kent
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={{width: 200}}>
                <Text style={{fontSize: 20, color: 'gray'}}>
                  Dress Accordingly
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#747AFF',
                  padding: 3,
                  borderRadius: 6,
                }}>
                <Text style={{color: 'white'}}>Fashion</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={{width: 140}}>
                <Text style={{fontSize: 15, color: 'gray'}}>
                  Let's get you suit up
                </Text>
              </View>
              <View style={styles.iconList}>
                <Icon name="person" color="#C4C4C4"></Icon>
                <Text style={{color: '#C4C4C4'}}>51</Text>
                <Icon name="comment" color="#C4C4C4"></Icon>
                <Text style={{color: '#C4C4C4'}}>2</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={{width: 150}}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6YHGA6tBRj9V3QVlPINawaS4OCMDs3KHAiA1v6YgfD4ySTQwA2pNRv8Q1j5fVTH4m4&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                  }}
                  style={styles.leftImage}
                />
              </View>
              <View style={{width: 100}}>
                <Text style={{color: 'gray', fontSize: 14, marginBottom: 10}}>
                  Becca James Chris Jr Adam Levis Clark Kent
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={{width: 200}}>
                <Text style={{fontSize: 20, color: 'gray'}}> Mix it Up</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ED43BD',
                  padding: 3,
                  borderRadius: 6,
                }}>
                <Text style={{color: 'white'}}>Relationship</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={{width: 140}}>
                <Text style={{fontSize: 15, color: 'gray'}}>
                  Bring the spark back
                </Text>
              </View>
              <View style={styles.iconList}>
                <Icon name="person" color="#C4C4C4"></Icon>
                <Text style={{color: '#C4C4C4'}}>100</Text>
                <Icon name="comment" color="#C4C4C4"></Icon>
                <Text style={{color: '#C4C4C4'}}>4</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={{width: 150}}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzKb-UhMwd-QzCArYlh6_RmdGTN4s72ZNcA&usqp=CAU',
                  }}
                  style={styles.roundProfile}
                />
              </View>
              <View style={{width: 100}}>
                <Text style={{color: 'gray', fontSize: 14, marginBottom: 10}}>
                  Sahil Khan
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.roomChat}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              + Start a room
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  roundIcon: {
    height: 50,
    marginTop: -20,
    zIndex: 2,
    width: 50,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E5E5',
    borderRadius: 30,
  },
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
  roomChat: {
    height: 48,
    width: 200,
    backgroundColor: '#FFBF59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: -20,
    marginLeft: 150,
    borderRadius: 20,
  },
  leftImage: {
    height: 50,
    marginTop: -70,
    marginLeft: 30,
    borderRadius: 30,
    zIndex: 1,
    width: 50,
  },

  newsFeed: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 100,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: '#FFF2DD',
    width: '100%',
  },
  card: {
    width: 350,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  iconList: {
    backgroundColor: '#E8E5E5',
    borderRadius: 6,
    display: 'flex',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    width: 100,
    flexDirection: 'row',
  },
});
