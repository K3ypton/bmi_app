import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Welcome to BMI Calculator</ThemedText>
      <ThemedText style={styles.subtitle}>Made by Peter Kottlik</ThemedText>
      
      <Link href="/(screens)/calculator" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Get Started</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: Colors.light.tabIconDefault,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});