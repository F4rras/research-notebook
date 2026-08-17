import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import InterestBadge from "./InterestBadge";
import CurrentCard from "./CurrentCard";

import { interests, current } from "@/data/about";

export default function About() {
    return (
        <section className="py-16 sm:py-20 lg:py-28">
            <Container>

                <SectionTitle
                    title="About Me"
                    description="The person behind the Research Notebook."
                />

                <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <div className="flex justify-center">

                        <div
                            className="
                                h-80
                                w-full
                                max-w-xs
                                rounded-3xl
                                border
                                border-cyan-400/20
                                bg-gradient-to-br
                                from-cyan-500/10
                                to-blue-500/5
                                shadow-[0_0_80px_rgba(0,255,255,0.08)]
                                sm:h-96
                                sm:w-80
                            "
                        />

                    </div>

                    {/* Right */}

                    <div>

                        <h3 className="text-3xl font-bold sm:text-4xl">
                            Hi, I'm Farras.
                        </h3>

                        <p className="mt-3 text-sm text-cyan-300 sm:text-base">
                            Student • Research Enthusiast • Builder
                        </p>

                        <p className="mt-6 text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8">
                            I'm passionate about Mathematics,
                            Theoretical Physics, Artificial Intelligence,
                            and Engineering.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                            This Research Notebook is where I document
                            ideas, experiments, failures, and discoveries
                            throughout my learning journey.
                        </p>

                        <div className="mt-8 sm:mt-10">
                            <h4 className="mb-4 text-lg font-semibold sm:text-xl">
                                Research Interests
                            </h4>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {interests.map((item) => (
                                    <InterestBadge
                                        key={item}
                                        label={item}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Current */}

                <div className="mt-16 sm:mt-20 lg:mt-24">

                    <h3 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
                        Currently
                    </h3>

                    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">

                        {current.map((item) => (
                            <CurrentCard
                                key={item.title}
                                icon={item.icon}
                                title={item.title}
                                value={item.value}
                            />
                        ))}

                    </div>

                </div>

            </Container>
        </section>
    );
}
