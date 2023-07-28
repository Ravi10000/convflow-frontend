const assets = {
  heroImg: 'assets/images/hero-img.png',
  group: 'assets/images/group-icon.png',
  bgImg: 'assets/images/bg-img.png',
  train: 'assets/images/train.png',
  interface: 'assets/images/interface.png',
  cloud: 'assets/images/cloud.png',
  robo: 'assets/images/robo.png',
  services: 'assets/images/services.png'
};
export const industries = {
  'financial-services': {
    image: assets.services,
    title: 'Financial Services',
    subtitle:
      'Develop proprietary LLMs inhouse. Boost productivity, improve customer experience, and streamline operations.',
    features: [
      {
        title: 'Market Analysis',
        subtitle:
          'Analyze financial documents, news articles, social media sentiment and predict market trends. Make more accurate investment decisions with the help of private LLMs that refer to credible sources.',
        link: '/',
        image: assets.heroImg
      },
      {
        title: 'Risk Assessment',
        subtitle:
          'Train models to analyze risk factors from vast amounts of data, generate risk profiles for potential investments, and model scenarios with multiple levers for a 360 degree view.',
        link: '/',
        image: assets.heroImg
      }
    ],
    benefits: {
      image: assets.robo,
      title: 'The Easiest Way to Build and Scale Generative AI Applications.',
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
