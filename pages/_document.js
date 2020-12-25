import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { config } from 'config/config'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang={config.locale.split('_')[0]}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {config.googleAnalyticsId
            ? (
              <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${config.googleAnalyticsId}');`
                  }}
                />
              </>
            ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
