import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

const OurServices = (props: any) => {
    const serviceList = props.fields.ServiceList;
    return (
        <>
            <section className="our-service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2> <Text field={props.fields.ServiceTitle} /> </h2>
                            <p className="my-3">
                                <Text field={props.fields.ServiceDescription} />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="">
                            {/* Swiper */}
                            <div className="swiper our-services-slider relative">
                                <div className="swiper-wrapper">
                                    {serviceList &&
                                        serviceList.map((item: any, index: any) => {
                                            const serviceClass = item.fields?.ServiceClass?.value
                                            return (
                                                <div className="swiper-slide" key={index}>
                                                    <div className={`our-services-card ${serviceClass}`}>
                                                        <div className="services-card-contents">
                                                            <h3 className="text-xl font-bold">
                                                                <Text field={item.fields.Title} />
                                                            </h3>
                                                            <p className="text-sm mb-4">
                                                                <Text field={item.fields.SubTitle} />
                                                            </p>
                                                            <a href="#" style={{textDecoration: "none"}} className="secondary-button">
                                                                <Text field={item.fields.ButtonText} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* Arrows */}
                                <div>
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices;