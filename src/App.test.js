import { render, screen } from "@testing-library/react";
import App from "./App";
import OrderComplete from "./Components/OrderComplete";
import Productcard from "./Components/Productcard";
import ProductList from "./Components/ProductList";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders page", () => {
  render(<ProductList />);
  const linkElement = screen.getByText("Webshop");
  expect(linkElement).toBeInTheDocument();
});

it("renders with or without a name", () => {
  act(() => {
    render(<Productcard />, container);
  });
  expect(container.textContent).toBe("Add to Cart");

  act(() => {
    render(<Productcard />, container);
  });
  expect(container.textContent).toBe("Learn More");

  act(() => {
    render(<OrderComplete />, container);
  });
  expect(container.textContent).toBe("Order Complete");
});
