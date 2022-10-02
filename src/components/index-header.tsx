import { component$ } from '@builder.io/qwik'

export const IndexHeader = component$(() => {
  return (
    <>
      <div
        class={'hidden lg:flex self-center w-full justify-between items-center'}
      >
        <div class={'pt-10'}>
          <h1 class="text-2xl">Hi I'm Danny,</h1>
          <p>
            I develop things for the web and I really like solving problems.
          </p>
          <p>
            I'm currently in Melbourne, Australia and working at Culture Amp.
          </p>
        </div>
        <img src="/me.webp" class={'w-48 h-48'} />
      </div>

      <div class={'flex items-center lg:hidden flex-col self-center md:w-3/4'}>
        <div class="flex items-center justify-between">
          <h1 class="text-2xl">Hi I'm Danny,</h1>
          <img src="/me.webp" class={'w-48 h-48'} />
        </div>
        <p>I develop things for the web and I really like solving problems.</p>
        <p>I'm currently in Melbourne, Australia and working at Culture Amp.</p>
      </div>
    </>
  )
})
