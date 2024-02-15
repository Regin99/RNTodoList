import {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

type ScreenProps = {
  children: ReactNode;
};

export const Screen = ({children}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.screenContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
