import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles';
import photo from './assets/icon.png';
import Avatar from './components/Avatar';
import SocialNetworks from './components/SocialNetworks'
import CardItem from './components/CardItem/index'

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Avatar photo={photo} name="JOÃOZINHO DOS SANTOS" role="Mobile Developer"/>
      <SocialNetworks />
      <CardItem title="Objetivo">
        <Text style={styles.content}>Experiência Profissional</Text>
      </CardItem>
    </SafeAreaView>
  );
}

export default App;