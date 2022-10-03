import { component$ } from '@builder.io/qwik'
import { IndexHeader } from '../components/index-header'
import { WorksList } from '../components/works'
import { fun } from '../content/fun/_output'
import { works } from '../content/works/_output'

export default component$(() => {
  return (
    <>
      <IndexHeader />
      <WorksList
        title={'Works'}
        subtitle="Things that I'm proud of"
        works={works}
      />
      <WorksList title={'Fun'} subtitle="Things I want to share" works={fun} />
    </>
  )
})
