import { component$ } from '@builder.io/qwik'
import { IndexHeader } from '../components/index-header'
import { WorksList } from '../components/works'
import { works } from '../works/_output'

export default component$(() => {
  const fun = [{ title: 'memes', content: '' }]

  return (
    <>
      <IndexHeader />
      <WorksList title={'Works (not a blog)'} works={works} />
      <WorksList title={'Fun'} works={fun} />
    </>
  )
})
