import { commonLight } from '../../_styles/new-common'

export default {
  name: 'Progress',
  common: commonLight,
  self (vars) {
    const {
      infoColor,
      successColor,
      warningColor,
      errorColor,
      textColor2,
      progressRailColor,
      fontSize
    } = vars
    return {
      fontSize,
      fontSizeCircle: '28px',
      railColor: progressRailColor,
      railHeight: '10px',
      iconSizeCircle: '36px',
      iconSizeLine: '18px',
      iconColor: infoColor,
      iconColorInfo: infoColor,
      iconColorSuccess: successColor,
      iconColorWarning: warningColor,
      iconColorError: errorColor,
      textColorCircle: textColor2,
      textColorLineInner: 'rgb(255, 255, 255)',
      textColorLineOuter: textColor2,
      fillColor: infoColor,
      fillColorInfo: infoColor,
      fillColorSuccess: successColor,
      fillColorWarning: warningColor,
      fillColorError: errorColor,
      lineBgProcessing:
        'linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)'
    }
  }
}
