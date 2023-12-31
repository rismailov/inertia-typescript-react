import { Features } from '@/components/homepage/Features'
import { Button } from '@/components/ui/button'
import HomeLayout from '@/layouts/HomeLayout'
import { ReactNode } from 'react'

export default function Index() {
    return (
        <>
            {/* hero */}
            <div className="py-10 border-b">
                <div className="container flex flex-col">
                    <h2 className="text-center sm:text-left">
                        Inertia Typescript Starter Template
                    </h2>

                    <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-center sm:text-left">
                        This starter template combines Laravel, Inertia,
                        Typescript, React, Tailwind and shadcn/ui library. All
                        preconfigured and ready to take flight.
                    </p>

                    <Button
                        size="lg"
                        className="mt-6 rounded-full self-center sm:self-start"
                        asChild
                    >
                        <a
                            href="https://github.com/rismailov/inertia-typescript-react"
                            target="_blank"
                        >
                            <span>Use Template</span>
                        </a>
                    </Button>
                </div>
            </div>

            {/* features */}
            <Features />
        </>
    )
}

Index.layout = (page: ReactNode) => (
    <HomeLayout metadata={{ title: 'Homepage' }}>{page}</HomeLayout>
)
