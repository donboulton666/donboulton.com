const handler: ExportedHandler = {
  async fetch(request) {
    const DEFAULT_SECURITY_HEADERS = {
      'Content-Security-Policy': "default-src 'self' www.donboulton.com *.donboulton.com",
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'Permissions-Policy': 'interest-cohort=()',
      'X-XSS-Protection': '0',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp; report-to="default";',
      'Cross-Origin-Opener-Policy': 'same-site; report-to="default";',
      'Cross-Origin-Resource-Policy': 'same-site',
      'Access-Control-Allow-Credentials': 'true',
      "Vary": 'Accept-Encoding',
    }
    const BLOCKED_HEADERS = ['Public-Key-Pins', 'X-Powered-By', 'X-AspNet-Version']

    let response = await fetch(request)
    let newHeaders = new Headers(response.headers)

    const tlsVersion = request.cf.tlsVersion
    console.log(tlsVersion)
    // This sets the headers for HTML responses:
    if (newHeaders.has('Content-Type') && !newHeaders.get('Content-Type').includes('text/html')) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      })
    }

    Object.keys(DEFAULT_SECURITY_HEADERS).map(name => {
      newHeaders.set(name, DEFAULT_SECURITY_HEADERS[name])
    })

    BLOCKED_HEADERS.forEach(name => {
      newHeaders.delete(name)
    })

    if (tlsVersion !== 'TLSv1.2' && tlsVersion !== 'TLSv1.3') {
      return new Response('You need to use TLS version 1.2 or higher.', {
        status: 400,
      })
    } else {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      })
    }
  },
}

export default handler
