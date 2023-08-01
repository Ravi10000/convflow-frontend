const assets = {
  convflow: '/assets/images/convflow.png',
  defaultImg: '/assets/images/form-img.png',
  trainImg: '/assets/images/train.png',
  inferenceImg: '/assets/images/inference.png',
  dataPlatformImg: '/assets/images/data-platform.png'
};
export const products = {
  train: {
    // image: assets.defaultImg,
    title: {
      highlightText: 'The Easiest Way to Train',
      normalText: 'and Finetune ',
      highlightText2: 'LLMs.'
    },
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
      title: {
        normalText: 'LLM Finetuning Made 10x Easier with our',
        highlightText: 'Training Module'
      },
      img: assets.trainImg
    },
    features: {
      title: {
        normalText: 'Everything you need to build on top of',
        highlightText: 'Open Source LLMs'
      },
      img: assets.trainImg,
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
  },
  inference: {
    // image: assets.defaultImg,
    title: {
      highlightText: 'The Fastest Way to Build LLM Applications',
      normalText: 'for Enterprises.'
    },
    subtitle:
      'Unleash the Power of No-Code AI with ConvFlow Inference. Seamlessly construct LLM pipelines, select from a variety of LLMs, and expedite your Generative AI initiatives by 10x.',
    discovers: {
      title: "Discover What You've Been Missing Out On",
      items: [
        {
          title: 'Launch swiftly, scale smoothly',
          description:
            'Do not waste time figuring out the how of building LLM powered applications. ConvFlow enables you with out-of-the-box components that make it super easy to knit together an LLM app in mere weeks.'
        },
        {
          title: 'Maintain control of data and IP',
          description:
            'You have the ownership and control of the applications that you build with ConvFlow. Do not share data with third party service providers and position yourself as an AI leader.'
        },
        {
          title: 'Single platform, varied use cases',
          description:
            'Be it a chatbot or a search engine or a language translation app, you can build it all on ConvFlow. Support the needs of all your departments with multiple pipelines from one place.'
        }
      ]
    },
    module: {
      title: {
        normalText: 'Building LLM Apps Made 10x Faster with our',
        highlightText: 'Inference Module'
      },
      img: assets.inferenceImg
    },
    features: {
      title: {
        normalText: 'Everything you need to build and deploy your',
        highlightText: 'LLM Application'
      },
      img: assets.trainImg,
      items: [
        {
          title: 'Drag and drop. No code.',
          description:
            'With ConvFlow Inference, building LLM applications is a breeze. Skip writing tons of boilerplate code and experiment faster with a no-code drag and drop interface. When you’re done, deploy privately and securely with a few clicks.'
        },
        {
          title: 'We take Data Privacy seriously.',
          description:
            'During the development process as well as post deployment, no data leaves your systems. Keep everything inhouse and secured. It is our firm belief that enterprises need not share their valuable data to third party service providers in the process of building LLM applications.'
        }
      ]
    }
  },
  platform: {
    // image: assets.defaultImg,
    title: {
      highlightText: 'The Most Secure Way to Manage',
      normalText: 'Your Data.'
    },
    subtitle:
      'Build robust LLM applications with human and machine feedback. ConvFlow empowers enterprises to safeguard their data and adopt best practices for Data Governance.',
    discovers: {
      title: 'What would you like to build?',
      items: [
        {
          title: 'High quality training data',
          description:
            'Garbage in is garbage out for AI models. Collaborate easily and label your data effectively for high quality training datasets. ConvFlow supports labelling for pre-training, SFT, and RLHF - all at one place.'
        },
        {
          title: 'No data leaves your system',
          description:
            'All the data that you feed into ConvFlow never leaves your system. Connect to any data warehouse or data lake within your VPC to seamlessly prepare high quality training datasets.'
        },
        {
          title: 'Guardrails and access control',
          description:
            'Building with LLMs poses special kind of risks around data privacy and access. With built in guardrails and access control functions, ensure that no data gets shared with unauthorised stakeholders internally.'
        }
      ]
    },
    module: {
      title: {
        normalText: 'Data Governance Made 10x Simpler with our',
        highlightText: 'Data Module'
      },
      img: assets.dataPlatformImg
    },
    features: {
      title: {
        normalText: 'Everything you need to manage data for your',
        highlightText: 'LLM Application'
      },
      img: assets.trainImg,
      items: [
        {
          title: 'From labeling to monitoring.',
          description:
            'With ConvFlow Data Platform, data governance across the LLMOps lifecycle becomes simpler and more foolproof. ConvFlow Data Platform is the answer to hairy questions around privacy, security, and access of data while building with LLMs. Functionality and security go hand-in-hand with ConvFlow.'
        },
        {
          title: 'We take Data Privacy seriously.',
          description:
            'During the development process as well as post deployment, no data leaves your systems. Keep everything inhouse and secured. It is our firm belief that enterprises need not share their valuable data to third party service providers in the process of building LLM applications.'
        }
      ]
    }
  }
};
