import { Order } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text>
        Vi har sendt ordrebekræftelsesoplysningerne til{" "}
        <span className="text-ui-fg-medium-plus font-semibold" data-testid="order-email">
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Betalingsdato: <span data-testid="order-date">{new Date(order.created_at).toDateString()}</span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Ordrenummer: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Ordrestatus:{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Betalingsstatus:{" "}
              <span className="text-ui-fg-subtle " sata-testid="order-payment-status">
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
