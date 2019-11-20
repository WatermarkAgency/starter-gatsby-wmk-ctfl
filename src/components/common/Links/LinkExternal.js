import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = props => (
    <a href={props.to} id={props.id} className={props.className} target={props.target} rel={props.target === '_blank' ? "noopener noreferrer" : ""}>{props.children}</a>
)

export default ExternalLink

ExternalLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    target: PropTypes.string
};

ExternalLink.defaultProps = {
    target: '_blank'
}