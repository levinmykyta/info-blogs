import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { baseStyling, fontFamily, fontSize } from './styles'

const StyledHeading = styled.div`
  ${({ as }) => {
    return css`
      font-family: ${fontFamily(as)}
      font-size: ${fontSize(as)}
    `
  }}
`

const Heading = ({ as = 'h1', ...props }) => (
  <StyledHeading as={as} {...props} />
)

export default Heading

Heading.propTypes = {
  as: PropTypes.string.isRequired
}
