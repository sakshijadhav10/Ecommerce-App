import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <div>
      <Layout title={"About us- Ecommerce app"}>
        <div className="row contactus">
            <div className="col-md-6">
                <img src="/images/about.jpeg" alt="contactus"
                style={{width:"100%"}} />
            </div>
            <div className="col-md-4">
                <p className="text-justify mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus accusantium doloremque eligendi harum labore, odio cupiditate libero et officia laboriosam id praesentium nesciunt numquam! Tempora natus harum aliquid eligendi hic laborum voluptates eveniet neque ipsum consequuntur, consequatur optio nihil!
                </p>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
