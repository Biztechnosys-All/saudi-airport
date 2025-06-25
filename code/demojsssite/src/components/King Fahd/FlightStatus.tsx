import { Text, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

const FlightStatus = (props: any) => {
    return (
        <>
            <section className="flight-status">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <Text field={props.fields.StatusTitle} />
                            </h2>
                            <p className="my-3">
                                <Text field={props.fields.StatusDescription} />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <div className="search-flight-left">
                                <div className="search-flight">
                                    <h3>
                                        <Text field={props.fields.Title} />
                                    </h3>
                                    <div>
                                        {/* search section */}
                                    </div>
                                </div>
                                <div>
                                    <JssImage field={props.fields.StatusImage} className="w-100 my-3" alt="FlightStatus" />
                                </div>
                                <div>
                                    <button type="button" className="my-2 primary-button">
                                        <Text field={props.fields.ButtonTitle} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="w-100 flight-right">
                                <JssImage field={props.fields.FlightImage} className="w-100" alt="flight" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlightStatus;