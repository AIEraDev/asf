"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";
import Header from "@/components/header";

// Animation hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
}

// Counter animation component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - startCount) + startCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}

export default function AboutPage() {
  const [missionRef, missionInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [goalRef, goalInView] = useInView();
  const [teamRef, teamInView] = useInView();

  const teamMembers = [
    {
      name: "Kehinde Azeezudeen",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Azeezudeen Sadiq",
      role: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Jayeola Hassan",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Akinola Olayinka",
      role: "Lead Instructor",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Owens Duale",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Bismark Adomaa",
      role: "Student Success Manager",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-200">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">About Us</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  MAL<span className="text-blue-300">HUB</span>
                </h1>
                <p className="text-xl text-blue-100">Let&apos;s Develop</p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image src="/placeholder.svg?height=400&width=400" alt="ASF team member" width={400} height={400} className="w-full h-auto" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Unlocking Innovations and Taking You Steps Beyond the Status Quo</h2>
            <p className="text-lg text-gray-600 leading-relaxed">ASF aims to bridge the gap between the tech industry and the next generation of innovators. We believe that talent is not limited to a particular background or location, and we are committed to providing equal opportunities for learning and growth, regardless of one&apos;s starting point.</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={missionRef} className={`space-y-6 transition-all duration-1000 ${missionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">To create cutting-edge technological programs that empower individuals with the skills and knowledge needed for success in the rapidly evolving tech landscape. Through our comprehensive and innovative learning and growth, preparing to meet their learning and technological advancement needs, we strive to make an impact in the lives of our students.</p>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${missionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image src="/placeholder.svg?height=400&width=600" alt="ASF mission" width={600} height={400} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image src="/placeholder.svg?height=400&width=600" alt="ASF vision" width={600} height={400} className="w-full h-auto" />
              </div>
            </div>
            <div ref={visionRef} className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 delay-300 ${visionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">To become the go-to center for cutting-edge solutions and unmatched expertise. We are shaping the future of technology, empowering individuals and organizations and including, just through engaging. Support and guidance from seasoned professionals in various tech fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div ref={goalRef} className={`text-center mb-12 transition-all duration-1000 ${goalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Goal</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Foster a supportive and inclusive tech community. Create technological opportunities for marginalized groups. Become the go-to platform for training tech leaders.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`rounded-2xl overflow-hidden shadow-xl mb-8 transition-all duration-1000 delay-300 ${goalInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <Image src="/placeholder.svg?height=300&width=800" alt="ASF team celebration" width={800} height={300} className="w-full h-auto" />
            </div>

            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transition-all duration-1000 delay-500 ${goalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <AnimatedCounter end={67} suffix="+" />
                  <p className="text-blue-100 font-medium">Successful Projects</p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={840} suffix="+" />
                  <p className="text-blue-100 font-medium">Happy Students</p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={1075} suffix="+" />
                  <p className="text-blue-100 font-medium">Hours of Training</p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={167} suffix="+" />
                  <p className="text-blue-100 font-medium">Community Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={teamRef} className={`text-center mb-12 transition-all duration-1000 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} width={128} height={128} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Interested in working with our goal driven team?</h2>
            <p className="text-xl text-gray-300">Check for available roles</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Available Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">ASF</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">Believe and achieve! ASF Tech Hub is an organization that focuses on bridging the gap between the tech industry and the next generation of innovators. We believe that talent is not limited to a particular background or location.</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Product Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bootcamp Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Student
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Sponsor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Tech Writer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become a Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partnership
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 ASF. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@ASF.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+234 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
