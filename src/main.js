// Browser entry point. The page body is pre-rendered into #app at build time
// by the prerender plugin in vite.config.js (using src/render.js), so this
// module only owns CSS + interactivity. Do NOT overwrite #app.innerHTML here.

import './style.css'

// Animated auto-backup ticker on the "How it works" step
const autoEl = document.querySelector('[data-step-auto]')
if (autoEl) {
  const labels = ['WATCHING…', 'CHANGES DETECTED', 'UPLOADING…', 'SYNCED']
  const colors = ['#3df0ff', '#ffe0a8', '#a07cff', '#c8efb8']
  const bars = autoEl.querySelectorAll('.bar')
  const labelEl = autoEl.querySelector('[data-auto-label]')
  let tick = 0
  const apply = () => {
    bars.forEach((b, i) => b.classList.toggle('on', i <= tick))
    labelEl.textContent = labels[tick]
    labelEl.style.background = colors[tick]
  }
  apply()
  setInterval(() => { tick = (tick + 1) % labels.length; apply() }, 1100)
}

// Handle form submissions to backend API
document.querySelectorAll('[data-notify-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const emailInput = form.querySelector('input[type="email"]')
    const submitBtn = form.querySelector('button[type="submit"]')
    const email = emailInput.value.trim()

    if (!email) {
      alert('Please enter your email address')
      return
    }

    // Disable form while submitting
    emailInput.disabled = true
    submitBtn.disabled = true
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<span>SENDING...</span>'

    try {
      const response = await fetch('https://app.checkpoint64.com/public/api/waitingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
      })

      if (response.ok) {
        // Success
        submitBtn.innerHTML = '<span>✓ ADDED</span>'
        emailInput.value = ''
        setTimeout(() => {
          submitBtn.innerHTML = originalText
        }, 3000)
      } else {
        // Server error
        throw new Error(`Server error: ${response.status}`)
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error)
      alert('Failed to join the waiting list. Please try again later.')
      submitBtn.innerHTML = originalText
    } finally {
      // Re-enable form
      emailInput.disabled = false
      submitBtn.disabled = false
    }
  })
})
