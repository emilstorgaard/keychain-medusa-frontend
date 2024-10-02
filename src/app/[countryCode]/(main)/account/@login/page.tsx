import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Log ind",
  description: "Log ind på din Keychain konto.",
}

export default function Login() {
  return <LoginTemplate />
}
