import { Text, Link as JssLink, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

const Indoors = (props: any) => {
    const cardList = props.fields.CardList;
    return (
        <>
            <section className="welcome-indoors">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <Text field={props.fields.IndoorTitle} />
                            </h2>
                            <p className="my-3">
                                <Text field={props.fields.IndoorSubTitle} />
                            </p>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mt-2">
                        {cardList &&
                            cardList.map((item: any, index: any) => (
                                <div className="col" key={index}>
                                    <div className="welcome-indoor-card text-center">
                                        <JssLink field={item.fields.CardLink} className='info-box'>
                                            <JssImage field={item.fields.CardImage} alt="" />
                                            <div className="mt-1">
                                                <h3>
                                                    <Text field={item.fields.CardTitle} />
                                                </h3>
                                            </div>
                                        </JssLink>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Indoors;