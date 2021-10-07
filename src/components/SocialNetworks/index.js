import * as React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const SocialNetworks = () => {
  const handleSocialNetwork = network => {
    switch (network) {
      case 'linkedin':
         Alert.alert('Meu Linkedin', 'https://linkedin.com')
         break
      case 'github':
         Alert.alert('Meu Github', 'https://github.com')
         break
      case 'facebook':
         Alert.alert('Meu Facebook', 'https://facebook.com')
         break
          case 'twitter':
         Alert.alert('Meu Facebook', 'https://twitter.com/')
         break
    }
  }
  
  return (
    <View style={styles.networks}>
      <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
        <Icon name="github" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSocialNetwork('facebook')}>
        <Icon name="facebook" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
        <Icon name="linkedin" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default SocialNetworks;