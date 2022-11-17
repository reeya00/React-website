import React from 'react'
import CV from '../../assets/CV_Of_Reeya.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        {/* download pdf */}
        <a href={CV}download className='btn'>Download</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA