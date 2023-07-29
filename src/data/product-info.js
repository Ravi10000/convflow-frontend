const assets = {
  convflow: '/assets/images/convflow.png',
  productImg: '/assets/images/form-img.png'
};
export const products = {
  train: {
    image: assets.productImg,
    title: 'The Easiest Way to Train and Finetune LLMs.',
    subtitle:
      'Use ConvFlow Train to train, deploy and operationalise LLMs at scale. Get started in minutes and deploy in weeks.',
    discovers: {
      title: 'Discover What You’ve Been Missing Out On',
      items: [
        {
          title: 'Ship fast and save costs',
          description:
            'Do not reinvent the wheel.  ConvFlow  enables you with out-of-the-box open source and domain specific LLMs that serve as great starting points to build on top of.'
        },
        {
          title: 'Own and control your IP',
          description:
            'You have the ownership and control of the LLMs that you train and finetune. Do not share data with third party service providers and position yourself as an AI leader.'
        },
        {
          title: 'Privacy and security at the core',
          description:
            'All the data that you use to train and finetune your models will never leave your system. The GPUs used for training will be on your VPC, orchestrated by our IaC layer.'
        }
      ]
    },
    module: {
      title: 'LLM Finetuning Made 10x Easier with our Training Module',
      img: assets.convflow,
      features: [
        {
          title: 'All it needs is a few clicks!',
          description:
            'With ConvFlow Train, Supervised Finetuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) for your LLMs are a few clicks away. Use the finetuning methods that popular LLMs like GPT and Falcon use to develop your proprietary LLMs.'
        },
        {
          title: 'We take Data Privacy seriously.',
          description:
            'The ConvFlow train module is simply an orchestrator of training. Our platform has no access to your data, it simply enables different components to talk to each other and manages the training process. The actual training happens on your VPC on your GPUs. '
        }
      ]
    },
    features: {
      title: 'Everything you need to build on top of Open Source LLMs',
      img: assets.productImg,
      items: [
        {
          title: 'All it needs is a few clicks!',
          description:
            'With ConvFlow Train, Supervised Finetuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) for your LLMs are a few clicks away. Use the finetuning methods that popular LLMs like GPT and Falcon use to develop your proprietary LLMs.'
        },
        {
          title: 'We take Data Privacy seriously.',
          description:
            'The ConvFlow train module is simply an orchestrator of training. Our platform has no access to your data, it simply enables different components to talk to each other and manages the training process. The actual training happens on your VPC on your GPUs.'
        }
      ]
    }
  }
};
