import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid'

const Testimonials = () => {
  return (
    <MaxWidthWrapper className='pt-20 px-0 md:px-5 h-fit'>
      <div className='flex flex-col space-y-10'>
        <h2 className='text-center text-4xl font-semibold drop-shadow-lg'>
          Student Testimonials
        </h2>

        <div className=''>
          <TestimonialsGrid />
        </div>

        <div>
          <h3 className='text-3xl text-center mt-5'>Google Reviews</h3>
          <div className='flex justify-center items-center'>
            <iframe
              src='https://embedsocial.com/api/pro_hashtag/0429ded9647901f930dd7d3f62d1375ebd7e6da9'
              width='900px'
              height='1200px'
            ></iframe>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Testimonials
