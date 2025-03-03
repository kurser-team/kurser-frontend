"use client"

import { useState } from "react"

export default function LoginPage() {
  const [clicks, setClicks] = useState(0)

  return <div onClick={() => setClicks(clicks + 1)}>Login {clicks}</div>
}
