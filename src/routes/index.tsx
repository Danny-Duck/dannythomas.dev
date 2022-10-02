import { component$, useStore } from '@builder.io/qwik'
import { works } from '../works/_output'

export default component$(() => {
  const state = useStore({ selected: 0 })

  return (
    <>
      <h1 class="text-2xl">Hi I'm Danny,</h1>
      <p class="">
        I develop things for the web and I really like solving problems.
      </p>
      <p class="">
        I'm currently in Melbourne, Australia and working at Culture Amp.
      </p>
      <section>
        <h2 class="text-xl">Works (not a blog)</h2>
        <div class="">
          {works.map(({ title }, index) => {
            return (
              <>
                <button
                  class={`ml-2 pr-2 ${
                    state.selected == index ? 'text-xl bg-black text-white' : ''
                  }`}
                  onClick$={() => (state.selected = index)}
                >
                  {title}
                </button>
                {index + 1 != works.length && <span>|</span>}
              </>
            )
          })}
        </div>
        {works.map(
          ({ content }, index) =>
            index === state.selected && (
              <div class="border p-1" dangerouslySetInnerHTML={content}></div>
            )
        )}
      </section>
    </>
  )
})
