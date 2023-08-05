import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

/**
 *
 * Sugestões:
 *
 * - Usar alguma visual library com componentes visuais (form, botao, etc) já bonitos e out of the box
 *   -> caso vc tenha optado por nao usar pra fazer bastante CSS, é uma opção também, mas vale ressaltar no README essa escolha
 *
 * - Aqui no App.tsx, idealmente você nao deveria colocar muita lógica de negócio do seu app, ele a princípio seria mais clean
 *   - Basicamente o que vc tem implementado aqui é a camada de estado global do seu app, vc pode encapsular isso em um componente (Container) que renderiza dentro dele o <TodoForm /> e o <TodoList />
 *     Com isso, tudo que tem a ver com o Tasks aqui iria pra dentro do "container" e seu App.tsx ficaria mais clean
 *
 *   - BONUS: caso queira ir além nessa ideia, pesquise React Context API (useContext) que seria uma bela soluçao pra esse caso
 *
 * - Como comentamos posteriormente, em vez de criar um test file pra cada "açao" do teu form, eu faria um test file pra cada component
 *   - Quais açoes o <TodoForm /> é responsável? Cria um TodoForm.test.tsx e teste
 *   - Quais acoes o <TodoList /> faz ou qual estado visual ele se apresenta? Cria o file e testa
 *   - assim por diante...
 *
 * - Fazer arquivos com css puro é interessante pra demonstrar que domina os fundamentos de web, porém aplicacoes profissionais vao usar algum tipo de CSS-in-JS technology (exemplo: Styled Components)
 *   - Vou deixar um App.tsx de exemplo usando Styled Components pra você ter uma ideia
 *
 * - Se não der tempo de fazer uma camada de servidor básica (e acho que nao vai dar!) tente setar uma infra básica com o Firebase pra salvar os todos lá com a seguinte estrutura:
 *   - Ao iniciar a adicao de tarefas, vc criando um ID aleatório para o usuário e salva isso em localStorage
 *   - Usa esse ID que está no localStorage como chave única lá no Firebase pra salvar as TODOs dos usuários
 *   - Vai salvando as tarefas lá e, se der tempo, vc pode implementar um botao do tipo (Salvar alteraçoes, e/ou Reverter alteraçoes)
 *     - no case de um delete, vc pode recuperar a acao se nao for salva
 *     - vc pode mostrar que se o usuário der um refresh no meio da criacao, ele nao perde as informaçoes
 *
 * - TIRE UM TEMPO PRA FAZER UM README decente, com screenshots do seu app, instrucoes de instalacao, listando os packages que voce usou.
 *
 * - Use um .nvmrc com a versao do node local que voce está usando para que todos que façam um `npm install` usem a mesma versao Node que vc tem na sua maquina
 *   - isso faz com que os examinadores vejam que vc está preocupado com isso e vai ser mais certeiro que seu app rodaria na maquina deles se eles quisessem (nao acho que eles baixem os repos e rodem nao)
 *
 */
const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; task: string; completed: boolean }[]
  >([]);

  const handleAddTask = (task: string) => {
    console.log("Adding task:", task);
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), task, completed: false },
    ]);
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
