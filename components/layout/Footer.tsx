import { Container } from "./Container";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-background">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <span className="font-display font-bold text-white text-lg">
              Srivathsa&apos;s Pitch
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building the Digital Backbone for a multi-brand, multi-country food platform.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@daddyscloudkitchen.com"
                className="block text-text-secondary hover:text-white text-sm transition-colors break-all sm:break-normal"
              >
                srivathsa.works@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/srivathsa252/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-white text-sm transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Expansion */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Global Roadmap
            </h4>
            <p className="text-text-secondary text-sm">
              <span className="text-accent">UK</span>
              {" → "}
              <span className="text-white">India</span>
              {" → "}
              <span className="text-text-secondary">Gulf → AU → US → Canada</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-text-tertiary text-xs text-center sm:text-left">
            © 2026 Srivathsa's Pitch Ltd. All rights reserved.
          </p>
          <p className="text-text-tertiary text-xs text-center sm:text-left">
            Built with precision. Designed for scale.
          </p>
        </div>
      </Container>
    </footer>
  );
}
