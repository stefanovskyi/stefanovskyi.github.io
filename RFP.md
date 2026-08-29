# Request for Proposal (RFP)

## Cross-Platform Mobile Contact Hub & Contextual QR Display System

## 1. Project Overview & Objective

The goal is to design and develop a high-performance, self-hosted web system split across two subdomains to streamline professional networking.

1. **`qr.stefanovskyi.com` (The Presenter):** A highly accessible, high-contrast digital canvas displaying a single, crisp QR code. This page acts as a persistent browser utility on the owner's phone for fast sharing during events.
2. **`contact.stefanovskyi.com` (The Destination):** A mobile-first, lightweight landing hub serving as a modern digital business card. It presents clear, thumb-friendly actions to direct visitors to external professional channels.

A key feature is the system's ability to seamlessly adapt the user experience based on the specific networking context (e.g., specific tech conferences or user groups) via subtle query handling.

---

## 2. Product Requirements: `qr.stefanovskyi.com`

This page is primarily a presentation screen optimized for modern mobile browsers to display the system's entry point under various real-world networking conditions (e.g., poor indoor lighting, high screen glare).

### Core Functional Requirements

* **Visual Presentation:** The interface must feature a true black background to blend into mobile screen bezels, featuring a centered, sharp vector QR code sitting on a solid high-contrast white container. This maximizes camera readability across diverse phone models.
* **Fallback Navigation:** If a desktop user visits the subdomain directly or clicks/taps the QR code canvas, the page must act as an active link that redirects the browser straight to the primary contact destination.
* **Contextual Variation Handling:** The system must generate and manage unique QR variants. When a specific variant is scanned, it passes a context tracking string to the destination page. The layout must adapt perfectly to the specific length of these varying payloads without degrading readability.

### Contextual Variations Required

The generation engine must support separate QR code configurations that pass distinct parameters to the destination page for four core scenarios:

| Scenario / Event | Intent & Target Behavior |
| --- | --- |
| **RAISE Summit (Paris)** | Context payload tailored for an international AI and corporate summit. Focuses on strategic AI consulting. |
| **Claude Code Meeting (Wrocław)** | Local developer/agentic engineering context. Highlights engineering depth and multi-agent orchestration. |
| **AWS Summit** | Enterprise cloud context. Highlights cloud infrastructure architectural expertise. |
| **General Purpose** | Clean, agnostic fallback for spontaneous, everyday networking encounters. |

---

## 3. Product Requirements: `contact.stefanovskyi.com`

This page is a lightweight, mobile-first single-page application acting as a personal link aggregator. It must be designed from the ground up for extreme speed on spotty cellular networks (e.g., congested conference halls).

### Core Functional Requirements

* **Biographical Profile:** A clean header block displaying a profile image placeholder, the professional name, and primary technical titles.
* **Thumb-Target Action Grid:** A vertical stack of prominent buttons mapping to core professional networks:
* LinkedIn profile
* Direct email composition target
* Main personal engineering/consulting website
* GitHub profile


* **Contextual Personalization Engine:** The page must read incoming context strings passed from the QR code sub-pages. When a specific context is detected, it should subtly alter the text copy or emphasize specific elements:
* *Example:* Arriving from the **Claude Code Meeting** might highlight the GitHub target or adjust the subtitle bio to focus on agentic systems, whereas arriving from the **RAISE Summit** frames a strategic AI message.



---

## 4. User Experience & Interface (UX/UI) Standards

* **Frictionless Mobile Interaction:** Every button target must offer generous vertical padding to prevent mis-clicks. Tap states must be immediate and highly responsive, providing clear visual feedback on touch down without waiting for link resolution.
* **Typography & Balance:** Design must leverage standard system font stacks (Apple/Android native) to prevent flash-of-unstyled-text delays. The layout must utilize high contrast text against dark modern themes.
* **No External Dependencies:** The product requirements dictate a completely standalone visual output. The presentation layer must load immediately without reliance on heavy UI frameworks or third-party tracking scripts.

---

## 5. Non-Functional Requirements

### Performance & Loading Speed

The landing hub should achieve near-instantaneous load speeds even when throttled on low-tier mobile connections. Keep payload size minimal by avoiding massive asset libraries.

### Device Compatibility

The destination page must render identically across all modern mobile viewports (iOS Safari and Android Chrome engines). The presentation QR code must look completely razor-sharp across varying device pixel densities without edge pixelation.

### Architecture & Portability

The delivery assets must be entirely decoupled from low-level server environments. The output should be ready to deploy straight to lightweight, static hosting platforms (such as AWS S3, GitHub Pages, or Vercel) using your own domain configuration.