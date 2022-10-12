import { component$ } from '@builder.io/qwik'

export const IndexHeader = component$(() => {
  const hi = "Hi I'm Danny,"
  const introCopy = `I develop things for the web, tinker with electronics and I really enjoy solving problems.
    I'm currently working on a few projects, one of which is this site. `
  return (
    <>
      <div
        class={'hidden lg:flex self-center w-full justify-between items-center'}
      >
        <div class={'pt-10'}>
          <h1 class="text-2xl">{hi}</h1>
          <p class="whitespace-pre-line">{introCopy}</p>
        </div>
        <img
          src="/me.webp"
          alt="Danny's smiling Apple Memoji"
          class={'w-48 h-48'}
        />
      </div>

      <div class={'flex items-center lg:hidden flex-col self-center md:w-3/4'}>
        <div class="flex items-center justify-between">
          <h1 class="text-2xl">{hi}</h1>
          <img src="/me.webp" class={'w-48 h-48'} />
        </div>
        <p class="whitespace-pre-line">{introCopy}</p>
      </div>
    </>
  )
})
