export type OrderStatusType =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatusType;
}

export const orderStatusMap: Record<OrderStatusType, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  processing: "Em preparo",
};

const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-testid="badge-pending"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}

      {status === "canceled" && (
        <span
          data-testid="badge-canceled"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}

      {status === "delivered" && (
        <span
          data-testid="badge-delivered"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}

      {["processing", "delivering"].includes(status) && (
        <span
          data-testid={`badge-${status}`}
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}

      <span className="text-xs font-semibold">{orderStatusMap[status]}</span>
    </div>
  );
};

export default OrderStatus;
