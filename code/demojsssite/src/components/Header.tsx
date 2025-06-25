import { Text, Link as JssLink, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Header = (props: any) => {
    const subMenu1 = props.fields.SubMenuList1;
    const subMenu2 = props.fields.SubMenuList2;
    const subMenu3 = props.fields.SubMenuList3;
    const subMenu4 = props.fields.SubMenuList4;
    const subMenu5 = props.fields.SubMenuList5;
    const subMenu6 = props.fields.SubMenuList6;
    const router = useRouter();
    const { locale, locales, asPath } = router;

    const [isScrolled, setIsScrolled]= useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <div>
                {/* <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-uppercase text-primary">
                            <i className="fas fa-book-reader mr-3"></i>
                            <Text field={props.fields.Title} />
                        </h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            {selectedItems &&
                                selectedItems.map((item: any, index: any) => (
                                    <JssLink key={index} field={item.fields.MenuName} className='nav-item nav-link' />
                                ))
                            }
                        </div>
                        <div style={{ marginRight: "5px" }}>
                            {locales?.map((lng) => (
                                lng !== locale && (
                                    <Link key={lng} href={asPath} locale={lng} style={{ fontSize: "16px" }}>
                                        <button>{lng.toUpperCase()}</button>
                                    </Link>
                                )
                            ))}
                        </div>
                        <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block" style={{ fontSize: "16px" }}>
                            <Text field={props.fields.JoinUs} />
                        </a>
                    </div>
                </nav>
            </div> */}
            </div>

            <div className="container-fluid text-white d-none d-lg-flex wow fadeIn top-header-bar" data-wow-delay="0.1s">
                <div className="container py-3">
                    <div className="d-flex align-items-center">
                        <div className="contry-time-weather">
                            <div className="country-date-time">
                                <div className="cnt-name-time-widget">
                                    <div className="country-timezone">
                                        <p> <Text field={props.fields.CountryName} /> </p>
                                        <span>|</span>
                                    </div>
                                    <div id="time" className="cnt-time">00:00</div>
                                </div>
                                <div className="cnt-date">
                                    <div id="dates" className="cnt-date">Loading...</div>
                                </div>
                            </div>
                            <div className="weather-icon">☀️</div>
                            <div className="weather-widget">
                                <div className="weather-info">
                                    <div className="temperature"> <Text field={props.fields.Temprature} /> </div>
                                    <div className="condition"> <Text field={props.fields.Condition} /> </div>
                                    {/* <div className="location">Riyadh, Saudi Arabia</div> */}
                                </div>
                            </div>
                        </div>

                        <div className="ms-auto d-flex align-items-center top-right">
                            <div className="country-switch">
                                <div className='wrapper' style={{ marginRight: "5px" }}>
                                    {locales?.map((lng) => (
                                        lng !== locale && (
                                            <Link key={lng} href={asPath} locale={lng} style={{ fontSize: "16px" }}>
                                                <label style={{cursor: "pointer"}}>{lng.toUpperCase()}</label>
                                            </Link>
                                        )
                                    ))}
                                </div>
                                {/* <div className="wrapper">                                    
                                    <select id="mounth">
                                        <option value="hide">العربية</option>
                                        <option value="China">China</option>
                                        <option value="UK">UK</option>
                                        <option value="US">US</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className="daco-logo">
                                <JssImage field={props.fields.Logo} alt="Daco" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className={`container-fluid header-top main-menu ${isScrolled ? 'fixed-top shadow-sm' : ''}`}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light p-lg-0">
                        <a href="index.html">
                            <JssImage field={props.fields.KingFahdLogo} alt="King Fahd" />
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu1} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu1 &&
                                            subMenu1.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu2} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu2 &&
                                            subMenu2.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu3} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu3 &&
                                            subMenu3.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu4} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu4 &&
                                            subMenu4.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu5} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu5 &&
                                            subMenu5.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <JssLink field={props.fields.Menu6} className='nav-link dropdown-toggle' data-bs-toggle="dropdown" />
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        {subMenu6 &&
                                            subMenu6.map((item: any, index: any) => (
                                                <JssLink key={index} field={item.fields.MenuName} className='dropdown-item' />
                                            ))
                                        }
                                    </div>
                                </div>
                                <JssLink field={props.fields.Menu7} className='nav-item nav-link last-item' />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header