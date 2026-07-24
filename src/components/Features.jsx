import { FolderKanban, Users, BarChart3 } from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features" id="features">

      <div className="section-title">
        <span>FEATURES</span>

        <h2>Everything You Need</h2>

        <p>
          Powerful features designed to help teams stay organized,
          collaborate efficiently, and deliver projects faster.
        </p>
      </div>

      <div className="features-grid">

        <FeatureCard
          icon={<FolderKanban size={40} />}
          title="Project Management"
          description="Create projects, organize tasks, and track progress with an intuitive interface."
        />

        <FeatureCard
          icon={<Users size={40} />}
          title="Team Collaboration"
          description="Assign tasks, communicate with teammates, and stay connected in real time."
        />

        <FeatureCard
          icon={<BarChart3 size={40} />}
          title="Analytics Dashboard"
          description="Monitor team productivity with reports and performance insights."
        />

      </div>

    </section>
  );
}

export default Features;