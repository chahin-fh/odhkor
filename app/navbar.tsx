import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';

function Navbar() {
  return (
    <View style={styles.navbar}>
      <Link href="/adhkar/sobhanlah" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobhanlah</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/adhkar/hmdlh" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hmdlah</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/adhkar/leilahilalah" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Leilahilalah</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/adhkar/alhouakbar" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alhouakbar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default React.memo(Navbar);
