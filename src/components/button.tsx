import { component$, PropFunction, Slot } from '@builder.io/qwik'

type Props = { onClick$: PropFunction<() => void>; isSelected: boolean }

export const Button = component$(({ onClick$, isSelected }: Props) => {
  return (
    <button
      class={`ml-2 pr-2 hover:underline text-left ${
        isSelected ? 'text-orange-600' : ''
      }`}
      // eslint-disable-next-line
      onClick$={onClick$}
    >
      <Slot />
    </button>
  )
})
