import { Text, Link as JssLink, NextImage as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

const Terminal = (props: any) => {
    const terminalList = props.fields.TerminalList;
    return (
        <>
            <section className="our-terminals">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <Text field={props.fields.TerminalTitle} />
                            </h2>
                            <p className="my-3">
                                <Text field={props.fields.TerminalSubTitle} />
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {terminalList &&
                            terminalList.map((item: any, index: any) => (
                                <div className="col-md-4" key={index}>
                                    <div>
                                        <JssImage field={item.fields.TerminalImage} className="w-100 terminal-img" alt="" />
                                    </div>
                                    <div className="my-3">
                                        <h3>
                                            <Text field={item.fields.Title} />
                                        </h3>
                                        <p>
                                            <Text field={item.fields.TerminalDescription} />
                                        </p>
                                        <JssLink field={item.fields.TerminalButtonLink} style={{textDecoration: "none"}} className='secondary-button' />
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

export default Terminal;