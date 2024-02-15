import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UpdatedTodo} from '../../../../types/types';
import {AlertIcon, EditIcon, TrashIcon} from '../../../../assets/icons';
import {Checkbox} from '../../../../components/molecules';

type TodoCardProps = {
  title: string;
  description: string;
  isImportant: boolean;
  isCompleted: boolean;
  _id: string;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: UpdatedTodo) => void;
  onEdit: () => void;
};

export const TodoCard = ({
  title,
  description,
  isImportant,
  isCompleted,
  _id,
  deleteTodo,
  updateTodo,
  onEdit,
}: TodoCardProps) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          borderColor: isImportant ? 'red' : 'grey',
        },
      ]}>
      <View style={{flexDirection: 'row', gap: 10, flex: 1}}>
        <View style={{justifyContent: 'center', gap: 10}}>
          {isImportant && <AlertIcon />}
          <Checkbox
            value={isCompleted}
            onValueChange={() => {
              updateTodo({_id, isCompleted: !isCompleted});
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={{gap: 10}}>
        <TouchableOpacity onPress={onEdit}>
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteTodo(_id);
          }}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
});
