import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);

  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);

  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("size select element initially displays 'Small'", () => {
  render(<App />);

  const selectSize = screen.getByLabelText(/select size/i);

  expect(selectSize).toHaveDisplayValue("Small");
});

test("select size dropdown displays the user's selected value", () => {
  render(<App />);
  const selectSize = screen.getByLabelText(/select size/i);

  userEvent.selectOptions(selectSize, "medium");

  expect(selectSize).toHaveDisplayValue("Medium");

  userEvent.selectOptions(selectSize, "large");

  expect(selectSize).toHaveDisplayValue("Large");
});

// "Your Selection" text
test("Your Selection message initially displays 'small cheese'", () => {
  render(<App />);

  expect(screen.getByText(/small cheese/i)).toBeInTheDocument();
});

test("selecting options updates the 'Your Selection' message", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  const selectSize = screen.getByLabelText(/select size/i);

  userEvent.click(addPepperoni);

  expect(screen.getByText(/small pepperoni/i)).toBeInTheDocument();

  userEvent.selectOptions(selectSize, "large");

  expect(screen.getByText(/large pepperoni/i)).toBeInTheDocument();
});

// "Contact Info" text box
test("'Contact Info' text box initially displays a placeholder value of 'email address'", () => {
  render(<App />);

  const contact = screen.getByLabelText(/enter your email address/i);

  expect(contact).toHaveAttribute("placeholder", "email address");
});

test("the page shows information the user types into the contact form field", () => {
  render(<App />);

  const contact = screen.getByLabelText(/enter your email address/i);

  userEvent.type(contact, "test@example.com");

  expect(contact).toHaveValue("test@example.com");
});

// Submit Order button
test("form contains a 'Submit Order' button", () => {
  render(<App />);

  expect(
    screen.getByRole("button", { name: /submit order/i })
  ).toBeInTheDocument();
});

test("clicking the 'Submit Order' button displays a thank you message", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit order/i });

  userEvent.click(submitButton);

  expect(screen.getByText(/thanks for your order!/i)).toBeInTheDocument();
});