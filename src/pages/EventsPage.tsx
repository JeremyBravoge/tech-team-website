
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users } from "lucide-react";

const EventsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Conference 2023",
      description: "Join us for our biggest event of the year featuring keynote speakers, workshops, and networking opportunities.",
      date: "June 15-17, 2023",
      location: "San Francisco Conference Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      attendees: 1500,
      category: "Conference"
    },
    {
      id: 2,
      title: "Frontend Development Workshop",
      description: "A hands-on workshop covering the latest trends and techniques in frontend development.",
      date: "May 25, 2023",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      attendees: 250,
      category: "Workshop"
    },
    {
      id: 3,
      title: "AI and Machine Learning Meetup",
      description: "Monthly meetup for AI enthusiasts to discuss advancements in machine learning and artificial intelligence.",
      date: "June 5, 2023",
      location: "Tech Hub Downtown",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      attendees: 120,
      category: "Meetup"
    },
    {
      id: 4,
      title: "Cybersecurity Panel Discussion",
      description: "Expert panel discussing the latest threats and defensive strategies in cybersecurity.",
      date: "June 10, 2023",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1581091226033-c7e8cee4f327?auto=format&fit=crop&w=800&q=80",
      attendees: 300,
      category: "Webinar"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Web3 and Blockchain Fundamentals",
      description: "An introduction to blockchain technology and Web3 principles for developers.",
      date: "April 12, 2023",
      location: "Tech Hub Downtown",
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=800&q=80",
      attendees: 180,
      category: "Workshop"
    },
    {
      id: 6,
      title: "UX/UI Design Principles",
      description: "Learn the core principles of effective user experience and interface design.",
      date: "March 28, 2023",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80",
      attendees: 220,
      category: "Webinar"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Events Calendar"
        description="Join us for workshops, webinars, conferences, and meetups both virtual and in-person"
      />

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <SectionTitle
                    title="Upcoming Events"
                    subtitle="Join us at our upcoming events and connect with the tech community"
                  />
                  <div className="space-y-6">
                    {upcomingEvents.map(event => (
                      <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="md:col-span-1">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover object-center"
                              style={{ minHeight: '200px' }}
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <CardHeader className="px-0 pt-0">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                                  {event.category}
                                </span>
                              </div>
                              <CardTitle className="text-xl md:text-2xl">{event.title}</CardTitle>
                              <CardDescription className="text-base">{event.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-0 py-2">
                              <div className="flex flex-col space-y-2">
                                <div className="flex items-center text-gray-600">
                                  <CalendarDays className="h-4 w-4 mr-2" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Users className="h-4 w-4 mr-2" />
                                  <span>{event.attendees} Attendees</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="px-0 pb-0 pt-4">
                              <Button className="bg-techblue hover:bg-techblue-dark">RSVP Now</Button>
                              <Button variant="outline" className="ml-2">
                                Learn More
                              </Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Calendar</CardTitle>
                      <CardDescription>Browse events by date</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-sm"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-techblue hover:bg-techblue-dark">
                        View All Events
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle>Subscribe to Updates</CardTitle>
                      <CardDescription>Get notified about new events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-techblue hover:bg-techblue-dark">
                          Subscribe
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <SectionTitle
                title="Past Events"
                subtitle="Browse our previous events and access recordings"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map(event => (
                  <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.attendees} Attended</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Recording
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
