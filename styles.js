import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  input: {
    height: 50,
    borderColor: '#00796b',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    fontSize: 18,
    color: '#004d40',
  },
  buttonContainer: {
    marginTop: 15,
    width: '90%',
    backgroundColor: '#007BFF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
  },
  weatherText: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00695c',
    textAlign: 'center',
  },
});

export default styles;