import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Industrycards } from "../../../components/industrycards/industrycards";
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { WhyUsModel } from '../../../models/whyUs';
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { Quotes } from "../../../components/quotes/quotes";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviewmarketing',
  imports: [CommonModule,Nocarouselherosection, Industrycards, CardModule, Timeline, Faqcards, Quotes],
  templateUrl: './reviewmarketing.html',
  styleUrl: './reviewmarketing.scss'
})
export class Reviewmarketing {
herocontent: any = {
  title: `
    <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">Unlock the Power</h2>
    <span class="bg-gradient-to-r from-orange-500 to-yellow-500  bg-clip-text text-transparent font-bold tracking-tight">
      Review Marketing with Pencil Peel IMT
    </span>
  `,
  description: `
    We live in a digital-first world where reviews shape decisions. At Pencil Peel IMT, we help you harness the power of Review Marketing to boost trust, drive conversions, and grow your brand. With over 90% of consumers checking online reviews before buying, strategic review management is no longer optional—it's essential.
  `,
  image: '/dm/review/reviewhome.webp'
};

quotes = [
  {text: "Reviews that Resonate, Reputation that Shines - Pencil Peel IMT"},
  {text: "The Power of Reviews: Unlock Credibility, Drive Conversions - Pencil Peel IMT"},
  {text: "Review Marketing that Speaks Volumes: Trust, Credibility, and Growth - Pencil Peel IMT"},
  {text: "Experience the Voice of Your Customers: Review Marketing by Pencil Peel IMT"},
  {text: "Reviews that Build Trust, Drive Business - Expert Review Marketing Services by Pencil Peel IMT"}
];
//faq model
faqcards:FaqCardModel[] =[
  {
  id: 'rev1',
  title: 'What is Review Marketing?',
  description: 'Review marketing is a digital marketing strategy that involves encouraging customers to share their experiences and opinions about your products or services.',
  fullDescription: `At Pencil Peel IMT, we understand the importance of review marketing in building trust and credibility for your brand. Review marketing is a digital marketing strategy that involves encouraging customers to share their experiences and opinions about your products or services. These authentic reviews help build social proof, influence purchasing decisions, and enhance your brand’s reputation online.`,
  expanded: false,
  image: '/dm/review/what-is-review-marketing.webp'
  },
  {
  id: 'rev2',
  title: 'Why Review Marketing Matters',
  description: 'Reviews influence purchasing decisions and help build trust and credibility with your audience.',
  fullDescription: `Reviews play a crucial role in influencing purchasing decisions. Positive reviews can increase trust and credibility, while negative reviews can deter potential customers. At Pencil Peel IMT, our team will work with you to develop a review marketing strategy that highlights your brand’s strengths, manages your reputation, and builds long-term trust with your target audience.`,
  expanded: false,
  image: '/dm/review/why-review-marketing-matters.webp'
},
{
  id: 'rev3',
  title: 'How We Will Help',
  description: 'We help you leverage review marketing to enhance your online reputation and drive business growth.',
  fullDescription: `We will help you leverage review marketing to improve your online reputation and drive business growth. Our team will:
  
- Encourage customers to leave reviews: We will help you encourage customers to share their experiences and opinions about your products or services.
- Monitor and manage reviews: Our team will monitor and manage reviews across multiple platforms, ensuring that your online reputation is protected and enhanced.
- Improve your online reputation: We will help you improve your online reputation by showcasing the best of your brand and building trust with your target audience.

At Pencil Peel IMT, we provide unbiased and authentic reviews for products and services across the globe. Our team of experts and users share their experiences, opinions, and insights to help businesses and consumers make informed decisions.`,
  expanded: false,
  image: '/dm/review/how-we-help.webp'
},
{
  id: 'rev3',
  title: 'How We Will Help',
  description: 'We help you leverage review marketing to enhance your online reputation and drive business growth.',
  fullDescription: `
    <p>We will help you leverage review marketing to improve your online reputation and drive business growth. Our team will:</p>
    <ul class="list-disc list-inside mt-2 space-y-1">
      <li><strong>Encourage customers to leave reviews:</strong> We will help you encourage customers to share their experiences and opinions about your products or services.</li>
      <li><strong>Monitor and manage reviews:</strong> Our team will monitor and manage reviews across multiple platforms, ensuring that your online reputation is protected and enhanced.</li>
      <li><strong>Improve your online reputation:</strong> We will help you improve your online reputation by showcasing the best of your brand and building trust with your target audience.</li>
    </ul>
    <p class="mt-3">
      At Pencil Peel IMT, we provide unbiased and authentic reviews for products and services across the globe.
      Our team of experts and users share their experiences, opinions, and insights to help businesses and consumers make informed decisions.
    </p>
  `,
  expanded: false,
  image: '/dm/review/how-we-help.webp'
}
]

reviewServices = [
  {
    title: 'Product Reviews',
    description:
      "We will review products from various industries, including electronics, fashion, beauty, and more. Our team will provide detailed reviews that highlight the product's features, benefits, and drawbacks.",
    icon: 'pi-box'
  },
  {
    title: 'Service Reviews',
    description:
      'Our team will evaluate services from companies, including customer support, quality, and overall experience. We will provide reviews that help businesses and consumers understand the strengths and weaknesses of each service.',
    icon: 'pi-briefcase'
  },
  {
    title: 'Comparative Reviews',
    description:
      'We will compare similar products and services, highlighting their strengths and weaknesses. Our team will provide detailed comparisons that help businesses and consumers make informed decisions.',
    icon: 'pi-sliders-h'
  },
  {
    title: 'In-Depth Team Reviews',
    description:
      'We will conduct in-depth reviews of products and services, providing detailed analysis and recommendations.',
    icon: 'pi-search-plus'
  },
  {
    title: 'Expert Reviews',
    description:
      'Our team of experts will provide reviews based on their extensive knowledge and experience in their respective fields.',
    icon: 'pi-star'
  },
  {
    title: 'User Reviews',
    description:
      'We will collect and analyse user reviews to provide insights into the pros and cons of products and services.',
    icon: 'pi-users'
  },
  {
    title: 'Comparison Reviews',
    description:
      'We will compare multiple products or services, highlighting their features, benefits, and drawbacks.',
    icon: 'pi-clone'
  },
  {
    title: 'Pros and Cons Reviews',
    description:
      'Our team will provide reviews that highlight the pros and cons of products or services, helping businesses and consumers make informed decisions.',
    icon: 'pi-check-circle'
  },
  {
    title: 'Best-of Reviews',
    description:
      'We will identify the best products or services in a particular category, providing recommendations for businesses and consumers.',
    icon: 'pi-trophy'
  },
  {
    title: 'Review Analysis',
    description:
      'Our team will analyse reviews from multiple sources, providing insights into the strengths and weaknesses of products or services.',
    icon: 'pi-chart-line'
  },
  {
    title: 'Product Rating Reviews',
    description:
      'We will provide rating reviews that help businesses and consumers quickly understand the quality and performance of products.',
    icon: 'pi-star-fill'
  },
  {
    title: 'Service Evaluation Reviews',
    description:
      'Our team will evaluate services based on criteria such as customer support, quality, and overall experience.',
    icon: 'pi-cog'
  },
  {
    title: 'Competitor Analysis Reviews',
    description:
      "We will analyse competitors' products and services, providing insights into their strengths and weaknesses.",
    icon: 'pi-sitemap'
  },
  {
    title: 'Market Trend Reviews',
    description:
      'Our team will provide reviews that analyse market trends and provide insights into the future of products and services.',
    icon: 'pi-chart-bar'
  },
  {
    title: 'Product Demonstration Reviews',
    description:
      'We will provide reviews that demonstrate the features and benefits of products.',
    icon: 'pi-video'
  },
  {
    title: 'Customer Feedback Reviews',
    description:
      'Our team will collect and analyse customer feedback to provide insights into the strengths and weaknesses of products and services.',
    icon: 'pi-comments'
  }
];

reviewMarketingBenefits = [
  {
    title: 'Increase trust and credibility',
    description:
      'We will help you build trust and credibility with your target audience by showcasing positive reviews and testimonials.',
    icon: 'pi-shield'
  },
  {
    title: 'Improve your online reputation',
    description:
      'Our team will work with you to improve your online reputation and protect your brand from negative reviews.',
    icon: 'pi-thumbs-up'
  },
  {
    title: 'Drive business growth',
    description:
      'We will help you drive business growth by increasing conversions and sales through effective review marketing strategies.',
    icon: 'pi-chart-line'
  },
  {
    title: 'Enhance customer engagement',
    description:
      'Our team will help you engage with your customers through reviews and feedback, building a loyal customer base.',
    icon: 'pi-comments'
  },
  {
    title: 'Gain valuable insights',
    description:
      'We will provide you with valuable insights into customer behaviour and preferences, helping you make informed business decisions.',
    icon: 'pi-database'
  },
  {
    title: 'Stay ahead of competitors',
    description:
      "Our team will help you stay ahead of your competitors by showcasing your brand's strengths and unique selling points.",
    icon: 'pi-bolt'
  },
  {
    title: 'Increase website traffic',
    description:
      'We will help you increase website traffic by showcasing reviews and testimonials that attract potential customers.',
    icon: 'pi-globe'
  },
  {
    title: 'Improve SEO',
    description:
      "Our team will help you improve your website's search engine ranking by incorporating reviews and keywords.",
    icon: 'pi-search'
  }
];



//subservices
subtitle:string = 'Pencil Peel IMT Review Marketing Services';
subdescription:string = 'At Pencil Peel IMT, we offer a wide range of review services to help businesses and consumers make informed decisions. Our team of experts will work with you to develop customized review services that meet your needs.';
reviewMarketingServices:any[] = [
  {
    id: 'rev1',
    title: 'Product Reviews',
    description: 'Detailed product reviews across industries including electronics, fashion, and more.',
    fullDescription: `
      <p><strong>Product Reviews</strong> help showcase the features, benefits, and drawbacks of various products.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>We cover diverse industries such as electronics, beauty, fashion, and more.</li>
        <li>Each review highlights key features, performance, usability, and value for money.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/product-reviews.webp',
  },
  {
    id: 'rev2',
    title: 'Service Reviews',
    description: 'Evaluation of services including customer support, quality, and overall experience.',
    fullDescription: `
      <p><strong>Service Reviews</strong> provide insights into the quality and experience of services offered by companies.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>We review service providers across industries and measure factors like responsiveness and professionalism.</li>
        <li>We help consumers and businesses understand what to expect from different services.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/service-reviews.webp',
  },
  {
    id: 'rev3',
    title: 'Comparative Reviews',
    description: 'Side-by-side comparison of similar products and services.',
    fullDescription: `
      <p><strong>Comparative Reviews</strong> assist in choosing the best product or service among multiple options.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Highlighting differences in features, pricing, performance, and customer satisfaction.</li>
        <li>Ideal for helping customers make informed decisions quickly and confidently.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/comparative-reviews.webp',
  },
  {
    id: 'rev4',
    title: 'Expert Reviews',
    description: 'Professional insights and evaluations by subject matter experts.',
    fullDescription: `
      <p><strong>Expert Reviews</strong> are trusted evaluations written by individuals with specialized knowledge.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>In-depth technical analysis and performance testing.</li>
        <li>Trusted recommendations backed by real-world experience.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/expert-reviews.webp',
  },
  {
    id: 'rev5',
    title: 'User Reviews & Feedback',
    description: 'Collected reviews from actual users to showcase authentic experiences.',
    fullDescription: `
      <p><strong>User Reviews</strong> provide genuine feedback from real customers.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>We collect and analyze user reviews across multiple platforms.</li>
        <li>Help in identifying recurring trends, issues, or standout features.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/user-reviews.webp',
  },
  {
    id: 'rev6',
    title: 'Pros and Cons Reviews',
    description: 'Balanced reviews outlining the strengths and limitations of products or services.',
    fullDescription: `
      <p><strong>Pros and Cons Reviews</strong> simplify decisions by clearly stating the good and the bad.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Each review is formatted to make comparisons easier.</li>
        <li>Focused on objectivity and customer decision support.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/pros-cons-reviews.webp',
  },
  {
    id: 'rev7',
    title: 'Best-of Reviews',
    description: 'Top recommendations for products or services in a category.',
    fullDescription: `
      <p><strong>Best-of Reviews</strong> curate the top-rated items or services in any given category.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Based on expert analysis, customer reviews, and market trends.</li>
        <li>Perfect for time-strapped users who want quick recommendations.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/best-of-reviews.webp',
  },
  {
    id: 'rev8',
    title: 'Competitor Analysis Reviews',
    description: 'Insightful comparisons between your product and competitors.',
    fullDescription: `
      <p><strong>Competitor Analysis Reviews</strong> position your product or service in the competitive landscape.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Identify strengths and weaknesses in comparison to market rivals.</li>
        <li>Ideal for brand strategy and product positioning.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/competitor-analysis-reviews.webp',
  },
  {
    id: 'rev9',
    title: 'Review Analysis',
    description: 'Summarizing and analyzing feedback from various platforms.',
    fullDescription: `
      <p><strong>Review Analysis</strong> uncovers deeper insights from aggregate customer reviews.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Data-driven interpretation of feedback and trends.</li>
        <li>Helps improve products and customer satisfaction.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/review-analysis.webp',
  },
  {
    id: 'rev10',
    title: 'Product Demonstration Reviews',
    description: 'Hands-on reviews showcasing real-world use and benefits.',
    fullDescription: `
      <p><strong>Product Demonstration Reviews</strong> visually highlight how a product functions in practice.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li>Great for technical or high-engagement consumer products.</li>
        <li>Builds trust through transparency and authenticity.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/review/product-demo-reviews.webp',
  }
];
//timelineitems
timelineItems = [
  {
    status: 'Research',
    icon: 'pi pi-search',
    color: '#3B82F6', // Tailwind Blue-500
    description: 'We research products and services, gathering information from various sources.'
  },
  {
    status: 'Testing',
    icon: 'pi pi-cog',
    color: '#F59E0B', // Tailwind Amber-500
    description: 'We test products and services, evaluating their quality, features, and performance.'
  },
  {
    status: 'Review',
    icon: 'pi pi-pencil',
    color: '#10B981', // Tailwind Emerald-500
    description: 'We write detailed reviews, highlighting the strengths and weaknesses of products and services.'
  }
];

//industries details
indtitle:string = 'Industries We Serve with Review Marketing';
inddescription:string = `At Pencil Peel IMT, our team of experts has extensive experience in review marketing services. Here's why you should choose us:`
industryCards = [
  {
    title: 'E-commerce',
    description: 'We\'ll help you encourage customers to leave reviews for products, improving product visibility and credibility.',
    image: '/dm/industries/iecommerce.webp',
  },
  {
    title: 'Hospitality',
    description: 'We\'ll help you encourage guests to leave reviews, improving hotel reputation and credibility.',
    image: '/dm/industries/ihospital.webp',
  },
  {
    title: 'Healthcare',
    description: 'We\'ll help you encourage patients to leave reviews, improving doctor reputation and credibility.',
    image: '/dm/industries/ipharma.webp',
  },
  {
    title: 'Restaurants & Bars',
    description: 'We\'ll help you encourage customers to leave reviews, improving restaurant reputation and credibility.',
    image: '/dm/industries/ibar.webp',
  },
  {
    title: 'Retail',
    description: 'We\'ll help you encourage customers to leave reviews, improving store reputation and credibility.',
    image: '/dm/industries/iretail.webp',
  }
];
//service details
sertitle:string = 'Service-Based Businesses We Support';
serdescription:string = ' Pencil Peel specializes in helping service-based businesses boost their reputation through strategic review marketing.';
servicecards = [
  {
    title: 'Law Firms',
    description: 'We’ll help you encourage clients to leave reviews, improving law firm reputation and credibility.',
    image: '/dm/industries/ilawfirms.webp',
  },
  {
    title: 'Medical Spas',
    description: 'We’ll help you encourage clients to leave reviews, improving medical spa reputation and credibility.',
    image: '/dm/industries/imedspa.webp',
  },
  {
    title: 'Home Services',
    description: 'We’ll help you encourage clients to leave reviews, improving home service reputation and credibility.',
    image: '/dm/industries/ihomeservice.webp',
  },
  {
    title: 'Financial Services',
    description: 'We’ll help you encourage clients to leave reviews, improving financial service reputation and credibility.',
    image: '/dm/industries/ifinancial.webp',
  },
  {
    title: 'Insurance Agencies',
    description: 'We’ll help you encourage clients to leave reviews, improving insurance agency reputation and credibility.',
    image: '/dm/industries/iinsurance.webp',
  }
];
//whyus
whyUs:WhyUsModel ={
  title:'Benefits of Review Marketing with Pencil Peel',
  description:`By partnering with Pencil Peel IMT, you can trust that you're working with a team of experts who are dedicated to delivering innovative review marketing solutions that drive business growth. We will help you`,
  List: [
  {
    icon: 'pi pi-thumbs-up',
    title: 'Increase Trust & Credibility',
    description: 'We will help you build trust and credibility with your target audience by showcasing positive reviews and testimonials.',
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-shield',
    title: 'Improve Your Online Reputation',
    description: 'Our team will work with you to improve your online reputation and protect your brand from negative reviews.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Drive Business Growth',
    description: 'We will help you drive business growth by increasing conversions and sales through effective review marketing strategies.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-comments',
    title: 'Enhance Customer Engagement',
    description: 'Our team will help you engage with your customers through reviews and feedback, building a loyal customer base.',
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-database',
    title: 'Gain Valuable Insights',
    description: 'We will provide you with valuable insights into customer behaviour and preferences, helping you make informed business decisions.',
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-star',
    title: 'Stay Ahead of Competitors',
    description: 'Our team will help you stay ahead of your competitors by showcasing your brand\'s strengths and unique selling points.',
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-arrow-right-arrow-left',
    title: 'Increase Website Traffic',
    description: 'We will help you increase website traffic by showcasing reviews and testimonials that attract potential customers.',
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-globe',
    title: 'Improve SEO',
    description: 'Our team will help you improve your website\'s search engine ranking by incorporating reviews and keywords.',
    background: 'bg-rose-500',
    border: 'border-rose-500'
  }
]
}

}
