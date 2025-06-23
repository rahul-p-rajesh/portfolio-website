import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaJava,
  FaAngular,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiWebpack,
  SiBabel,
  SiSpringboot,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiJenkins,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

type TechItem = {
  key: string;
  name: string;
  icon: IconType;
  color: string;
};

type TechSection = {
  key: string;
  title?: string;
  items: TechItem[];
};

type TechCategory = {
  key: string;
  title: string;
  showTitle?: boolean;
  sections: TechSection[];
};

const techStack: TechCategory[] = [
  {
    key: "languages",
    title: "Languages",
    showTitle: false,
    sections: [
      {
        key: "languages-main",
        items: [
          {
            key: "java",
            name: "Java",
            icon: FaJava,
            color: "text-orange-300",
          },
          {
            key: "javascript",
            name: "JavaScript",
            icon: SiJavascript,
            color: "text-yellow-300",
          },
          {
            key: "typescript",
            name: "TypeScript",
            icon: SiTypescript,
            color: "text-blue-300",
          },
        ],
      },
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks / Libraries",
    sections: [
      {
        key: "frontend-frameworks",
        title: "Frontend",
        items: [
          {
            key: "react",
            name: "React.js",
            icon: FaReact,
            color: "text-cyan-300",
          },
          {
            key: "nextjs",
            name: "Next.js",
            icon: SiNextdotjs,
            color: "text-gray-200",
          },
        ],
      },
      {
        key: "backend-frameworks",
        title: "Backend",
        items: [
          {
            key: "springboot",
            name: "Spring Boot",
            icon: SiSpringboot,
            color: "text-green-400",
          },
          {
            key: "nestjs",
            name: "NestJS",
            icon: SiNestjs,
            color: "text-red-400",
          },
          {
            key: "express",
            name: "Express.js",
            icon: SiExpress,
            color: "text-gray-300",
          },
        ],
      },
    ],
  },
  {
    key: "databases",
    title: "Databases",
    sections: [
      {
        key: "relational-databases",
        title: "Relational",
        items: [
          {
            key: "mysql",
            name: "MySQL",
            icon: SiMysql,
            color: "text-yellow-400",
          },
          {
            key: "postgresql",
            name: "PostgreSQL",
            icon: SiPostgresql,
            color: "text-blue-400",
          },
        ],
      },
      {
        key: "nosql-databases",
        title: "NoSQL",
        items: [
          {
            key: "mongodb",
            name: "MongoDB",
            icon: SiMongodb,
            color: "text-green-400",
          },
          {
            key: "redis",
            name: "Redis",
            icon: SiRedis,
            color: "text-red-400",
          },
        ],
      },
    ],
  },
  {
    key: "devops-cloud",
    title: "DevOps & Cloud",
    sections: [
      {
        key: "cloud-platforms",
        title: "Cloud Platforms",
        items: [
          {
            key: "aws",
            name: "AWS (EC2, S3, RDS)",
            icon: FaAws,
            color: "text-orange-400",
          },
        ],
      },
      {
        key: "cicd",
        title: "CI/CD",
        items: [
          {
            key: "github-actions",
            name: "GitHub Actions",
            icon: FaGithub,
            color: "text-gray-300",
          },
          {
            key: "jenkins",
            name: "Jenkins",
            icon: SiJenkins,
            color: "text-red-400",
          },
        ],
      },
    ],
  },
];

export default function Tech() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto lg:mx-48">
        <h2 className="text-4xl font-light mb-12 text-left">Tech Stack</h2>
        {techStack.map((category) => (
          <div key={category.key} className="mb-10">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              {category.title}
            </h3>
            <div
              className={`grid gap-6 ${
                category.sections.length > 2
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              }`}
            >
              {category.sections.map((section) => (
                <div key={section.key} className="bg-[#1a2b2e] rounded-lg p-5">
                  <h4 className="font-medium mb-3 text-gray-200">
                    {section.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {section.items.map(({ name, key, icon: Icon, color }) => (
                      <span
                        key={key}
                        className={`flex items-center gap-2 ${color}`}
                      >
                        <Icon /> {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
