import Head from 'next/head'
import PartialLayout from '../layout/partials-layout'
export default function Home() {
  return (
    <>
    <Head>

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />	

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />

        <title>Clafiya - Primary Health Care at Your Door Step</title>
      
        <script src="vendor/jquery/jquery.min.js"></script>		
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>       
        <script src="vendor/jquery.appear/jquery.appear.min.js"></script>		
        <script src="vendor/jquery.easing/jquery.easing.min.js"></script>			
        <script src="vendor/owl.carousel/owl.carousel.min.js"></script>	
        <script src="js/theme.js"></script>
        <script src="js/theme.init.js"></script>
        </Head>
    {/* hero section */}
      <div className="hero mb-5">
        <div className="container hero-content">
            <div className="row align-items-center py-5">
                <div className="col-md-6 hero-text text-center text-md-left">
                    <h1 className="font-weight-semibold text-color-dark">
                        Primary Health Care at Your Door Step
                    </h1>
                    <p className="hero-p">Providing access to fast and affordable primary healthcare services for Africa's underserved communities.</p>
                    <div><a className="btn button px-4 py-2 text-white" href="#about_clafiya">Learn more</a></div>
                </div>
                <div className="hero-img col-md-6 pt-5 mt-3">
                    <img src="img/indexImg/hero IMG.svg" />
                </div>
            </div>
        </div>
    </div>
{/* service section */}
    <div className="services-grid py-5" id="about_clafiya">
            <div className="container">
                <div className="text-left service-head pb-4">
                    <h3 className="font-weight-semibold text-capitalize text-7 my-2">
                        Who is Clafiya for?
                    </h3>
                     <div className="rectangle mb-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-4 service">
                        <img src="./img/indexImg/img 1.svg" alt="" />
                        <div className="service-text px-4 py-2">
                            <h4 className="text-color-dark">
                                For Patients
                            </h4>
                            <p>
                                With Clafiya, our patients can register, pay and connect with the nearest community health worker to get access to fast and affordable primary healthcare.
                            </p>
                            <a href="#get_started" className="text-color-dark pb-5">Learn more <i className="fa fa-arrow-right px-2"></i></a>
                        </div>
                    </div>

                    <div className="col-md-4 service">
                        <img src="./img/indexImg/Group 2604.svg" alt="" />
                        <div className="service-text px-4 py-2 my-0">
                            <h4 className="text-color-dark">
                                For Health Workers
                            </h4>
                            <p>
                                Our Community Health Workers are directly connected to people who need their services. They generate an income for the services they provide, promoting social entrepreneurship. 
                            </p>
                            <a href="#chew_get_started" className="text-color-dark pb-5">Learn more <i className="fa fa-arrow-right px-2"></i></a>
                        </div>
                    </div>

                    <div className="col-md-4 service">
                        <img src="./img/indexImg/tech.svg" alt="" />
                        <div className="service-text px-4 py-2">
                            <h4 className="text-color-dark">
                                Easy-To-Use Technology
                            </h4>
                            <p>
                                Our easy to use technology allows anyone to access to our platform without internet connectivity by simply dialing our short USSD code *347*58#
                            </p>
                            <a href="#our_tech" className="text-color-dark pb-5">Learn more <i className="fa fa-arrow-right px-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* difference */}
        <div className="services">
            <div className="container">
                <div className="text-md-left text-center service-head pb-4">
                    <h3 className="my-2 text-capitalize font-weight-semibold">
                    What Does Clafiya Do?
                    </h3>
                     <div className="rectangle mb-4 d-inline-block"></div>
                </div>
                <div className="row mb-5 service-what">
                    <div className="col-md-6">
                        <img src="img/indexImg/left img last mile.svg" alt="" />
                    </div>
                    <div className="col-md-6 text-md-right text-center">
                        <h2 className="lead font-weight-semibold mb-1">
                            Last Mile Distribution of Primary Care Services
                        </h2>
                        <p>
                            Our Community Health Workers employ a door-to-door approach to increase access to primary care services in semi-urban, rural, and remote communities. Our reach extends all the way to the last mile, promoting an inclusive experience whilst seeking quality and affordable primary care services.
                        </p>
                        <div className="info">
                            <img src="img/indexImg/sdg1.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mb-5 service-what">
                    <div className="col-md-6 text-md-left text-center mb-3">
                        <h2 className="lead font-weight-semibold mb-1">
                            Increasing <span className="ml-1"> Job Opportunities for Women</span>
                        </h2>
                        <p>
                            According to the UN, less than half of the global women population are under employed. Particularly in Africa, the women unemployment rate is estimated to be 49.6%. By increasing job opportunities for women, Clafiya is re-writing this narrative.
                        </p>
                        <div className="info">
                            <img src="img/indexImg/sdg_8_grande_en 1.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="img/indexImg/Group 2609.svg" alt="" />
                    </div>
                </div>

                <div className="row mb-5 service-what">
                    <div className="col-md-6">
                        <img src="./img/indexImg/124.svg" alt="" />
                    </div>
                    <div className="col-md-6 text-md-right text-center">
                        <h2 className="lead font-weight-semibold mb-1">
                            Promoting Socio-Economic Development In Low Income Communities
                        </h2>
                        <p>
                        Clafiya takes a holistic approach to address Africa’s fractured primary healthcare system. At Clafiya, we understand that in order to realize our impact, we have to make something that Africans need. That is leveraging existing systems and technologies to improve access to home based primary care services. We also understand that this problem is two sided and addressing one side without the other will not generate the desired sustained impact needed in Africa. Overtime, Clafiya seeks to improve the life expectancy of Africans and reduce healthcare expenditure – thus alleviating people out of poverty. 
                        </p>
                        <div className="info">
                            <img src="img/indexImg/poverty.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Getting started */}
        <div className="getting-started" id="get_started">
            <div className="container">
                <h2 className="font-weight-semibold mb-5 text-md-left text-center">Getting Started</h2>
                <div className="row text-center">
                    <div className="col-md-3">
                        <div>
                            <img src="img/indexImg/Group 2586.svg" alt="" className="mb-2 started-img" />
                            <p className="font-weight-semibold text-color-dark">1. Dial *347*58#</p>
                            <p>
                                Simply dial our short code on your keypad to get started 
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <img src="img/indexImg/Group 2587.svg" alt="" className="mb-2 started-img" />
                            <p className="font-weight-semibold text-color-dark">2. Sign Up</p>
                            <p>
                                Our registration is simple and straight forward! Sign Up in just “4” steps! 
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <img src="img/indexImg/Group 2588.svg" alt="" className="mb-2 started-img" />
                            <p className="font-weight-semibold text-color-dark">3. Get An Appointment</p>
                            <p>
                                Enter your location to schedule an appointment with registered Community Health Workers in your area. 
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <img src="img/indexImg/Group 2590.svg" alt="" className="mb-2 started-img" />
                            <p className="font-weight-semibold text-color-dark">4. That's it...</p>
                            <p>
                                Enjoy fast and affordable primary healthcare at your doorsteps. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* our tech */}
        <div>
            <div className="container d-flex justify-content-center" id="our_tech">
                <div className="row align-items-center tech">
                    <div className="col-md-6 justify-content-center">
                        <img src="./img/indexImg/Phones.svg" alt="" className="phone" />
                    </div>
                    <div className="col-md-6 text-md-right text-center">
                        <div className="tech-head ">
                            <h3 className="text-color-dark font-weight-semibold mb-1">
                                Our Technology
                            </h3>
                            <div className="rectangle mb-2 tech-rect d-inline-block"></div>
                        </div>
                             <p>
                                Clafiya’s is a USSD (Unstructured Supplementary Service Data) is a session-based text communication protocol available on every GSM-enabled mobile device. A USSD is a short code that enables one to reach customers who are in hard to reach areas and does not require internet connectivity to function. According GMSA, mobile internet penetration on the African Continent was 26% - approximately 272 million people. As such it was imperative that our platform is easily accessible. With short USSD codes, Africans are using their mobile phones for banking, telecoms, agriculture and sports. With Clafiya they can now use it for healthcare.
                             </p>
                    </div>
                </div>
            </div>
        </div>
        {/* stories */}
        <section className="section bg-color-grey-scale-1 section-height-3 border-0 m-0 mb-5">
            <div className="container pb-2">
                <div className="row"> 
                    <div className="col-lg-6 text-center text-md-left mb-5 mb-lg-0">
                        <h2 className="text-color-dark font-weight-normal text-6 mb-2">Our  <strong className="font-weight-extra-bold">Stories</strong></h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim. Nullam id varius nunc.</p>
                        
                    </div>

                    <div className="col-lg-6">
                        <div className="owl-carousel owl-theme nav-style-1 stage-margin" data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 1}, '992': {'items': 1}, '1200': {'items': 1}}, 'loop': true, 'nav': false, 'dots': false, 'stagePadding': 40, 'autoplay': true, 'autoplayTimeout': 6000, 'loop': true}">
                            <div className="story">
                                <div className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark testimonial-remove-right-quote pl-md-4 mb-0 py-2">
                                    <div className="testimonial-author">
                                        <img src="img/clients/client-1.jpg" className="img-fluid rounded-circle mb-0" alt="" />
                                    </div>
                                    <blockquote>
                                        <p className="text-color-dark text-4 line-height-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae metus tellus. Curabitur non lorem at odio tempus consectetur vel eu lacus. Morbi.</p>
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <p><strong className="font-weight-extra-bold text-2">John Smith</strong><span>Okler</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="story">
                                <div className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark testimonial-remove-right-quote pl-md-4 mb-0 py-2">
                                    <div className="testimonial-author">
                                        <img src="img/clients/client-1.jpg" className="img-fluid rounded-circle mb-0" alt="" />
                                    </div>
                                    <blockquote>
                                        <p className="text-color-dark text-4 line-height-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae metus tellus. Curabitur non lorem at odio tempus consectetur vel eu lacus. Morbi.</p>
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <p><strong className="font-weight-extra-bold text-2">John Smith</strong><span>Okler</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* packages */}
        <div>
             <div className="container justify-content-center packages">
                <div>
                    <h3 className="text-color-dark font-weight-semibold mb-2 text-md-left ">
                        Our Affordable Prices
                    </h3>
                    <div className="rectangle d-inline-block mb-4"></div>
                </div>
                 <div className="row">
                     <div className="col-md-6">
                         <div className="package mb-4">
                             <div className="text-center mb-4">
                                 <img src="./img/indexImg/credit_card.svg" alt="" className="package-img" />
                             </div>
                             <div className="package-text  text-center text-md-let">
                                 <h4 className="font-weight-semibold">Pay As You Go.</h4>
                                 <p className="text-2">
                                    Health Worker Home Visits, Basic Primary Care Consultation,Pre-Natal, Antenatal, and Post-Natal Care, Additional Primary Care Services.
                                 </p>
                                 <ul className="package-list px-0">
                                     <li><span className="package-list-count">1.</span> Blood Sugar Screening.</li>
                                     <li><span className="package-list-count">2.</span> Malaria Rapid Test and Treatment.</li>
                                     <li><span className="package-list-count">3.</span> Typhoid Screening and Treatment.</li>
                                     <li><span className="package-list-count">4.</span> Pregnancy Test (Additional fees apply).</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div className="col-md-6">
                        <div className="package mb-4">
                            <div className="text-center mb-4">
                                <img src="./img/indexImg/pricing.svg" alt="" className="package-img" />
                            </div>
                            <div className="package-text text-center text-md-lef">
                                <h4 className="font-weight-semibold">Suscription Base</h4>
                                <p className="text-2">
                                Enjoy unlimited access to our services when you subscribe at any time! You can subscribe Weekly, Monthly, Quarterly, Or Annually.
                                </p>
                                <ul className="package-list px-0">
                                    <li><span className="package-list-count">1.</span> Health Worker Home Visits.</li>
                                    <li><span className="package-list-count">2.</span> Basic Primary Care Consultation.</li>
                                    <li><span className="package-list-count">3.</span> Pre-Natal, Antenatal , Post-Natal Care (Blood Pressure, Urine Sample, Blood Sample).</li>
                                    <li><span className="package-list-count">4.</span> Early Childhood Diseases.</li>
                                    <li><span className="package-list-count">4.</span> Malaria Rapid Test and Treatment.</li>
                                    <li><span className="package-list-count">4.</span> Typhoid Screening and Treatment.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
         {/* contact */}
         <div className="contact my-5 py-4" id="chew_get_started">
            <div className="container text-white align-items-center text-center text-md-left">
                <div className="d-flex align-items-center">
                </div>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h2 className="text-white font-weight-semibold">
                            Are You A Skilled And Highly Qualified Community Health Worker? 
                        </h2>
                        <p className="text-white">
                            Then we are looking to hire you, click the button to your right to sign up.
                        </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center ">
                            <a href="https://localhealer.typeform.com/to/AWUPye" target="_black" className="text-white sign-up d-flex justify-content-center align-items-center">Apply Now <i className="fa fa-arrow-right px-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

Home.layout = PartialLayout;