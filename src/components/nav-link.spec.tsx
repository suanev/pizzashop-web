import { render } from "@testing-library/react";
import NavLink from "./nav-link";
import { MemoryRouter, Router } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the nav link when is the current page link", () => {
    const wrapper = render(<NavLink to="/about">Test</NavLink>, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
      ),
    });

    expect(wrapper.getByText("Test")).toBeInTheDocument();
    expect(wrapper.getByText("Test").dataset.current).toEqual("true");
  });
});
