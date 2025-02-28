// サーバーコンポーネントでの書き方
// fetch のみ
// import { cookies } from 'next/headers';

// import { createClient } from '@/app/_utils/supabase/server';

// const SampleSupabase = async () => {
//   const cookieStore = cookies();
//   const supabase = await createClient(cookieStore); // ここで 0 個の引数が必要ですが、1 個指定されました。 となるが問題なく動作する

//   const { data: todos, error } = await supabase.from('todos').select('*');
//   if (error) {
//     console.error(error);
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <ul>
//         {todos?.map((todo) => (
//           <li className="list-disc text-2xl" key={todo.id}>
//             {todo.content}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default SampleSupabase;

// クライアントコンポーネントの書き方
// CRUD 全て
'use client';
import { useEffect, useState } from 'react';

import { createClient } from '@/app/_utils/supabase/client';
import { Tables } from '@/types/database.types';

const SampleSupabase = () => {
  const supabase = createClient();
  const [todos, setTodos] = useState<Tables<'todos'>[]>([]);
  const [todoContent, setTodoContent] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const fetchTodos = async () => {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) console.error(error);
    else setTodos(data ?? []);
  };

  useEffect(() => {
    void fetchTodos();
  }, []);

  const handleTodoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodoId) {
      await updateTodo();
    } else {
      await addTodo();
    }
    setTodoContent('');
    setEditingTodoId(null);
  };

  const addTodo = async () => {
    const { error } = await supabase.from('todos').insert([{ content: todoContent }]);
    // if (error) {
    //   console.error('Insert Error:', {
    //     message: error.message,
    //     details: error.details,
    //     hint: error.hint,
    //     code: error.code,
    //   });
    // } else {
    //   console.log('Insert successful:', data);
    //   await fetchTodos();
    // }
    if (error) {
      console.error('Insert Error:', error.message);
    } else {
      await fetchTodos();
    }
  };

  const updateTodo = async () => {
    if (!editingTodoId) {
      console.error('Error: No todo selected for update');
      return;
    }
    if (!todoContent.trim()) {
      console.error('Error: Todo content cannot be empty');
      return;
    }

    const { error } = await supabase.from('todos').update({ content: todoContent }).eq('id', editingTodoId);
    if (error) {
      console.error('Update Error:', error.message);
    } else {
      await fetchTodos();
    }
  };

  const deleteTodo = async (todoId: number) => {
    const { error } = await supabase.from('todos').delete().eq('id', todoId);
    if (error) console.error(error);
    else setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const startEditing = (todoId: number, content: string) => {
    setEditingTodoId(todoId);
    setTodoContent(content);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      {/* ↓この書き方だとデータベースにinsertもupdateもできない */}
      {/* <form className="flex gap-4" onSubmit={void handleTodoSubmit}> */}
      {/* ↓この書き方だと正常に動作するがエラーは消えない */}
      {/* <form className="flex gap-4" onSubmit={handleTodoSubmit}> */}
      {/* ↓この書き方だと正常に動作しエラーも消える */}
      <form className="flex gap-4" onSubmit={(e) => void handleTodoSubmit(e)}>
        <input
          className="border p-2"
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder={editingTodoId ? 'Edit Todo' : 'New Todo'}
          type="text"
          value={todoContent}
        />
        <button className="rounded-lg bg-blue-400 px-4 py-2" type="submit">
          {editingTodoId ? 'Save' : 'Add Todo'}
        </button>
        {editingTodoId && (
          <button
            className="rounded-lg bg-gray-400 px-4 py-2"
            onClick={() => {
              setEditingTodoId(null);
              setTodoContent('');
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h1 className="text-4xl">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li className="list-disc" key={todo.id}>
            <div className="flex items-center gap-3">
              <span>{todo.content}</span>
              <button
                className="rounded-lg bg-blue-400 px-4 py-2"
                onClick={() => startEditing(todo.id, todo.content as string)}
              >
                Edit
              </button>
              <button className="rounded-lg bg-red-400 px-4 py-2" onClick={() => void deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SampleSupabase;
