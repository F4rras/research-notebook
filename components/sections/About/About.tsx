import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import InterestBadge from "./InterestBadge";
import CurrentCard from "./CurrentCard";

import { interests, current } from "@/data/about";

export default function About() {
    return (
        <section className="py-28">
            <Container>

                <SectionTitle
                    title="About Me"
                    description="The person behind the Research Notebook."
                />

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <div className="flex justify-center">

                        <div
                            className="
                h-96
                w-80
                rounded-3xl
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/10
                to-blue-500/5
                shadow-[0_0_80px_rgba(0,255,255,0.08)]
              "
                        />

                    </div>

                    {/* Right */}

                    <div>

                        <h3 className="text-4xl font-bold">
                            Hi, I'm Farras.
                        </h3>

                        <p className="mt-3 text-cyan-300">
                            Student • Research Enthusiast • Builder
                        </p>

                        <p className="mt-8 leading-8 text-gray-400">
                            I'm passionate about Mathematics,
                            Theoretical Physics, Artificial Intelligence,
                            and Engineering.
                        </p>

                        <p className="mt-5 leading-8 text-gray-400">
                            This Research Notebook is where I document
                            ideas, experiments, failures, and discoveries
                            throughout my learning journey.
                        </p>

                        <div className="mt-10">
                            <h4 className="mb-4 text-xl font-semibold">
                                Research Interests
                            </h4>

                            <div className="flex flex-wrap gap-3">
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

                <div className="mt-24">

                    <h3 className="mb-8 text-3xl font-bold">
                        Currently
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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
