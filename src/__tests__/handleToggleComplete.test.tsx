import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Toggling completion on a task", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Enter a new task...");
  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.submit(inputElement);

  // const taskText = screen.getByText('New Task');
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  // o ideal seria ter alguma test case explicando o que vai acontecer na tela
  // exemplo: it('it shows the task completed with a CSS class that crosses the text', () => {})
  // aí vc adiciona o teste abaixo dentro desse contexto

  const completedTask = screen.getByText("New Task");
  expect(completedTask).toHaveClass("completed");
});
