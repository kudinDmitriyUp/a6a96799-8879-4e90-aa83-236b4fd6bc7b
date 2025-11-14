"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookHeart, Film, Heart, Instagram, Sunrise, Twitter, Users, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Vera & Bennet"
          button={{
            text: "Watch Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="A Journey Through Grief"
          description="Follow Vera and Bennet as they navigate the complex stages of loss and discover that healing comes not from forgetting, but from accepting and learning to live with grief."
          tag="Now Showing"
          tagIcon={Film}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162517170-1msz7she.jpg"
          imageAlt="Vera & Bennet movie poster"
          buttons={[
            {
              text: "Watch Trailer",
              onClick: () => console.log('Watch trailer clicked')
            },
            {
              text: "Book Screening",
              href: "contact"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="The Story"
          description="Vera & Bennet is an intimate exploration of the human experience of loss. Set against the backdrop of everyday life, this deeply moving film follows two characters as they confront grief in their own unique ways. Through their parallel journeys, we witness the raw, unfiltered emotions that accompany loss - the denial, anger, bargaining, depression, and ultimately, acceptance. This is not just a story about sadness; it's about the resilience of the human spirit and the transformative power of embracing our most difficult emotions."
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Central Themes"
          description="Explore the powerful themes that drive this emotional narrative"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Stages of Grief",
              description: "An authentic portrayal of the five stages of grief, showing how each person experiences loss differently and at their own pace",
              icon: Heart
            },
            {
              title: "Human Connection",
              description: "The vital role of relationships and community in healing, demonstrating how shared experiences can provide comfort and understanding",
              icon: Users
            },
            {
              title: "Acceptance & Growth",
              description: "The transformative journey from despair to acceptance, illustrating how grief can become a teacher and catalyst for personal growth",
              icon: Sunrise
            },
            {
              title: "Memory & Legacy",
              description: "How we honor those we've lost and carry their memory forward, finding ways to celebrate life while acknowledging loss",
              icon: BookHeart
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Main Characters"
          description="Meet Vera and Bennet, two souls navigating their darkest moments"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="fade-in"
          members={[
            {
              id: "1",
              name: "Vera",
              role: "The Survivor",
              description: "A resilient woman whose world is shattered by unexpected loss. Vera's journey represents the struggle between holding on and letting go, as she learns to rebuild her life while honoring her past.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162518709-ovvxh02b.jpg",
              imageAlt: "Vera character portrait"
            },
            {
              id: "2",
              name: "Bennet",
              role: "The Seeker",
              description: "A man searching for meaning in the aftermath of tragedy. Bennet's path explores the masculine experience of grief, challenging societal expectations about strength and vulnerability.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162519300-lhbow3a0.jpg",
              imageAlt: "Bennet character portrait"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Audience Reactions"
          description="What viewers are saying about this powerful cinematic experience"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Film Critic",
              company: "Cinema Today",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162519998-ty62kd74.jpg",
              imageAlt: "Sarah Martinez portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Audience Member",
              company: "Toronto Film Festival",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162520954-51jc0oq8.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Film Enthusiast",
              company: "Cannes Premiere",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162521996-o48ckoeo.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Movie Blogger",
              company: "Independent Cinema",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162523042-93vo4lmt.jpg",
              imageAlt: "David Rodriguez portrait"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="About the Film"
          description="Common questions about Vera & Bennet"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162517827-edsdcvex.jpg"
          imageAlt="Emotional journey scene from the film"
          mediaPosition="right"
          faqs={[
            {
              id: "1",
              title: "What is the runtime of the film?",
              content: "Vera & Bennet has a runtime of approximately 118 minutes, allowing for a deep and thorough exploration of the characters' emotional journeys without rushing the healing process."
            },
            {
              id: "2",
              title: "Is this film suitable for all audiences?",
              content: "Due to mature themes involving grief, loss, and emotional content, this film is recommended for mature audiences. It contains no explicit content but deals with heavy emotional subject matter."
            },
            {
              id: "3",
              title: "Where can I watch the film?",
              content: "The film is currently screening at select theaters and film festivals. Contact us through the form below to inquire about screenings in your area or private viewing options."
            },
            {
              id: "4",
              title: "What inspired this story?",
              content: "The film draws from universal experiences of loss and the different ways people process grief. It was created to provide comfort and understanding to those who have faced similar journeys."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Book a Screening"
          description="Interested in hosting a screening or learning more about the film? Get in touch with us and we'll help you bring this powerful story to your community."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "organization",
              type: "text",
              placeholder: "Organization/Theater (Optional)",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your screening plans or questions about the film...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          onSubmit={(data) => console.log('Form submitted:', data)}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Vera & Bennet"
          columns={[
            {
              title: "Film",
              items: [
                {
                  label: "About the Story",
                  href: "about"
                },
                {
                  label: "Characters",
                  href: "team"
                },
                {
                  label: "Themes",
                  href: "feature"
                }
              ]
            },
            {
              title: "Screenings",
              items: [
                {
                  label: "Book Screening",
                  href: "contact"
                },
                {
                  label: "Festival Schedule",
                  href: "faq"
                },
                {
                  label: "Private Viewings",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/veraandbennetfilm",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/verabennetfilm",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/@veraandbennet",
              ariaLabel: "Watch trailers on YouTube"
            }
          ]}
          copyrightText="© 2025 | Vera & Bennet Film"
        />
      </div>
    </ThemeProvider>
  );
}