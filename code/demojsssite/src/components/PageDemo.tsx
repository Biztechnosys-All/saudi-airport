import React from 'react';
import { ComponentParams, ComponentRendering ,Text,RichText,Field,RichTextField} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields
{
  Title:Field<string>;
  Content: RichTextField;
}

interface Detail1Props {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields:Fields;
}

export const Detail1 = (props: Detail1Props): JSX.Element => {
   return (
    <div className='bg-gray-100 p-6 rounded-xl shadow-md' >
      <h1 className='text-3xl font-bold'>
        <Text field={props.fields.Title}/>
      </h1>
      <div className="component-content">
       <RichText field={props.fields.Content}/>
      </div>
    </div>
  );
};
export default Detail1;