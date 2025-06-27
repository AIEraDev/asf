"use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { Play, Users, BookOpen, Award, TrendingUp } from "lucide-react";
// import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";

// interface User {
//   name: string;
//   email: string;
// }

export default function Page() {
  // const router = useRouter();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("/api/user");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUser(data.user);
  //       } else {
  //         router.push("/login");
  //       }
  //     } catch {
  //       router.push("/login");
  //     }
  //   };
  //   fetchUser();
  // }, [router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Building Tomorrow&apos;s Tech Titans Start Your Journey Here</h1>
                <p className="text-lg text-gray-600 leading-relaxed">Join our comprehensive tech education programs and transform your career with hands-on learning, expert mentorship, and industry-relevant skills.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>Over 10,000 students have started their tech journey with us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Physical or virtual? Beginner or intermediate?</h2>
            <p className="text-lg text-gray-600">Choose the learning path that fits your schedule and experience level</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Physical Courses */}
            <Card className="overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Explore Our Physical Courses</h3>
                <p className="text-blue-100">Join our in-person bootcamps and workshops for hands-on learning with direct mentorship</p>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">50+ students enrolled</span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Explore Courses →</Button>
              </CardContent>
            </Card>

            {/* Virtual Courses */}
            <Card className="overflow-hidden">
              <div className="bg-gray-800 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Explore Our Virtual Courses</h3>
                <p className="text-gray-300">Learn from anywhere with our comprehensive online programs and live virtual sessions</p>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">200+ students enrolled</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore Courses →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Learn, grow, partner with us.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Become a ASF Student",
                description: "Join our comprehensive tech education programs",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Apply for Studentship",
                description: "Get financial support for your learning journey",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Become Student & Instructor",
                description: "Learn and teach in our community-driven approach",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Partnership & Collaboration",
                description: "Partner with us to expand tech education reach",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Transforming lives through technology education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Graduates", color: "bg-blue-100" },
              { number: "5,000+", label: "Students Trained", color: "bg-green-100" },
              { number: "1,000+", label: "Projects Completed", color: "bg-red-100" },
              { number: "10,000+", label: "Lives Impacted", color: "bg-purple-100" },
            ].map((stat, index) => (
              <Card key={index} className={`text-center p-8 ${stat.color}`}>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore our hand-on workshop today</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-red-500" />
                  <h3 className="text-2xl font-bold mb-2">What is Data Analysis?</h3>
                  <p className="text-gray-300">Learn the fundamentals of data analysis</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Precious Okafor",
                role: "Data Analyst",
                content: "ASF transformed my career completely. The hands-on approach and expert mentorship helped me land my dream job in tech.",
              },
              {
                name: "David Okonkwo",
                role: "Software Developer",
                content: "The practical skills I learned at ASF were immediately applicable in my work. Best investment I've made in my career.",
              },
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                content: "The community at ASF is incredible. I'm still connected with my cohort and we continue to support each other.",
              },
              {
                name: "Grace Adebowale",
                role: "UX Designer",
                content: "From zero to hero in 6 months. ASF's curriculum is well-structured and the instructors are industry experts.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{testimonial.role}</p>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Trusted by</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center opacity-60">
            {["Airbnb", "Amazon", "Microsoft", "Spotify", "Slack", "Figma", "Google", "Meta", "Netflix", "Uber", "PayPal", "Shopify", "Stripe", "TikTok", "Twitter", "Zoom"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-8 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press & Blog Posts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to transition into tech: A comprehensive guide",
                date: "Dec 15, 2024",
                category: "Career",
              },
              {
                title: "5 skills every data analyst should have in 2024",
                date: "Dec 10, 2024",
                category: "Skills",
              },
              {
                title: "The future of remote work in tech industry",
                date: "Dec 5, 2024",
                category: "Industry",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">ASF</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering the next generation of tech professionals through comprehensive education and mentorship.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Bootcamps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@ASF.org</li>
                <li>+234 123 456 7890</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ASF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
