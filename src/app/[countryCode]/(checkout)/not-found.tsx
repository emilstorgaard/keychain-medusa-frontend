import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Noget gik galt",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Siden blev ikke fundet</h1>
      <p className="text-small-regular text-ui-fg-base">
        Den side, du forsøgte at tilgå, findes ikke.
      </p>
      <InteractiveLink href="/">Gå til forsiden</InteractiveLink>
    </div>
  )
}
