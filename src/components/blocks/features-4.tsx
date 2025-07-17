import { Layers, TrendingUp, Sparkles, Users, Handshake, Target } from 'lucide-react'

export function Features4() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Layers className="size-4" />
                            <h3 className="text-sm font-medium">360° Service Portfolio</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">From design to deployment, we handle it all. Get access to a wide range of services under one roof.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-4" />
                            <h3 className="text-sm font-medium">Scalable Solutions</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We build for your future. Whether you’re a startup or an enterprise, we grow with your business.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Agile + Creative Team</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Our dynamic team blends creativity with data-driven logic to transform business visions into real, innovative results.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">In-House Experts</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">From strategy to delivery, our experienced in-house team handles every detail to ensure excellence.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Handshake className="size-4" />
                            <h3 className="text-sm font-medium">Real-Time Collaboration</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We work with you, keeping you in the loop every step of the project.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Target className="size-4" />
                            <h3 className="text-sm font-medium">Proven Results</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Clients trust us because their results speak for themselves. Our work delivers value.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
