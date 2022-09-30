import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <h1>Danny was here</h1>
})

export const head: DocumentHead = {
  title: 'Danny was here',
}
