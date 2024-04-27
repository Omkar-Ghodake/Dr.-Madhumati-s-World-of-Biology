const GoogleMaps = () => {
  return (
    <div className='h-[30vh] w-full rounded-lg shadow-2xl'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1325.6221658994748!2d73.85963991958229!3d18.46912247360305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb7b102e67ef%3A0xe12efd45a576d078!2sK%20k%20market!5e0!3m2!1sen!2sin!4v1712231760787!5m2!1sen!2sin'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        loading='lazy'
        className='rounded-xl'
      ></iframe>
    </div>
  )
}

export default GoogleMaps
