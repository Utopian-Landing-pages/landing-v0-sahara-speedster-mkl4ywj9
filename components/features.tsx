import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Sparkles, Mountain } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'Magical Abilities',
      description: 'Harness the power of ancient Arabic mythology with unique magical abilities and spells.',
    },
    {
      icon: Zap,
      title: 'Fast-Paced Platforming',
      description: 'Experience thrilling, responsive movement and lightning-fast gameplay mechanics.',
    },
    {
      icon: Mountain,
      title: 'Stunning Environments',
      description: 'Explore beautifully crafted desert landscapes and mystical Arabian architecture.',
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {'Features That Define The Adventure'}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            {'Discover what makes Sahara Speedster an unforgettable gaming experience'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
