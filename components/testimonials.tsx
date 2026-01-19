import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Rivera',
      username: 'Gamer1',
      content: "I can't wait to play this game! The art style is amazing and the mythology theme is so unique.",
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      username: 'Gamer2',
      content: 'This game sounds so unique and fun. Finally, a platformer with cultural depth!',
      rating: 5,
    },
    {
      name: 'Jordan Lee',
      username: 'Gamer3',
      content: 'The magical abilities look incredible. Already wishlisted and counting down the days!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {'What Gamers Are Saying'}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            {'Join thousands of excited players waiting for release'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/40 bg-card">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  {`"${testimonial.content}"`}
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <Avatar>
                    <AvatarFallback className="bg-accent/10 text-accent">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{'@' + testimonial.username}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
