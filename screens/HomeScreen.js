import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Card, Text, FAB } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card mode="elevated" style={styles.card}>
        <Card.Cover source={{ uri: 'https://source.unsplash.com/random/400x200' }} />
        <Card.Content>
          <Text variant="headlineMedium" style={styles.text}>
            Welcome to Our App!
          </Text>
          <Text variant="bodyMedium">
            This is a demo app showcasing React Navigation and React Native Paper.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Detail')}
            style={styles.button}
            icon="arrow-right"
          >
            Explore
          </Button>
        </Card.Actions>
      </Card>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => alert('Add something cool!')}
        label="Action"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#03dac4',
  },
});
