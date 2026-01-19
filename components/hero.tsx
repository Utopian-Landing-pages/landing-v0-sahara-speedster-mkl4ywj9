import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-muted pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent w-fit">
              <Sparkles className="h-4 w-4" />
              <span>{'Now Available for Wishlist'}</span>
            </div>
            
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {'Unleash Your Magic in '}
              <span className="text-primary">{'Sahara Speedster'}</span>
              {'!'}
            </h1>
            
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {'A fast-paced platformer with Arabic character and mythology-based magic. Run, jump, and harness ancient powers through stunning desert landscapes.'}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8">
                {'Wishlist Now!'}
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-transparent">
                {'Watch Trailer'}
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">{'10K+'}</div>
                <div className="text-sm text-muted-foreground">{'Wishlists'}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">{'4.9★'}</div>
                <div className="text-sm text-muted-foreground">{'Pre-Release Rating'}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-border/40 shadow-2xl lg:h-[600px]">
              <Image
                src="/hero-game.jpg"
                alt="Sahara Speedster gameplay showing character with magical abilities"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
