import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative;
    margin-left: ${({ theme }) => theme.spacingS};
    z-index: 1;

    article {
      margin: 0;
      width: 20.5rem; 
      border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`}; 
    }
    
    h2 {
      padding-top: ${({ theme }) => theme.spacingM};
      color: ${({ theme }) => theme.offWhite}; 
    }

    h6 {
      margin: ${({ theme }) => `${theme.spacingL} 0 ${theme.spacingS}`};  
      color: ${({ theme }) => theme.primaryColorLight}; 
      text-transform: uppercase;
    }
  
    .tags-list {
      display: flex;
      justify-content: space-between;
      width: 108%;
      list-style-type: none;
  
      li {
        flex-grow: 1;
  
        &:last-child {
          margin-left: ${({ theme }) => theme.spacingS};  
        }
  
        span {
          width: 100%;
        }
      }
    }

    .post-list-item {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
    }

    .blogpost__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      padding: ${({ theme }) => `0 ${theme.spacingS}`};  
    }

    .blogpost__footer {
      padding: 0;
    }
  `
}

export const StyledLarge = () => {
  return css`
    article {
      background-image: ${({ theme }) => theme.primaryGradient};  
      color: ${({ theme }) => theme.primaryColorDark}; 
    } 
  `
}

export const StyledSmall = () => {
  return css`
    article {
      max-height: 16rem; 
      background-image: ${({ theme }) => theme.secondaryGradient};  
      color: ${({ theme }) => theme.primaryColorDark}; 
    } 

    header {
      margin: 0;
    }

    h6 {
      margin: ${({ theme }) => `${theme.spacingS} 0 ${theme.spacingS}`};  
    }

    h2 {
      margin: ${({ theme }) => `${theme.spacingXS} 0`};  
    }
  `
}
