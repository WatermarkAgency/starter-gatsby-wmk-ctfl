import React from 'react'
import PropTypes from 'prop-types'

const Tel = props => (
    <a className={props.className} id={props.id} href={'tel:'+props.tel}>{props.tel}</a>
)

export default Tel

Tel.propTypes = {
    tel: PropTypes.string.isRequired
}