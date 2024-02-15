import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
