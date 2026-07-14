# AMR WEBSITE V1
## Naming Convention

Status: LOCKED V1
Last Updated: July 2026

---

# 1. Folder Naming

Use PascalCase for Components folders.

Examples:

Components/
UI/
About/
Services/
Industries/
Contact/

Use lowercase for App Router folders.

Examples:

app/about
app/services
app/contact
app/industries

---

# 2. React Components

Always use PascalCase.

Examples:

Header.tsx
Footer.tsx
Hero.tsx
CTA.tsx
Workflow.tsx

WhoWeAre.tsx
WhatWeDo.tsx
MissionVision.tsx

---

# 3. CSS Modules

CSS Modules must follow the component name.

Examples:

Header.module.css
Footer.module.css
MissionVision.module.css

Never use:

header.module.css
footer.module.css

---

# 4. Data Files

Files inside /lib use camelCase / lowercase.

Examples:

about.ts
company.ts
services.ts
workflow.ts
navigation.ts

---

# 5. App Router

Every page lives inside app/.

Examples:

app/page.tsx

app/about/page.tsx

app/services/page.tsx

app/contact/page.tsx

app/industries/page.tsx

Never place page.tsx inside Components.

---

# 6. Barrel Files

Always use:

index.ts

Never use:

Index.ts

---

# 7. Images

Use kebab-case.

Examples:

amr-logo.png

hero-image.jpg

supplier-photo.webp

---

# 8. Constants

Use camelCase.

Examples:

company

services

workflow

aboutHero

---

# 9. Components Responsibility

app/
Routing only.

Components/
UI Components.

lib/
Static Data.

public/
Assets.

docs/
Project Documentation.

---

This convention is LOCKED for Website V1.