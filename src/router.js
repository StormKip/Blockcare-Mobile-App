import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignIn from './components/AppComponents/SignIn';
import SignUp from './components/AppComponents/SignUp';
import CreateMedicalRecord from './components/AppComponents/CreateMedicalRecord';
import HomeScreen from './components/Scenes/HomeScreen';
import MedicalRecordEdit from './components/Scenes/MedicalRecordEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={SignIn}
            hideNavBar
            initial
          />
          <Scene
            key="register"
            component={SignUp} 
            hideNavBar
          /> 
        </Scene>
        <Scene key="main">
          <Scene
            key="homeScreen"
            component={HomeScreen}
            hideNavBar
            initial
          />
          <Scene
            key="createMedicalRecord"
            component={CreateMedicalRecord}
            hideNavBars
          />
            <Scene
            key="updateMedicalRecord"
            component={MedicalRecordEdit}
            hideNavBars
            />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

