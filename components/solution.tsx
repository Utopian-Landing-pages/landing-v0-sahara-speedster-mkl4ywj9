import Image from 'next/image'
import { Check } from 'lucide-react'

export default function Solution() {
  const benefits = [
    'Immersive cultural storytelling',
    'Engaging and accessible gameplay',
    'Breathtaking visual aesthetics',
    'Rich mythology-based narrative',
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-border/40 shadow-xl lg:h-[500px]">
            <Image
              src="/gameplay-scene.jpg"
              alt="Beautiful Arabian-themed game environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              {'Why Play Sahara Speedster?'}
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {'Fun Gameplay Meets Cultural Beauty'}
            </h2>
            
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {'This game is a solution for those who enjoy fun gameplay with unique aspects, while also offering a chance to learn and appreciate the beauty that the Arabian culture holds. Experience adventure like never before.'}
            </p>

            <ul className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
