import React, { Component } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PartialLayout from '../layout/partials-layout'
import PaystackButton from 'react-paystack';
// import 'bootstrap/dist/js/bootstrap.js';
var loadJs = require('loadjs');


class Home extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        key: "pk_live_477f8475b863b328656efdad927cd98e47e740fd",
        email: "shodipovi@gmail.com",
        amount: 100000
    }

    // router = useRouter();


    callback = (response) => {
        alert('success. transaction ref is ' + response.reference);
    }

    close = () => {
        console.log("Payment closed");
    }

    setAmount = (amount) => {
        this.setState({ ...this.state, amount: amount })
        // this.router.push({
        //     pathname: '/register',
        //     query: { pid: 'basic' },
        // })
        //   this.state.amount = amount;
        //   console.log(this.state.amount);
    }

    getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    componentDidMount() {
        loadJs("js/theme.init.js");
        // loadJs("https://js.paystack.co/v1/inline.js");


        // var handler = PaystackPop.setup({
        //             key: 'pk_live_477f8475b863b328656efdad927cd98e47e740fd',
        //             email: 'customer@email.com',
        //             amount: 10000,
        //             currency: "NGN",
        //             ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        //             firstname: 'Stephen',
        //             lastname: 'King',
        //             // label: "Optional string that replaces customer email"
        //             metadata: {
        //                custom_fields: [
        //                   {
        //                       display_name: "Mobile Number",
        //                       variable_name: "mobile_number",
        //                       value: "+2348012345678"
        //                   }
        //                ]
        //             },
        //             callback: function(response){
        //                 alert('success. transaction ref is ' + response.reference);
        //             },
        //             onClose: function(){
        //                 alert('window closed');
        //             }
        //           });
        //           handler.openIframe();

    }

    render() {
        return (
            <>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />
                    <title>Clafiya - Quality Primary Health Care at Your Door Step</title>
                    <script src="vendor/jquery/jquery.min.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                    {/* <script src="vendor/jquery.appear/jquery.appear.min.js"></script>		 */}
                    {/* <script src="vendor/jquery.easing/jquery.easing.min.js"></script>			 */}
                    <script src="vendor/owl.carousel/owl.carousel.min.js"></script>
                    <script src="js/theme.js"></script>
                    {/* <script src="https://js.paystack.co/v1/inline.js"></script> */}
                    {/* <script src="js/theme.init.js"></script> */}
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link> */}
                </Head>
                {/* hero section */}
                <div className="hero mb-5">
                    <div className="container hero-content">
                        <div className="row align-items-center py-5">
                            <div className="col-md-6 hero-text text-center text-md-left">
                                <h1 className="font-weight-semibold text-color-dark">
                                    Quality Primary Health Care at Your Door Step
                            </h1>
                                <p className="hero-p">Providing access to fast and affordable primary health care services for Africa's underserved communities.</p>
                                <div><a className="btn button px-4 py-2 text-white" href="#about_clafiya">Learn more</a></div>
                            </div>
                            <div className="hero-img col-md-6 col-sm-push-6 pt-5 mt-3">
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
                                        With Clafiya, our patients can register, pay and connect with the nearest community health worker to get access to fast and affordable primary health care.
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
                <div className="difference-container">
                    <div className="container">
                        <div className="row scroll-section">
                            <div className="text-md-left text-center service-head pb-4 col-md-6">
                                <section>
                                    <div className="rectangle mb-0 d-inline-block"></div>
                                    <h2 className="my-2 text-capitalize font-weight-semibold">
                                        What Makes Clafiya Different?
                                    </h2>
                                    <p>
                                        Our desire to ensure that access to primary health care is a basic right for all Africans regardless of socio-economic status is what makes Clafiya different. <br />
                                        Clafiya was founded with the mission to provide life-saving health care services to individuals living in semi-urban and rural communities. This women-led platform is determined to connect people to the nearest health care worker, no matter where they live and what their income may be - our goal is that quality and affordable health services are within reach to everyone, everywhere. Through Clafiya, we are one step closer to meeting the SDGs 1, 3, and 8.
                                    </p>
                                </section>
                            </div>
                            <div className="col-md-6 what-scroll">
                                <div className="what-card bg-light p-3 shadow mb-4">
                                    <div className="text-left">
                                        <h2 className="lead font-weight-semibold mb-1">
                                            Last Mile Distribution of Primary Care Services
                                        </h2>
                                        <p>
                                            Our Community Health Workers employ a door-to-door approach to increase access to primary care services in semi-urban, rural, and remote communities. Our reach extends all the way to the last mile, promoting an inclusive experience whilst seeking quality and affordable primary care services.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="./img/indexImg/left img last mile.svg " className="what-img" alt="" />
                                        <div className="info mt-3">
                                            <img src="./img/indexImg/sdg1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="what-card bg-light p-3 shadow mb-4">
                                    <div className="text-left">
                                        <h2 className="lead font-weight-semibold mb-1">
                                            Increasing Job Opportunities for Women

                                        </h2>
                                        <p>
                                            According to the UN, less than half of the global women population are under employed. Particularly in Africa, the women unemployment rate is estimated to be 49.6%. By increasing job opportunities for women, Clafiya is re-writing this narrative.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="./img/indexImg/Group 2609.svg" alt="" className="what-img" />
                                        <div className="info mt-3">
                                            <img src="./img/indexImg/sdg.svg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="what-card bg-light p-3 shadow mb-4">
                                    <div className="text-left">
                                        <h2 className="lead font-weight-semibold mb-1">
                                            Promoting Socio-Economic Development In Low Income Communities


                                        </h2>
                                        <p>
                                            Clafiya takes a holistic approach to address Africa’s fractured primary health care system. At Clafiya, we understand that in order to realize our impact, we have to make something that Africans need. That is leveraging existing systems and technologies to improve access to home based primary care services. We also understand that this problem is two sided and addressing one side without the other will not generate the desired sustained impact needed in Africa. Overtime, Clafiya seeks to improve the life expectancy of Africans and reduce health care expenditure – thus alleviating people out of poverty.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="./img/indexImg/124.jpeg" alt="" className="what-img" />
                                        <div className="info mt-3">
                                            <img src="./img/indexImg/poverty.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <div className="modal fade" id="paymentModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content my-modal p-4">
                            <div className="d-flex flex-column">
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="button" className="close-modal d-flex outline-none" data-dismiss="modal" aria-label="Close">
                                        <p className="text-sm-1 text-dark mb-0">Close</p> <span aria-hidden="true" className="justify-content-center d-flex align-items-center"><i className="fa fa-times"></i></span>
                                    </button>
                                </div>

                                <div className="text-center w-100">
                                    <h2 className="modal-title font-weight-semibold" id="exampleModalLabel">Hey there, Let's get you started</h2>
                                    <p className="modal-title" id="exampleModalLabel">Quickly sign up and pay for a subscription plan</p>
                                </div>

                            </div>
                            <div className="modal-body">
                                <form action="" className="my-form">
                                    <div className="form-div">
                                        <input type="text" className="form-input" />
                                        <label className="form-label">Full Name</label>
                                    </div>

                                    <div className="form-div">
                                        <input type="email" className="form-input" />
                                        <label className="form-label">Email Address</label>
                                    </div>

                                    <div className="form-div">
                                        <input type="email" className="form-input" />
                                        <label className="form-label">Phone Number</label>
                                    </div>
                                </form>
                            </div>
                            <div className="w-100">
                                {/* <button type="button" className="btn button text-white w-100" data-dismiss="modal">Proceed to Payment</button> */}
                                <PaystackButton
                                    className="btn button text-white w-100n"
                                    text="Make Payment"
                                    callback={this.callback}
                                    close={this.close}
                                    disabled={false}
                                    embed={false}
                                    reference={this.getReference()}
                                    email={this.state.email}
                                    amount={this.state.amount}
                                    paystackkey={this.state.key}
                                    tag="button"
                                />
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
                                        Our registration is simple and straight forward! Sign Up in just 4 steps!
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div>
                                    <img src="img/indexImg/Group 2588.svg" alt="" className="mb-2 started-img" />
                                    <p className="font-weight-semibold text-color-dark">3. Get An Appointment</p>
                                    <p>
                                        Enter your location to schedule an appointment with registered Community Health Workers in your area
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div>
                                    <img src="img/indexImg/Group 2590.svg" alt="" className="mb-2 started-img" />
                                    <p className="font-weight-semibold text-color-dark">4. That's it!</p>
                                    <p>
                                        Enjoy fast and affordable primary health care at your doorsteps
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
                                <img src="./img/indexImg/phone.svg" alt="" className="phone" />
                            </div>
                            <div className="col-md-6 text-md-right text-center">
                                <div className="tech-head ">
                                    <h3 className="text-color-dark font-weight-semibold mb-1">
                                        Our Technology
                                    </h3>
                                    <div className="rectangle mb-2 tech-rect d-inline-block"></div>
                                </div>
                                <p>
                                    Clafiya is a USSD (Unstructured Supplementary Service Data)
                                    session-based text communication protocol available on every GSM-enabled mobile device.
                                    A USSD is a short code that enables one to reach customers who are in hard to reach areas and does not require internet connectivity to function.
                                    According to GMSA, mobile internet penetration on the African Continent was 26% - approximately 272 million people.
                                    As such, it was imperative that our platform is easily accessible.
                                    In various African countries, people are using their mobile phones for banking, telecoms, agriculture and sports.
                                    With Clafiya they can now use it for health care.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* stories */}
                <section className="section bg-color-grey-scale-1 section-height-3 border-0 m-0 mb-5 contact">
                    <div className="container pb-2">
                        <div className="row">
                            <div className="col-lg-6 text-center text-md-left mb-5 mb-lg-0">
                                <h2 className="text-color-dark font-weight-normal text-6 mb-2">Our  <strong className="font-weight-extra-bold">Stories</strong></h2>

                            </div>
                        </div>
                    </div>
                </section>
                {/* packages */}
                <div className="packages-section">
                    <div className="container justify-content-center packages">
                        <div>
                            <h3 className="text-color-dark font-weight-semibold mb-2 text-md-left ">
                                Our Affordable Packages
                            </h3>
                            <div className="rectangle d-inline-block mb-4"></div>
                        </div>
                        {/* Mobile Packages View */}
                        <div className='d-block d-sm-none mobile-packages'>
                            {/* Basic Plan */}
                            <div className='plan'>
                                <p className='plan-name'>
                                    Basic Plan
                                </p>
                                <p className='plan-price'>
                                    <sup>₦</sup>2,000
                                </p>
                                <small>Pay as you go - charges for extra services</small>
                                <div className='plan-button'><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(200000)}>Get Started</a></div>
                                <div className='plan-services'>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Primary Care Consultation
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Hypertension Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Blood Sugar Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Rapid Diagnostic Test for: Malaria, Typhoid
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Pregnancy Test
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Prenatal | Antenatal |  Postnatal Care Services
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Protein and Urine Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                </div>
                            </div>
                            {/* Single Plan */}
                            <div className='plan'>
                                <p className='plan-name'>
                                    Single Plan
                                </p>
                                <p className='plan-price'>
                                    <sup>₦</sup>3,000
                                </p>
                                <small>Monthly</small>
                                <div className='plan-button'><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(300000)}>Get Started</a></div>
                                <div className='plan-services'>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Primary Care Consultation
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Hypertension Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Blood Sugar Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Rapid Diagnostic Test for: Malaria, Typhoid
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Pregnancy Test
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Prenatal | Antenatal |  Postnatal Care Services
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Protein and Urine Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-x.svg'></img>
                                    </div>
                                </div>
                            </div>
                            {/* Maternity Care */}
                            <div className='plan'>
                                <p className='plan-name'>
                                    Maternity Care
                                </p>
                                <p className='plan-price'>
                                    <sup>₦</sup>3,500
                                </p>
                                <small>Monthly</small>
                                <div className='plan-button'><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(350000)}>Get Started</a></div>
                                <div className='plan-services'>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Primary Care Consultation
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Hypertension Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Blood Sugar Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Rapid Diagnostic Test for: Malaria, Typhoid
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Pregnancy Test
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Prenatal | Antenatal |  Postnatal Care Services
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Protein and Urine Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                </div>
                            </div>
                            {/* Family */}
                            <div className='plan'>
                                <p className='plan-name'>
                                    Family
                                </p>
                                <p className='plan-price'>
                                    <sup>₦</sup>5,000
                                </p>
                                <small>Monthly</small>
                                <div className='plan-button'><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(500000)}>Get Started</a></div>
                                <div className='plan-services'>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Primary Care Consultation
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Hypertension Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Blood Sugar Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Rapid Diagnostic Test for: Malaria, Typhoid
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Pregnancy Test
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Prenatal | Antenatal |  Postnatal Care Services
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                    <div className='plan-service row'>
                                        <hr></hr>
                                        <p className='justify-content-start service-name col-xs-12'>
                                            Protein and Urine Screening
                                        </p>
                                        <img className='justify-content-end' height='40px' width='40px' src='./img/icons/icon-check.svg'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className='table-responsive d-none d-md-block d-lg-block'>
                            <table className='table packages-table'>
                                <thead>
                                    <tr>
                                        <th scope="col" className='justify-content-start benefits-heading'>Benefits</th>
                                        <th scope="col" className='text-center basic-col'>
                                            <div>
                                                Basic Plan <br />
                                                <sup>₦</sup>2,000 <br />
                                                <small>Pay as you go - charges for extra services</small>
                                            </div>
                                            <div><a className="btn button px-4 py-2 text-white" onClick={() => this.setAmount(200000)}>Get Started</a></div>
                                        </th>
                                        <th scope="col" className='text-center'>
                                            <div>
                                                Single Plan <br />
                                                <sup>₦</sup>3,000 <br />
                                                <small>Monthly</small>
                                            </div>
                                            <div><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(300000)}>Get Started</a></div>
                                        </th>
                                        <th scope="col" className='text-center'>
                                            <div>
                                                Maternity Care <br />
                                                <sup>₦</sup>3,500 <br />
                                                <small>Monthly</small>
                                            </div>
                                            <div><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(350000)}>Get Started</a></div>
                                        </th>
                                        <th scope="col" className='text-center'>
                                            <div>
                                                Family <br />
                                                <sup>₦</sup>5,000 <br />
                                                <small>Monthly</small>
                                            </div>
                                            <div><a className="btn button px-4 py-2 text-white" data-toggle="modal" data-target="#paymentModal" onClick={() => this.setAmount(500000)}>Get Started</a></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Primary Care Consultation */}
                                    <tr>
                                        <td scope="row" className='service-name'>Primary Care Consultation</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Hypertension Screening */}
                                    <tr>
                                        <td scope="row" className='service-name'>Hypertension Screening</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Blood Sugar Screening */}
                                    <tr>
                                        <td scope="row" className='service-name'>Blood Sugar Screening</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Rapid Diagnostic Test For: Malaria, Typhoid */}
                                    <tr>
                                        <td scope="row" className='service-name'>Rapid Diagnostic Test For: Malaria, Typhoid</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Pregnancy Test */}
                                    <tr>
                                        <td scope="row" className='service-name'>Pregnancy Test</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Prenatal | Antenatal | Postnatal Care Services */}
                                    <tr>
                                        <td scope="row" className='service-name'>Prenatal | Antenatal | Postnatal Care Services</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                    {/* Protein and Urine Screening */}
                                    <tr>
                                        <td scope="row" className='service-name'>Protein and Urine Screening</td>
                                        <td className='text-center basic-col'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-x.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                        <td className='text-center'>
                                            <img src='./img/icons/icon-check.svg'></img>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="dots packages-dots">
                    <img src="./img/indexImg/dots-background-2 1packages.svg" alt="" />
                </div>
                {/* contact */}

                <div className="contact my-5 py-4">
                    <div className="container text-white align-items-center text-center text-md-left">
                        <div className="d-flex align-items-center mt-4 mb-5">
                            <div className="rectangle bg-light mx-3"></div>
                            <p className="text-white mb-0 text-sm-4">
                                Let's get in touch
                            </p>
                        </div>
                        <div className="row align-items-center mb-5 mt-4">
                            <div className="col-md-8">
                                <h2 className="text-white font-weight-semibold">
                                    Are You A Skilled And Highly Qualified Community Health Worker?
                                </h2>
                                <p className="text-white">
                                    Then we are looking to hire you, click the button to your right to sign up.
                                </p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center ">
                                <a href="https://localhealer.typeform.com/to/AWUPye" target="_black" className="text-white sign-up d-flex justify-content-center align-items-center">Sign Up <i className="fa fa-arrow-right px-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* map section */}
                <div className="map-section mb-5">
                    <div className="container">
                        <div className="map-head d-flex text-center justify-content-center mb-4">
                            <h4 className="font-weight-semibold w-75 map-title">Clafiya is currently operating in Nigeria with plans to scale across the African continent.</h4>
                        </div>
                        <div>
                            <img src="./img/indexImg/world_map.svg" alt="map of the world" />
                        </div>

                    </div>
                </div>

                <div className="dots map">
                    <img src="./img/indexImg/dots-background-1 5map.svg" alt="" />
                </div>

                {/* sponsors */}
                <div className="mb-5 mt-4">
                    <div className="container justify-content-center packages">
                        <div>
                            <h3 className="text-color-dark font-weight-semibold mb-2 text-md-left ">
                                Meet Our Sponsors and Partners
                        </h3>
                            <div className="rectangle d-inline-block mb-4"></div>
                        </div>
                        <div className="sponsor-grid mb-5">
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Novartis Foundation Logo  1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Aws logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Inspired Minds Logo  1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Acumen Academy Logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Women in Global Health logo  1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Citi Ventures logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Ted Leonsis logo 1.svg" alt="" />
                            </div>

                        </div>
                        <div className="sponsor-grid mb-5">
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/NSF Corps Logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Georgetown University Logo  1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Future founders logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/twilio logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Rockerfeller Foundation logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Berkely Skydeck logo 1.svg" alt="" />
                            </div>
                            <div className="sponsor-img">
                                <img src="./img/indexImg/sponsors/Anambra Ministry of Health Logo  1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


Home.layout = PartialLayout;
export default Home;