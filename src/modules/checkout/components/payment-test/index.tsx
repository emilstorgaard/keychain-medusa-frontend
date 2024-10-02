import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Opmærksomhed:</span> Kun til testformål.
    </Badge>
  )
}

export default PaymentTest
