import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Pagination from "./pagination";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the previous page", async () => {
    let currentPageIndex = 0;

    const onPageChangeMock = vi.fn((newPageIndex) => {
      currentPageIndex = newPageIndex;
    });

    const { rerender, getByRole } = render(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const user = userEvent.setup();

    const lastPageButton = getByRole("button", { name: "Última página" });
    await user.click(lastPageButton);

    rerender(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const previousPageButton = getByRole("button", { name: "Página anterior" });
    await user.click(previousPageButton);

    rerender(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    expect(onPageChangeMock).toHaveBeenCalledWith(19);
  });

  it("should be able to navigate to the first page", async () => {
    let currentPageIndex = 0;

    const onPageChangeMock = vi.fn((newPageIndex) => {
      currentPageIndex = newPageIndex;
    });

    const { rerender, getByRole } = render(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const user = userEvent.setup();

    // Clicar no botão "Última página"
    const lastPageButton = getByRole("button", { name: "Última página" });
    await user.click(lastPageButton);

    // Atualizar o índice da página simulando a lógica do componente pai
    rerender(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const firstPageButton = getByRole("button", { name: "Primeira página" });
    await user.click(firstPageButton);

    rerender(
      <Pagination
        pageIndex={currentPageIndex}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeMock}
      />,
    );

    expect(onPageChangeMock).toHaveBeenCalledWith(0);
  });
});
