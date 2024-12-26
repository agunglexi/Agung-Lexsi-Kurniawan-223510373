import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Chip } from 'react-native-paper';

export default function DetailScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/400x800' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text variant="headlineLarge" style={styles.title}>
          Detail Screen
        </Text>
        <Chip icon="information" style={styles.chip}>
          Enhanced UI with React Native Paper
        </Chip>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={styles.button}
          icon="arrow-left"
        >
          Go Back
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  chip: {
    backgroundColor: '#03dac4',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
  },
});
