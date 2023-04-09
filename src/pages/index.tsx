import Head from 'next/head'
import { IndexHeader } from '@src/components/IndexHeader'
import { WorksList } from '@src/components/WorksList'
import { works } from '@src/content/works/_output'
import { fun } from '@src/content/fun/_output'
import { Main } from '@src/components/Main'
import { Footer } from '@src/components/Footer'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const imgRef = useRef(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    topstart: 0,
    leftstart: 0,
  })
  console.log('render')

  useEffect(() => {
    if (imgRef.current !== null) {
      const img = imgRef.current
      // @ts-ignore
      img.onload = () => {
        const transparentDimensions = getTransparentDimensions(img)
        setDimensions(transparentDimensions)
      }
    }
  }, [])

  const getTransparentDimensions = img => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    ctx.drawImage(img, 0, 0, img.width, img.height)

    let minX = null
    let minY = null
    let maxX = null
    let maxY = null

    const isTransparent = (x, y) => {
      const pixel = ctx.getImageData(x, y, 1, 1).data
      return pixel[3] === 0
    }

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        if (isTransparent(x, y)) {
          if (minX === null || x < minX) minX = x
          if (maxX === null || x > maxX) maxX = x
          if (minY === null || y < minY) minY = y
          if (maxY === null || y > maxY) maxY = y
        } else {
        }
      }
    }

    if (minX === null || minY === null || maxX === null || maxY === null) {
      return { width: 0, height: 0 }
    }
    console.log(minX, minY, maxX, maxY)
    return {
      width: maxX - minX + 1,
      height: maxY - minY + 1,
      top: minY,
      /* left: minX, */
    }
  }

  console.log(dimensions)

  return (
    <>
      <Head>
        <title>{'Danny Thomas'}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
        />
      </Head>
      <div className="flex justify-center items-center h-screen bg-black ">
        <Image
          /* priority */
          ref={imgRef}
          id="monitor"
          src={'/monitora.png'}
          width={1000}
          height={1500}
          alt="Monitor"
          className="w-auto h-screen fixed left-2/4 transform -translate-x-2/4"
        />
        <div
          style={{ ...dimensions }}
          className={
            dimensions.width === 0 && dimensions.height === 0
              ? 'hidden'
              : `rounded-[3.75rem] fixed overflow-y-scroll left-2/4 transform -translate-x-2/4 flex justify-center flex-col z-10` // bg-red-500 opacity-50`
          }
        >
          {/*     <div className="min-h-screen w-full flex flex-col justify-between items-center"> */}
          {/*       <Main className="gap-5"> */}
          <IndexHeader />
          <WorksList
            title={'Works'}
            subtitle="Things that I'm proud of"
            works={works}
          />
          <WorksList
            title={'Fun'}
            subtitle="Things I want to share"
            works={fun}
          />
          {/* </Main> */}
          <Footer />
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
