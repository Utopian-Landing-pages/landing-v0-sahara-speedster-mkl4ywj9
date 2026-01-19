import { Button } from '@/components/ui/button'
import { Stamp as Steam, Bell } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-12 md:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
          
          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Bell className="h-4 w-4" />
              <span>{'Pre-Order Coming Soon'}</span>
            </div>
            
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {'Ready to Begin Your Adventure?'}
            </h2>
            
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl mx-auto">
              {'Wishlist on Steam and be the first to get notified when this game drops. Join the community and share your excitement!'}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-14 px-10">
                <Steam className="mr-2 h-5 w-5" />
                {'Wishlist on Steam'}
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-10 bg-transparent">
                {'Join Discord Community'}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              {'Over 10,000+ gamers already wishlisted • Release date TBA'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
