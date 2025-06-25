import { Text, Link as JssLink, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';


export default function Footer(props: any): JSX.Element {
    const footerMenu1 = props.fields.FooterMenuList1;
    const footerMenu2 = props.fields.FooterMenuList2;
    const footerMenu3 = props.fields.FooterMenuList3;
    const waitTimeList = props.fields.WaitTimeList;
    return (
        <>
            <div>
                {/* <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{ marginTop: '90px' }}>
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <a href="index.html" className="navbar-brand">
                                    <h1 className="mt-n2 text-uppercase text-white">
                                        <i className="fas fa-book-reader mr-3"></i>
                                        <Text field={props.fields.Title} />
                                    </h1>
                                </a>
                                <p className="m-0">
                                    <Text field={props.fields.Description} />
                                </p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h3 className="text-white mb-4">Newsletter</h3>
                                <div className="w-100">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Your Email Address" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary px-4">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">
                                    <Text field={props.fields.SubTitle} />
                                </h3>
                                <p>
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <Text field={props.fields.Address} /> </p>
                                <p>
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    <Text field={props.fields.PhoneNo} /> </p>
                                <p>
                                    <i className="fas fa-envelope mr-2"></i>
                                    <Text field={props.fields.Email} />
                                </p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-twitter"></i></a>
                                    <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-facebook-f"></i></a>
                                    <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-linkedin-in"></i></a>
                                    <a className="text-white" href="#"><i className="fab fa-2x fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                                <JssRichText field={props.fields.CopyRight1} />
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <JssRichText field={props.fields.CopyRight2} />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <footer className="container-fluid foote" data-wow-delay="0.1s">
                <div className="row gy-4 text-center text-md-start king-footer-info">
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href="#" target="_blank">
                            <div className="info-box">
                                <JssImage field={props.fields.InfoImage1} alt="Location" />
                            </div>
                            <span className="info-text">
                                <Text field={props.fields.Info1} />
                            </span>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <a href="#" target="_blank">
                            <div className="info-box">
                                <JssImage field={props.fields.InfoImage2} alt="Mail" />
                            </div>
                            <span className="info-text">i
                                <Text field={props.fields.Info2} />
                            </span>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <a href="#" target="_blank">
                            <div className="info-box">
                                <JssImage field={props.fields.InfoImage3} alt="Commercial-Mail" />
                            </div>
                            <span className="info-text">
                                <Text field={props.fields.Info3} />
                            </span>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <a href="#" target="_blank">
                            <div className="info-box">
                                <JssImage field={props.fields.InfoImage4} alt="Phone" />
                            </div>
                            <span className="info-text">
                                <Text field={props.fields.Info4} />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="king-footer-info">
                                <JssImage field={props.fields.FooterLogo} className="kifa-logo" alt="kifa-logo" />
                                <p className='mb-3 mt-4 follow-us'>
                                    <Text field={props.fields.SocialMediaTitle} />
                                </p>
                                <div className="d-flex">
                                    <a className="info-box me-2" href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a className="info-box me-2" href="#">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a className="info-box me-2" href="#">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a className="info-box me-2" href="#">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                    <a className="info-box me-2" href="#">
                                        <i className="fa-brands fa-snapchat"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="footer-title">
                                <Text field={props.fields.FooterMenu1} className="footer-title" />
                            </p>
                            <div className="footer-naviations">
                                <ul>
                                    {footerMenu1 &&
                                        footerMenu1.map((item: any, index: any) => (
                                            <li key={index} >
                                                <JssLink field={item.fields.FooterMenu} className='footer-link' />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <p className="footer-title">
                                <Text field={props.fields.FooterMenu2} className="footer-title" />
                            </p>
                            <div className="footer-naviations">
                                <ul>
                                    {footerMenu2 &&
                                        footerMenu2.map((item: any, index: any) => (
                                            <li key={index} >
                                                <JssLink field={item.fields.FooterMenu} className='footer-link' />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-naviations">
                                <ul>
                                    {footerMenu3 &&
                                        footerMenu3.map((item: any, index: any) => (
                                            <li key={index}>
                                                <JssLink field={item.fields.FooterMenu} className='footer-link' />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row copy-right-privacy">
                    <div className="footer-flight">
                        <JssImage field={props.fields.FooterFlight} alt="Footer-Flight" />
                    </div>
                    <div className="copy-privacy-text">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="footer-link">
                                    <Text field={props.fields.FooterLinkTitle} />
                                </p>
                            </div>
                            <div className="col-md-6 text-center text-md-end gap-3">
                                <div>
                                    <ul className="privacy-conditions">
                                        <li>
                                            <a href="#" className="footer-link">
                                                <Text field={props.fields.FooterLink1} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer-link">
                                                <Text field={props.fields.FooterLink2} />

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer-link">
                                                <Text field={props.fields.FooterLink3} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid estimated-security py-4">
                <div className="close-btn"></div>
                <div className="row">
                    <div className="col-md-3 text-center text-md-start px-0 divider">
                        <div className="d-flex align-items-center">
                            <div className="dot-container">
                                <div className="dot-icon"></div>
                            </div>
                            <p className="estimated-text mb-0">
                                <Text field={props.fields.CopyrightTitle} />

                            </p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
                            {waitTimeList &&
                                waitTimeList.map((item: any, index: any) => (
                                    <div key={index}>
                                        <p className="wait-times-text mb-0">
                                            <span className="wait-times-title">
                                                <Text field={item.fields.Title} /> :
                                            </span>
                                            <Text field={item.fields.SubTitle} />
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row my-3">
                            <div className="col-md-4">
                                <a href="#" className=" immigration-wait-text d-flex align-items-center" >
                                    <Text field={props.fields.CopyrightSubTitle} />
                                    <i className="ms-3 fa-solid fa-angle-right">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}