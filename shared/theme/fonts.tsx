import { Global as GlobalStyles } from "@emotion/react"

export default function Fonts() {
  return (
    <GlobalStyles
      styles={`
    @font-face {
      font-family: 'Ivy Presto';
      src: url('/assets/fonts/IvyPrestoRegular.woff2') format('woff2'),
          url('/assets/fonts/IvyPrestoRegular.woff') format('woff'),
          url('/assets/fonts/IvyPrestoRegular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'SofiaPro';
      src: url('/assets/fonts/SofiaPro-Light.woff2') format('woff2'),
          url('/assets/fonts/SofiaPro-Light.woff') format('woff'),
          url('/assets/fonts/SofiaPro-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Ivy Presto';
      src: url('/assets/fonts/IvyPrestoLight.woff2') format('woff2'),
          url('/assets/fonts/IvyPrestoLight.woff') format('woff'),
          url('/assets/fonts/IvyPrestoLight.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'SofiaPro';
      src: url('/assets/fonts/SofiaPro-Regular.woff2') format('woff2'),
          url('/assets/fonts/SofiaPro-Regular.woff') format('woff'),
          url('/assets/fonts/SofiaPro-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Ivy Presto';
      src: url('/assets/fonts/IvyPrestoBold.woff2') format('woff2'),
          url('/assets/fonts/IvyPrestoBold.woff') format('woff'),
          url('/assets/fonts/IvyPrestoBold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Ivy Presto';
      src: url('/assets/fonts/IvyPrestoThin.woff2') format('woff2'),
          url('/assets/fonts/IvyPrestoThin.woff') format('woff'),
          url('/assets/fonts/IvyPrestoThin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
  }
    `}
    />
  )
}
