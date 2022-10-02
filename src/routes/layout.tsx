import { component$, Slot } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  const socials = [
    { label: 'Github', href: 'https://github.com/Danny-Duck' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dannylowater/' },
    { label: 'Email', href: '' },
  ]
  return (
    <>
      <main>
        <Slot />
      </main>
      <footer>
        <h2 class="text-xl">Socials</h2>
        <p>You can find me here</p>
        <div>
          {socials.map(({ label, href }) => (
            <a target="_blank" class={'mr-2'} href={href}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Danny Thomas',
}
