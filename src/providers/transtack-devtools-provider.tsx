"use client"

import { TanStackDevtools } from "@tanstack/react-devtools"
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools"

export default function DevtoolsProvider() {
    return <TanStackDevtools plugins={[formDevtoolsPlugin()]} />
}