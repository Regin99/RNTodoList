import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Checkbox, Loader} from '../../../../components/molecules';
import {NewTodo, Todo, UpdatedTodo} from '../../../../types/types';

type TodoFormProps = {
  selectedTodo: Todo | null;
  addTodo: (todo: NewTodo) => void;
  editTodo: (todo: UpdatedTodo) => void;
  isLoading: boolean;
};

export const TodoForm = ({
  selectedTodo,
  addTodo,
  editTodo,
  isLoading,
}: TodoFormProps) => {
  const [title, setTitle] = useState(selectedTodo?.title || '');
  const [description, setDescription] = useState(
    selectedTodo?.description || '',
  );
  const [isImportant, setIsImportant] = useState(
    selectedTodo?.isImportant || false,
  );

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
      setIsImportant(selectedTodo.isImportant);
    }
  }, [selectedTodo]);

  return (
    <View>
      <Text style={styles.labelText}>
        {selectedTodo ? 'Edit Todo' : 'Add Todo'}
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          defaultValue={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
        <TextInput
          style={styles.textInput}
          defaultValue={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <View style={styles.checkboxContainer}>
          <Checkbox value={isImportant} onValueChange={setIsImportant} />
          <Text>Important</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, !title && styles.buttonDisabled]}
        disabled={!title}
        onPress={() => {
          selectedTodo
            ? editTodo({...selectedTodo, title, description, isImportant})
            : addTodo({title, description, isImportant});
          setTitle('');
          setDescription('');
          setIsImportant(false);
        }}>
        {isLoading ? <Loader /> : <Text style={{color: 'white'}}>Confirm</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontWeight: 'bold',
  },
  formContainer: {
    gap: 10,
    marginVertical: 10,
  },
  textInput: {borderWidth: 1, padding: 5, borderRadius: 5},
  checkboxContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  button: {
    backgroundColor: '#0303fc',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
