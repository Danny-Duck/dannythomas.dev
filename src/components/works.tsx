import { component$, useStore, $, mutable } from '@builder.io/qwik'
import { Button } from './button'
import { H2 } from './h2'
import { Section } from './section'

interface Props {
  title: string
  works: Array<{ title: string; content: string }>
}

export const WorksList = component$(({ title, works }: Props) => {
  const state = useStore({ selected: -1 })

  const toggleSelection = $((index: number) =>
    state.selected == index ? (state.selected = -1) : (state.selected = index)
  )

  return (
    <Section>
      <H2>{title}</H2>
      <ul class="flex-col">
        {works.map(({ title, content }, index) => {
          const isSelected = index === state.selected
          return (
            <li>
              <span>|</span>
              <Button
                isSelected={mutable(isSelected)}
                // @ts-ignore
                onClick$={() => toggleSelection(index)}
              >
                {title}
              </Button>

              <div
                class={`border p-1 ${isSelected ? 'transition' : 'hidden'}`}
                dangerouslySetInnerHTML={content}
              ></div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
})
