import {FlatList, StyleSheet} from 'react-native';

import {useCallback, useEffect, useMemo, useState} from 'react';
import Toast from 'react-native-toast-message';

import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../../../rtk/services/todos';
import {NewTodo, Todo, UpdatedTodo} from '../../../types/types';

import {Loader, Screen} from '../../../components/molecules';
import {
  FILTER_OPTIONS,
  Filters,
  TodoCard,
  TodoForm,
} from '../components/molecules';

export const TodoList = () => {
  const {data, isLoading, error} = useGetTodosQuery();
  const [addTodo, {isLoading: isAdding, error: addError}] =
    useAddTodoMutation();
  const [updateTodo, {isLoading: isUpdating, error: updateError}] =
    useUpdateTodoMutation();
  const [deleteMutate, {error: deleteError}] = useDeleteTodoMutation();

  const [selctedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [filter, setFilter] = useState(FILTER_OPTIONS[0]);
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  useEffect(() => {
    if (error || addError || updateError || deleteError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
      });
    }
  }, [error, addError, updateError, deleteError]);

  const deleteTodo = useCallback(
    async (id: string) =>
      await deleteMutate(id).then(() => {
        setTodos(todos?.filter(todo => todo._id !== id));
      }),
    [todos, deleteMutate],
  );

  const handleEditTodo = useCallback(
    async (editedTodo: UpdatedTodo) =>
      await updateTodo(editedTodo).then(() => {
        setTodos(
          todos?.map(todo =>
            todo._id === editedTodo._id ? {...todo, ...editedTodo} : todo,
          ),
        );
        setSelectedTodo(null);
      }),
    [todos, updateTodo],
  );

  const renderItem = useCallback(
    ({item}: {item: Todo}) => (
      <TodoCard
        _id={item._id}
        title={item.title}
        description={item.description}
        isCompleted={item.isCompleted}
        isImportant={item.isImportant}
        deleteTodo={deleteTodo}
        updateTodo={handleEditTodo}
        onEdit={() => setSelectedTodo(item)}
      />
    ),
    [deleteTodo, handleEditTodo],
  );

  const handleAddTodo = async (newTodo: NewTodo) =>
    await addTodo(newTodo).then(res => {
      if ('data' in res) {
        setTodos([...(todos || []), res.data]);
        setSelectedTodo(null);
      }
    });

  const filteredTodos = useMemo(
    () =>
      todos?.filter(todo => {
        if (filter === 'Important') {
          return todo.isImportant;
        }
        return true;
      }),
    [todos, filter],
  );

  return (
    <>
      <Screen>
        <Filters setFilter={setFilter} selectedFilter={filter} />
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={filteredTodos}
            style={styles.listStyle}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        )}

        <TodoForm
          selectedTodo={selctedTodo}
          addTodo={handleAddTodo}
          editTodo={handleEditTodo}
          isLoading={isAdding || isUpdating}
        />
      </Screen>
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
  contentContainerStyle: {
    gap: 15,
  },
});
