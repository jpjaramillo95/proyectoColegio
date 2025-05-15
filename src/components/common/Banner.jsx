import { Carousel } from "flowbite-react";

export default function Banner() {
  return (
    <>
    <div className="h-90 pt-5">
      <Carousel>
        <img src="../../../src/assets/img/banner1.jpg" alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." /> */}
      </Carousel>
    </div>
    </>
  )
}
