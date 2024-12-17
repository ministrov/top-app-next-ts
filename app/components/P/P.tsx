import React from 'react';
import { ParagraphProps } from './P.props';

const Paragraph = ({ text }: ParagraphProps) => {
    return (
        <p>{text}</p>
    )
}

export default Paragraph;