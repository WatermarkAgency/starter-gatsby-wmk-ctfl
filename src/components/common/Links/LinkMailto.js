import React from 'react'
import PropTypes from 'prop-types'

const MailTo = props => (
    <a className={props.className} id={props.id} href={"mailto:"+props.mailto}>{props.mailto}</a>
)

export default MailTo

MailTo.propTypes = {
    mailto: PropTypes.string.isRequired
}

