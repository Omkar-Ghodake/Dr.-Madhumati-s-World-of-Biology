import { EmailTemplateProps } from '@/types/propTypes'
import * as React from 'react'

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>{}</h1>
  </div>
)
