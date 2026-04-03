import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Navbar from '../app/navbar';

interface DhikrScreenProps {
  label: string;
}

export function DhikrScreen({ label }: DhikrScreenProps) {
  const [i, setI] = useState(0);

  const handlePress = useCallback(() => {
    setI((prev) => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <Text style={styles.title}>{i}</Text>
        <Text style={styles.subtitle}>{label}</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#000',
    padding: 30,
    width: '100%',
    height: '91%',
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
