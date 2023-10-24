import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#007BFF',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1, // HomeModal tendrá un tamaño 2 de 10
    marginLeft: 10,
  },
  searchInput: {
    flex: 8, // HomeSearch tendrá un tamaño 8 de 10
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
  },
  buttonContainer: {
    flex: 1, // HomeBottonNew tendrá un tamaño 1 de 10
    marginLeft: 10,
  },
});

export default styles;

