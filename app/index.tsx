import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import Navbar from './navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>alsalamou 3laykom</Text>
        <Text style={styles.subtitle}>
        start a dhikr from below
        </Text>
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#000',
    padding: 30,
    width: '100%',
    height : '91%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});