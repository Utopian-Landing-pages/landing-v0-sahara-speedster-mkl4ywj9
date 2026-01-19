import { Twitter, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="text-2xl font-bold text-primary">{'Sahara Speedster'}</div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              {'A fast-paced platformer bringing Arabic mythology to life. Experience magical adventures through stunning desert landscapes.'}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{'Quick Links'}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'Features'}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'About'}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'Community'}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{'Legal'}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'Terms of Service'}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {'Press Kit'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>{'© 2024 Sahara Speedster. All rights reserved. Built with passion for gamers worldwide.'}</p>
        </div>
      </div>
    </footer>
  )
}
