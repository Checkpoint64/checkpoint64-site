<script>
  import { onMount } from 'svelte'

  // Initial theme is set pre-paint by the head bootstrap script (avoids
  // flash-of-wrong-theme); this only handles clicks and keeps icon/aria in sync.
  let btn
  onMount(() => {
    const icon = btn.querySelector('[data-theme-icon]')
    const apply = (theme) => {
      if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light')
      else document.documentElement.removeAttribute('data-theme')
      if (icon) icon.textContent = theme === 'light' ? '☾' : '☀'
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode')
    }
    const current = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    apply(current())
    const onClick = () => {
      const next = current() === 'light' ? 'dark' : 'light'
      apply(next)
      try { localStorage.setItem('cp64-theme', next) } catch (e) { /* storage blocked */ }
    }
    btn.addEventListener('click', onClick)
    return () => btn.removeEventListener('click', onClick)
  })
</script>

<button bind:this={btn} class="theme-toggle" data-theme-toggle type="button" aria-label="Switch to light mode" title="Toggle theme">
  <span class="theme-toggle-icon" data-theme-icon aria-hidden="true">☀</span>
</button>
