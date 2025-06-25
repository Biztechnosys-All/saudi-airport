import { Text, RichText as JssRichText, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

const Banner = (props: any) => {
    return (
        <>
            <div className="container-fluid p-0 mb-6 wow fadeIn home-banner" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <JssImage field={props.fields.BannerImage} className="w-100" alt="home-banner" />
                            <div className="carousel-caption container">
                                <span>
                                    <Text field={props.fields.Caption} />
                                </span>
                                <h1 className="display-1 animated zoomIn">
                                    <Text field={props.fields.Title} />
                                </h1>
                                <p>
                                    <Text field={props.fields.SubTitle} />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flight-details">
                    <div className="container">
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="departing-tab" data-bs-toggle="tab" data-bs-target="#departing" type="button" role="tab" aria-controls="departing" aria-selected="true">
                                <span>
                                    <JssImage field={props.fields.TabImage1} alt="Departing" />
                                </span>
                                <Text field={props.fields.TabTitle1} />
                            </button>
                            <button className="nav-link" id="arriving-tab" data-bs-toggle="tab" data-bs-target="#arriving" type="button" role="tab" aria-controls="arriving" aria-selected="false">
                                <span>
                                    <JssImage field={props.fields.TabImage2} alt="Arriving" />
                                </span>
                                <Text field={props.fields.TabTitle2} />
                            </button>
                            <button className="nav-link" id="make-a-booking-tab" data-bs-toggle="tab" data-bs-target="#make-a-booking" type="button" role="tab" aria-controls="make-a-booking" aria-selected="false">
                                <span>
                                    <JssImage field={props.fields.TabImage3} alt="Make a Booking" />
                                </span>
                                <Text field={props.fields.TabTitle3} />
                            </button>
                        </div>

                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade active show" id="departing" role="tabpanel" aria-labelledby="departing-tab">
                                <div className="booking-info">
                                    <JssRichText field={props.fields.TabDescrition1} />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="arriving" role="tabpanel" aria-labelledby="arriving-tab">
                                <div className="booking-info">
                                    <JssRichText field={props.fields.TabDescription2} />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="make-a-booking" role="tabpanel" aria-labelledby="make-a-booking-tab">
                                <div className="booking-info">
                                    <JssRichText field={props.fields.TabDescription3} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner;