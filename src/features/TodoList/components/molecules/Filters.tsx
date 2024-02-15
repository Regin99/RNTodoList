import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const FILTER_OPTIONS = ['All', 'Important'];

type FiltersProps = {
  setFilter: (filter: string) => void;
  selectedFilter: string;
};

export const Filters = ({setFilter, selectedFilter}: FiltersProps) => {
  return (
    <View style={styles.filtersContainer}>
      {FILTER_OPTIONS.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.filterButton,
            {
              backgroundColor: selectedFilter === filter ? '#0303fc' : 'white',
              borderWidth: selectedFilter === filter ? 0 : 1,
            },
          ]}
          onPress={() => setFilter(filter)}
          disabled={filter === selectedFilter}>
          <Text
            style={{
              color: selectedFilter === filter ? 'white' : 'black',
            }}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  filterButton: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
