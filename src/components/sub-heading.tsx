import { component$, Slot } from '@builder.io/qwik'

export const SubHeading = component$(() => {
  return (
    <p style="color: rgb(176 169 159)" class="text-slate-400 text-sm">
      <Slot />
    </p>
  )
})
