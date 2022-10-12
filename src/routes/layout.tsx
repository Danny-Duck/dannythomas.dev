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
      <main class="p-5 w-full lg:w-3/4 xl:w-1/2 self-center flex flex-col">
        <Slot />
      </main>
      <footer class={'flex w-full justify-center flex-col place-self-end'}>
        <h2 class="text-xl">Socials</h2>
        <p class="text-sm">You can find me here</p>
        <div class="grid-cols-3 grid w-auto self-center">
          {socials.map(({ label, href }) => (
            <a
              target="_blank"
              /* style={{ color: 'rgb(112 156 216)' }} */
              class={'text-sm hover:underline text-blue-300'}
              href={href}
            >
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
