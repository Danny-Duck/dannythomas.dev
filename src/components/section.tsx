import { component$, Slot } from '@builder.io/qwik'

export const Section = component$(() => {
  return (
    <section class="pt-5">
      <Slot />
    </section>
  )
})
