import { component$ } from '@builder.io/qwik'
import { WorksList } from '../components/works'
import { works } from '../works/_output'

export default component$(() => {
  const fun = [{ title: 'memes', content: '' }]

  return (
    <>
      <div class={'flex self-center justify-between'}>
        <div class={'pt-10'}>
          <h1 class="text-2xl">Hi I'm Danny,</h1>
          <p class="pt-10">
            I develop things for the web and I really like solving problems.
          </p>
          <p class="">
            I'm currently in Melbourne, Australia and working at Culture Amp.
          </p>
        </div>
        <img src="/me.webp" class={'w-48 h-48'} />
      </div>
      <WorksList title={'Works (not a blog)'} works={works} />
      <WorksList title={'Fun'} works={fun} />
    </>
  )
})
