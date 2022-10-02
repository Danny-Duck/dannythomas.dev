import { component$, Slot } from '@builder.io/qwik'

export const H2 = component$(() => {
  return (
    <h2 class="text-xl">
      <Slot />
    </h2>
  )
})
