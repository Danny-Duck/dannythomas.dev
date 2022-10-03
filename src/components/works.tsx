import { component$, useStore, $, mutable } from '@builder.io/qwik'
import { Button } from './button'
import { H2 } from './h2'
import { Section } from './section'
import { SubHeading } from './sub-heading'

interface Props {
  title: string
  subtitle: string
  works: Array<{ title: string; content: string }>
}

export const WorksList = component$(({ title, subtitle, works }: Props) => {
  const state = useStore({ selected: -1 })

  const toggleSelection = $((index: number) =>
    state.selected == index ? (state.selected = -1) : (state.selected = index)
  )

  return (
    <Section>
      <H2>{title}</H2>
      <SubHeading>{subtitle}</SubHeading>
      <ul class="flex-col list-outside">
        {works.map(({ title, content }, index) => {
          const isSelected = index === state.selected
          return (
            <li>
              <Button
                isSelected={mutable(isSelected)}
                // @ts-ignore
                onClick$={() => toggleSelection(index)}
              >
                {title}
              </Button>
              <div
                class={`bg-gray-100 m-2 p-3 ${isSelected ? '' : 'hidden'}`}
                dangerouslySetInnerHTML={content}
              ></div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
})
