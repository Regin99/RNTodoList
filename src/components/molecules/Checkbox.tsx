import {StyleSheet, TouchableOpacity} from 'react-native';

import {CrossIcon} from '../../assets/icons';

type CheckboxProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export const Checkbox = ({value, onValueChange}: CheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={() => onValueChange(!value)}
      style={styles.checkbox}>
      {value && <CrossIcon width={20} height={20} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
