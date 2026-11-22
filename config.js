window.ECOPARTS_CONFIG = {
  whatsappNumber: "905443540475",
  bankName: "",
  accountHolder: "",
  iban: "",
  currency: "TRY"
};

// Apply the public storefront brand after the page markup is ready.
document.addEventListener('DOMContentLoaded', () => {
  const brandMarkup = '<span class="brand-mark">G</span><span>GKC<span class="brand-accent">YEDEKPARÇA</span><small>OTO YEDEK PARÇA</small></span>';
  document.querySelectorAll('.brand').forEach(brand => {
    brand.innerHTML = brandMarkup;
    brand.setAttribute('aria-label', 'GKC Yedek Parça ana sayfa');
  });
  document.title = 'GKC Yedek Parça | Oto Yedek Parça';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = 'GKC Yedek Parça. Aracınıza uygun parçaları bulun ve WhatsApp üzerinden sipariş verin.';
  const productEyebrow = document.querySelector('.products-section .eyebrow');
  if (productEyebrow) productEyebrow.textContent = 'GKC YEDEK PARÇA SEÇKİSİ';
  const artLabel = document.querySelector('.art-label');
  if (artLabel) artLabel.innerHTML = 'GKC YEDEK<br><small>OTO YEDEK PARÇA</small>';
  const footer = document.querySelector('footer p');
  if (footer) footer.innerHTML = '© <span id="year">' + new Date().getFullYear() + '</span> GKC Yedek Parça. Tüm hakları saklıdır.';
});

// Ensure WhatsApp order text uses the shop's current public name.
const ecopartsOriginalOpen = window.open;
window.open = function(url, ...args) {
  if (typeof url === 'string' && url.includes('wa.me/')) {
    try {
      const parsed = new URL(url);
      const message = parsed.searchParams.get('text');
      if (message) parsed.searchParams.set('text', message.replace(/Ecoparts/gi, 'GKC Yedek Parça'));
      url = parsed.toString();
    } catch (_) {}
  }
  return ecopartsOriginalOpen.call(window, url, ...args);
};
