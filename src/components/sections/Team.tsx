import { team } from "@/data/team";
import TeamMember from "../cards/TeamMember";
import SectionWrapper from "../wrappers/SectionWrapper";

const Team = () => {
    return ( 
        <SectionWrapper>
            <section className="py-44 grid grid-cols-1 md:grid-cols-2 gap-5 xl:px-80">

                {team.map((member, index) => {
                    return(
                        <TeamMember key={index} image={member.image} names={member.name} position={member.position} />
                    )
                })}

            </section>
        </SectionWrapper>
     );
}
 
export default Team;