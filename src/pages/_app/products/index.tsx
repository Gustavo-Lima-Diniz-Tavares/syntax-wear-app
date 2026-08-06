import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container'>
      <h1 className='text-black'>OLÁ</h1>

      <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem fugit tempora veniam ducimus in ratione corrupti doloremque. Sapiente saepe dolore sed nesciunt eveniet nostrum a aliquid. Omnis, architecto officia!</p>
      <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem fugit tempora veniam ducimus in ratione corrupti doloremque. Sapiente saepe dolore sed nesciunt eveniet nostrum a aliquid. Omnis, architecto officia!</p>
      <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem fugit tempora veniam ducimus in ratione corrupti doloremque. Sapiente saepe dolore sed nesciunt eveniet nostrum a aliquid. Omnis, architecto officia!</p>
      <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem fugit tempora veniam ducimus in ratione corrupti doloremque. Sapiente saepe dolore sed nesciunt eveniet nostrum a aliquid. Omnis, architecto officia!</p>
      <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem fugit tempora veniam ducimus in ratione corrupti doloremque. Sapiente saepe dolore sed nesciunt eveniet nostrum a aliquid. Omnis, architecto officia!</p>

    </div>
  )
}
