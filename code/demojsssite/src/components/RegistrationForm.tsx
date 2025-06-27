 import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
   import React, { useEffect } from 'react';
   import { NextRouter, withRouter } from 'next/router';
   import { sitecoreApiHost, sitecoreApiKey } from 'temp/config';


 
   const RegistrationForm = ({ fields, router }: { fields: any; router: NextRouter }) => {
console.log(fields);
useEffect(() => {
    document.cookie = `__RequestVerificationToken=${fields.ruquestToken}`;
}, [fields]);
     return (
       <div className="form-container">
         <div className="form-wrapper">
       <Form 
         language={router.locale}
         form={fields}
         sitecoreApiHost={''}
         sitecoreApiKey={sitecoreApiKey}
         
         onRedirect={(url) => router.push(url)}
       />
       </div>
       </div>
     );
   };

   export default withRouter(RegistrationForm);	
   