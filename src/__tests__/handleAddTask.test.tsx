import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Adding a new task", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a new task...");

  // o que acontece se eu tentar adicionar uma tarefa vazia?
  // e se eu adicionar uma task com uma string enorme? isso provavelmente vai quebrar o seu layout -- talvez valha a pena uma validaçao de tamanho
  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.submit(inputElement);

  const taskElement = screen.getByText("New Task");

  expect(taskElement).toBeInTheDocument();
});
