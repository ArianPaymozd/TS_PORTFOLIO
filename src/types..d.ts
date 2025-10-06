type Point = {
  x: number,
  y: number
}

type CarouselItem = {
  img: string,
  title: string,
  caption?: string
  idx?: number
}

type CarouselScroll = {
  opacity: number, marginTop?: number, transform?: string
}