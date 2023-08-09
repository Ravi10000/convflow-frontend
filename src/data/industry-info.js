const assets = {
  heroImg: '/assets/images/hero-img.png',
  group: '/assets/images/group-icon.png',
  bgImg: '/assets/images/bg-img.png',
  train: '/assets/images/train.png',
  interface: '/assets/images/interface.png',
  cloud: '/assets/images/cloud.png',
  robo: '/assets/images/robo.png',
  benefits: '/assets/images/benefits.png',
  services: '/assets/images/services.png',
  support: '/assets/images/support.svg',
  assessment: '/assets/images/assessment.svg',
  report: '/assets/images/report.svg',
  market: '/assets/images/market.svg',
  finance: '/assets/images/finance.svg',
  research: '/assets/images/research.svg',
  automatedResearch: '/assets/images/automatedResearch.svg',
  management: '/assets/images/management.svg',
  insurance: '/assets/images/insurance.svg',
  claims: '/assets/images/claims.svg',
  sales: '/assets/images/sales.svg',
  underwriting: '/assets/images/underwriting.svg',
  startup: '/assets/images/startup.svg',
  progress: '/assets/images/progress.svg',
  moat: '/assets/images/moat.svg',
  robo2: '/assets/images/robo2.svg'
};
export const industries = {
  'financial-services': {
    image: assets.finance,
    title: 'Financial Services',
    subtitle:
      'Develop proprietary LLMs inhouse. Boost productivity, improve customer experience, and streamline operations.',
    story: {
      title: 'Enhancing Equity Research with Domain Specific LLMs',
      description:
        'With a Private ChatGPT-like system built on finetuned open source LLMs, this investment management firm was able to discover crucial insights to shape their decision making. They used ConvFlow to finetune LLMs on data from 50,000+ companies and go live within 4 weeks!'
    },
    features: [
      {
        title: 'Market Analysis',
        subtitle:
          'Analyze financial documents, news articles, social media sentiment and predict market trends. Make more accurate investment decisions with the help of private LLMs that refer to credible sources.',
        link: '/',
        image: assets.market
      },
      {
        title: 'Risk Assessment',
        subtitle:
          'Train models to analyze risk factors from vast amounts of data, generate risk profiles for potential investments, and model scenarios with multiple levers for a 360 degree view.',
        link: '/',
        image: assets.assessment
      },
      {
        title: 'Customer Support',
        subtitle:
          'Make customer support agents more productive and reduce spend by training LLMs that have a knack for understanding and responding humanely to support queries.',
        link: '/',
        image: assets.support
      },
      {
        title: 'Report Generation',
        subtitle:
          'Leverage Generative AI to automate the creation of all kinds of reports - portfolio reports, regulatory and compliance reports, and investment decks.',
        link: '/',
        image: assets.report
      }
    ],
    benefits: {
      image: assets.benefits,
      title: 'The Easiest Way to Finetune LLMs',
      // title: 'The Easiest Way to Build and Scale Generative AI Applications.',
      subtitle:
        'ConvFlow makes it super easy to train, deploy and operationalize LLMs for custom GenAI applications.',
      content: [
        {
          title: 'No Data Leaves Your System',
          subtitle:
            'Easily connect to all data sources you already use. We give you the most common integrations out of the box. No data leaves your VPC.'
        },
        {
          title: 'You Own and Control the IP',
          subtitle:
            'Pretrain or finetune your own SOTA models 10x faster! Maintain complete ownership and control on your models. '
        },
        {
          title: 'Flexible, Reliable & Scalable',
          subtitle:
            'Our no-code platform and added customizations ensure that your initiative is not limited by tooling. Get maximum reliability and scalability once you deploy.'
        }
      ]
    }
  },
  'management-consulting': {
    image: assets.research,
    title: 'Consulting & Research',
    subtitle:
      'Develop proprietary LLMs inhouse. Boost productivity, improve customer experience, and streamline operations.',
    story: {
      title: 'Boosting Analyst Productivity by 30% at a Market Research Firm',
      description:
        'Market Research firms usually spend weeks searching for information across the internet, regulatory bodies websites, annual reports, and proprietary sources. A market research company used ConvFlow to automate a large part of the research and analysis process by deploying a private and secure ChatGPT-like system for its analysts and consultants.'
    },
    features: [
      {
        title: 'Automated Research',
        subtitle:
          'Connect to credible sources of information and custom train an LLM powered assistant to automate information gathering, analysis and visualisation. Cut time spent on manual information gathering by 50%.',
        link: '/',
        image: assets.automatedResearch
      },
      {
        title: 'Knowledge Management',
        subtitle:
          'Reuse and refer to previous reports and decks produced by your firm while researching for a project. Most historical information is lost and underutilized in consulting firms. Accelerate TATs by avoiding recreation and always have a 360 degree view. ',
        link: '/',
        image: assets.management
      },
      {
        title: 'Report Generation',
        subtitle:
          'Create slide decks, documents, and spreadsheets with a few clicks. Build LLM pipelines that refer to the style and templates of your existing body of work to emulate your design language and produce great starting points that save time and reduce TAT.',
        link: '/',
        image: assets.report
      }
    ],
    benefits: {
      image: assets.benefits,
      title: 'The Easiest Way to Finetune LLMs',
      // title: 'The Easiest Way to Build and Scale Generative AI Applications.',
      subtitle:
        'ConvFlow makes it super easy to train, deploy and operationalize LLMs for custom GenAI applications.',
      content: [
        {
          title: 'No Data Leaves Your System',
          subtitle:
            'Easily connect to all data sources you already use. We give you the most common integrations out of the box. No data leaves your VPC.'
        },
        {
          title: 'You Own and Control the IP',
          subtitle:
            'Pretrain or finetune your own SOTA models 10x faster! Maintain complete ownership and control on your models. '
        },
        {
          title: 'Flexible, Reliable & Scalable',
          subtitle:
            'Our no-code platform and added customizations ensure that your initiative is not limited by tooling. Get maximum reliability and scalability once you deploy.'
        }
      ]
    }
  },
  insurance: {
    image: assets.insurance,
    title: 'Insuarance',
    subtitle:
      'Develop proprietary LLMs inhouse. Boost productivity, improve customer experience, and streamline operations.',
    story: {
      title: 'Reimagining Insurance Buying with LLMs',
      description:
        'Learn more on how one of our early adopters in the Insurance sector is leveraging the power of Generative AI to increase conversion rates through its network of field sales agents.'
    },
    features: [
      {
        title: 'Reimagined Claims',
        subtitle:
          'Process invoices, forms, and other documents in the claims process to accelerate outcomes, reduce TATs, and improve customer experience. Create LLM pipelines that integrate with your claims processing workflows seamlessly and boost efficiency by 70%.',
        link: '/',
        image: assets.claims
      },
      {
        title: 'AI Powered Underwriting',
        subtitle:
          'Make underwriting a breeze by assessing risk across multiple data points from all your sources. Price premiums dynamically and make insurance products accessible to more customers. ',
        link: '/',
        image: assets.underwriting
      },
      {
        title: 'LLM Powered Sales Assistants',
        subtitle:
          'Empower sales agents with critical information on their fingertips. Swift answers to questions about policies, premiums, and comparisons build customer confidence and increase conversion rates.',
        link: '/',
        image: assets.sales
      }
    ],
    benefits: {
      image: assets.benefits,
      title: 'The Easiest Way to Finetune LLMs',
      // title: 'The Easiest Way to Build and Scale Generative AI Applications.',
      subtitle:
        'ConvFlow makes it super easy to train, deploy and operationalize LLMs for custom GenAI applications.',
      content: [
        {
          title: 'No Data Leaves Your System',
          subtitle:
            'Easily connect to all data sources you already use. We give you the most common integrations out of the box. No data leaves your VPC.'
        },
        {
          title: 'You Own and Control the IP',
          subtitle:
            'Pretrain or finetune your own SOTA models 10x faster! Maintain complete ownership and control on your models. '
        },
        {
          title: 'Flexible, Reliable & Scalable',
          subtitle:
            'Our no-code platform and added customizations ensure that your initiative is not limited by tooling. Get maximum reliability and scalability once you deploy.'
        }
      ]
    }
  },
  startups: {
    image: assets.startup,
    title: 'Startups',
    subtitle:
      'Build your moat as a GenAI startup. Why build wrappers around GPT when you can build with proprietary LLMs. Use ConvFlow to ship your MVP and iterate blazingly fast.',
    story: {
      title: 'Reducing Customer Support Costs by 50% while CSATs Stayed Intact',
      description:
        'A Consumer Internet startup used ConvFlow to build an LLM powered Customer Support chatbot that connected to its databases for fetching real-time information and ingested their product documentation for descriptive queries. Within a quarter, this startup reduced their Customer Support function by half. The greatest thing was that their CSATs did not go down.'
    },
    features: [
      {
        title: '0-1 in Weeks',
        subtitle:
          'Build an MVP with proprietary LLMs and complex workflows by leveraging pre-built components in the ConvFlow low code platform. Iterate and ship faster! ',
        link: '/',
        image: assets.progress
      },
      {
        title: 'Build a Moat',
        subtitle:
          "Go to market faster and focus on distribution. ConvFlow's out of the box tools for LLM development enable you to ship and iterate 10x faster. Why build a wrapper when you can build proprietary LLMs faster?  ",
        link: '/',
        image: assets.moat
      },
      {
        title: 'No AI Team Needed',
        subtitle:
          'Our No Code application builder and team of experts allows you to innovate with Generative AI without the hassle of putting together an AI team first.',
        link: '/',
        image: assets.robo2
      }
    ],
    benefits: {
      image: assets.benefits,
      title: 'The Easiest Way to Finetune LLMs',
      // title: 'The Easiest Way to Build and Scale Generative AI Applications.',
      subtitle:
        'ConvFlow makes it super easy to train, deploy and operationalize LLMs for custom GenAI applications.',
      content: [
        {
          title: 'No Data Leaves Your System',
          subtitle:
            'Easily connect to all data sources you already use. We give you the most common integrations out of the box. No data leaves your VPC.'
        },
        {
          title: 'You Own and Control the IP',
          subtitle:
            'Pretrain or finetune your own SOTA models 10x faster! Maintain complete ownership and control on your models. '
        },
        {
          title: 'Flexible, Reliable & Scalable',
          subtitle:
            'Our no-code platform and added customizations ensure that your initiative is not limited by tooling. Get maximum reliability and scalability once you deploy.'
        }
      ]
    }
  }
};
