const CONTACT_EMAIL = 'islava.adm@gmail.com'

export interface ContactFormPayload {
  name: string
  email: string
  phone: string
  message: string
  subject: string
}

function buildMailtoUrl(payload: ContactFormPayload): string {
  const body = [
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    `Telefone: ${payload.phone}`,
    '',
    'Mensagem:',
    payload.message,
  ].join('\n')

  const params = new URLSearchParams({
    subject: payload.subject,
    body,
    cc: payload.email,
  })

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export async function sendContactEmail(payload: ContactFormPayload): Promise<'sent' | 'mailto'> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Nome: payload.name,
        Email: payload.email,
        Telefone: payload.phone,
        Mensagem: payload.message,
        _subject: payload.subject,
        _replyto: payload.email,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    if (!response.ok) {
      throw new Error('Contact form submission failed')
    }

    const result = (await response.json()) as { success?: string }
    if (result.success !== 'true') {
      throw new Error('Contact form submission rejected')
    }

    return 'sent'
  } catch {
    window.location.href = buildMailtoUrl(payload)
    return 'mailto'
  }
}
