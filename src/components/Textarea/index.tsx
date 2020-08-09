import React, { TextareaHTMLAttributes } from 'react';

import { TextAreaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaBlock>
      <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
      </div>
    </TextAreaBlock>
  );
};

export default Textarea;
