import { component$, Slot } from '@builder.io/qwik'

export const SubHeading = component$(() => {
  return (
    <p class="text-slate-700 text-sm">
      <Slot />
    </p>
  )
})
