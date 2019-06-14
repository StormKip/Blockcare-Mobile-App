import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header, Footer, CardSection } from '../common';
import HomeButton from './HomeButton';

class HomeScreen extends Component {
state = {
  drawerOpen: false,
}

toggleDrawer = () => {
  (this.setState({ drawerOpen: !this.state.drawerOpen }));
}
  render() {
    return (
     <View style={{ flex: 1, backgroundColor: '#ECEAEA' }}>
      <Header />
      <CardSection 
      style={{ 
        marginLeft: '5%', 
        marginRight: '5%', 
        paddingTop: 10, 
        justifyContent: 'center' 
        }}
      >
        <Text style={styles.textStyle}>Your current Health Status</Text>
        <FontAwesome5
        name={'smile'}
        size={200}
        style={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%', textAlign: 'center' }}
        />
        <Text 
        style={{ 
          fontFamily: 'TimesNewRomanPS', 
          color: '#0CA25C', 
          fontSize: 30, 
          textAlign: 'center' 
          }}
        >
        HEALTHY
        </Text>
      </CardSection>
      <HomeButton onPress={() => {}}>
        View Your Records
      </HomeButton>

      <HomeButton>
        Share And Earn
      </HomeButton>

      <Footer />
     </View>
    );
  }
}

const styles = {
  
  textStyle: {
    fontSize: 25,
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    textAlign: 'center',
    justifyContent: 'center'
  }
};

export default HomeScreen;
