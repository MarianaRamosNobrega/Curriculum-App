import * as React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

const CardItem = ({title, children}) => (
  <Card style={styles.card}>
    <View>
        <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.content}>
        {children}
    </View>
  </Card>
);

export default CardItem;