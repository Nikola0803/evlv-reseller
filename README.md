# EVLV Partner Network

Standalone recruiting, onboarding, microsite-template, and partner-command experience for approved EVLV partners.

## Local development

```bash
npm install
npm run dev
```

This repository is intentionally separate from the EVLV storefront.

## CRM catalogue connection

Copy `.env.example` to `.env.local` and provide the server-only EVLV store API key. The partner app requests `/api/store/products` from the existing CRM and exposes only public retail price, availability, and documentation data through its same-origin `/api/catalog` route. The CRM key and private partner pricing never reach the browser.

If the CRM is temporarily unavailable, the maintained local catalogue remains visible. Once CRM credentials are configured, SKUs missing from the authoritative CRM feed are marked unavailable rather than kept purchasable from stale fallback data.
