import OrderStatus from "./order-status";
import { render } from "@testing-library/react";

describe("OrderStatus", () => {
  it("should display the right text based when order status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    const status = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge-pending");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text based when order status is canceled", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    const status = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge-canceled");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text based when order status is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    const status = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge-delivered");

    expect(status).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });

  it("should display the right text based when order status is processing", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusDelivering = wrapper.getByText("Em entrega");
    const badgeElementDelivering = wrapper.getByTestId("badge-delivering");

    expect(statusDelivering).toBeInTheDocument();
    expect(badgeElementDelivering).toHaveClass("bg-amber-500");
  });

  it("should display the right text based when order status is delivering", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    const statusProcessing = wrapper.getByText("Em preparo");
    const badgeElementProcessing = wrapper.getByTestId("badge-processing");

    expect(statusProcessing).toBeInTheDocument();
    expect(badgeElementProcessing).toHaveClass("bg-amber-500");
  });
});
