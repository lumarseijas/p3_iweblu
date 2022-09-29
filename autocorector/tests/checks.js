import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native';
import App from '../../App';


let testinfo = {
  name: "La aplicación tiene un texto de saludo",
  score: 1,
  msg_ok: "Encontrado y texto correcto",
  msg_error: "No encontrada o no es como se esperaba, revise el enunciado"
}
test(JSON.stringify(testinfo), async () => {

  render(<App />);

  //fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  
  // Using `findBy` query to wait for asynchronous operation to finish
  const turno = await screen.findByTestId('mainView');

  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  expect(turno).toHaveTextContent("Hola!");
})