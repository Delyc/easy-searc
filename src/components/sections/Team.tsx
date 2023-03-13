import { team } from "@/data/team";
import TeamMember from "../cards/TeamMember";
import SectionWrapper from "../wrappers/SectionWrapper";

const Team = () => {
    return (
        <section className="bg-gray-50 py-10 mt-20">
            <SectionWrapper>
                <section className="px-8 py-3 mt-10 flex flex-col items-center gap-5 xl:mx-auto xl:max-w-[80%]">
                    <h2 className="font-bold text-dark-blue text-center text-4xl">Meet the Team</h2>
                    <p className="text-gray-text md:w-3/5 text-center tracking-[0.8px]">ALU third year students who have pledged themselves
                        to deliver good services to the users </p>
                    <section className="grid grid-cols-1 md:grid-cols-2  w-full lg:px-32">
                        {team.map((member, index) => {
                            return (
                                <TeamMember key={index} image={member.image} names={member.name} position={member.position} />
                            )
                        })}
                    </section>
                </section>
            </SectionWrapper>
        </section>
    );
}

export default Team;